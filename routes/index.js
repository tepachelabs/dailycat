const express = require('express');
const router = express.Router();
const path = require('path');

// ** Mongo Model
const { Cat } = require('../db/models/cat');

// ** Utils
const { PAGINATION_LIMIT } = require('../utils/contants');
const { catsWithDateFormatted } = require('../utils/date-reformat');

router.get('/', (req, res) => {
  Cat.find({})
    .sort({ date: -1 })
    .limit(PAGINATION_LIMIT)
    .skip(0)
    .then((result) => {
      Cat.countDocuments({}, (err, count) => {
        res.render('pages/index', {
          total: count,
          data: catsWithDateFormatted(result, {
            cats: result,
          }),
        });
      });
    })
    .catch((error) => {
      res.render('pages/index');
    });
});

//The 404 Route (ALWAYS Keep this as the last route)

router.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

module.exports = router;
