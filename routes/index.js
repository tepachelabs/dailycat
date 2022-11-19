const express = require('express');
const router = express.Router();

const { cats } = require('../mock/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cats });
});

module.exports = router;
