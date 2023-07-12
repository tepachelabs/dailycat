const express = require('express');
const router = express.Router();

// ** Mongo Model
const { Cat } = require('../db/models/cat');

// ** Utils
const { PAGES_OFFSET, PAGINATION_LIMIT } = require('../utils/contants');
const { catsWithDateFormatted } = require('../utils/date-reformat');

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

router.get('/:page', async (req, res) => {
  let rawPageNumber = req.params.page;

  if (isNaN(rawPageNumber)) {
    res.render('pages/404');
    return;
  }

  let pageNumber = parseInt(rawPageNumber);

  const skip = pageNumber <= 0 ? 0 : (pageNumber - 1) * PAGINATION_LIMIT;

  await handleRequest(req, res, skip, pageNumber);
});

router.get('/', async (req, res) => {
  const skip = 0;
  await handleRequest(req, res, skip);
});

//The 404 Route (ALWAYS Keep this as the last route)

router.get('*', (req, res) => {
  res.render('pages/404');
});

module.exports = router;
