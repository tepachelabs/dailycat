const express = require('express');
const router = express.Router();
const { dateFormat } = require('../../utils/date-reformat');
const { Cat } = require('../../db/models/cat');
const { PAGINATION_LIMIT } = require('../../utils/contants');

/* GET home page. */
router.get('/cats', function (req, res) {
  let { page } = req.query;

  if (!page) {
    page = 1;
  }
  const skip = (page - 1) * PAGINATION_LIMIT;

  Cat.find({})
    .limit(PAGINATION_LIMIT)
    .skip(skip)
    .then((result) => {
      Cat.countDocuments({}, (err, count) => {
        res.status(200).json({
          total: count,
          data: dateFormat(result),
        });
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = router;