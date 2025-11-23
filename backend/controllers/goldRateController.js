const GoldRate = require('../models/GoldRate');

// @desc    Get latest gold rates
// @route   GET /api/gold-rates
// @access  Public
const getGoldRates = async (req, res) => {
    try {
        const rates = await GoldRate.findOne().sort({ createdAt: -1 });
        res.json(rates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update gold rates
// @route   POST /api/gold-rates
// @access  Private/Admin
const updateGoldRates = async (req, res) => {
    const { gold22k, gold24k, silver } = req.body;

    try {
        const rate = new GoldRate({
            gold22k,
            gold24k,
            silver,
        });

        const createdRate = await rate.save();
        res.status(201).json(createdRate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getGoldRates,
    updateGoldRates,
};
