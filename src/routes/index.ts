import express from 'express';
const router = express.Router();

// ** Mongo Model
import { Cat } from '../db/models/cat';

// ** Utils
import { PAGES_OFFSET, PAGINATION_LIMIT } from '../utils/contants';
import { catsWithDateFormatted } from '../utils/date-reformat';

// @ts-ignore
const handleRequest = async (req, res, skip, pageNumber = 1) => {
  try {
    const cats = await Cat.find({})
      .limit(PAGINATION_LIMIT)
      .sort({ date: -1 })
      .skip(skip);

    const count = await Cat.countDocuments({});

    res.render('pages/index', {
      pageNumber,
      pageOffset: PAGES_OFFSET,
      paginationLimit: PAGINATION_LIMIT,
      total: count,
      data: catsWithDateFormatted(cats),
    });
  } catch (error) {
    res.render('pages/error');
  }
};

// @ts-ignore
router.get('/:page', async (req, res) => {
  let rawPageNumber = req.params.page as any;

  if (isNaN(rawPageNumber)) {
    res.render('pages/404');
    return;
  }

  let pageNumber = parseInt(rawPageNumber);

  const skip = pageNumber <= 0 ? 0 : (pageNumber - 1) * PAGINATION_LIMIT;

  await handleRequest(req, res, skip, pageNumber);
});

// @ts-ignore
router.get('/', async (req, res) => {
  const skip = 0;
  await handleRequest(req, res, skip);
});

//The 404 Route (ALWAYS Keep this as the last route)
// @ts-ignore
router.get('*', (req, res) => {
  res.render('pages/404');
});

export default router;
