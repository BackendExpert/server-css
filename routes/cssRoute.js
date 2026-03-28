const express = require('express');
const CssController = require('../controllers/cssController');

const router = express.Router();

router.get('/get-styles', CssController.fetchallStyles)

module.exports = router;