const express = require('express');
const router = express.Router();
const operations = require('./operations');

router.use("/firstRoute", operations);

module.exports = router;
