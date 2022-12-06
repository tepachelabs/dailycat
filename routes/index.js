const express = require('express');
const router = express.Router();

const {Cat} = require("../db/models/cat")

/* GET home page. */
router.get('/', function(req, res) {
  Cat.find({}).then((result) => {
    res.render('index', { cats: result });
  }).catch(() => {
    res.render('error', { cats:[] });
  });
});

module.exports = router;
