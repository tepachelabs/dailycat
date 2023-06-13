const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/index.html'));
});

//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});
module.exports = router;
