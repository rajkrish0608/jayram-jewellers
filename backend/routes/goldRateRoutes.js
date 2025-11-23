const express = require('express');
const router = express.Router();
const {
    getGoldRates,
    updateGoldRates,
} = require('../controllers/goldRateController');

router.route('/').get(getGoldRates).post(updateGoldRates);

module.exports = router;
