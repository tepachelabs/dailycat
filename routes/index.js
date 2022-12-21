const express = require('express');
const router = express.Router();
const { dateFormat } = require('../utils/date-reformat');
const { Cat } = require('../db/models/cat');

/* GET home page. */
router.get('/', function (req, res) {
  Cat.find({})
    .then((result) => {
      res.render('index', { cats: dateFormat(result) });
    })
    .catch(() => {
      res.render('index', { cats: [] });
    });
});

module.exports = router;
