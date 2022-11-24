const express = require('express');
const axios = require('axios');
const router = express.Router();

const { cats } = require('../mock/data');

/* GET home page. */
router.get('/', function(req, res) {

  res.render('index', { cats });
});

module.exports = router;
