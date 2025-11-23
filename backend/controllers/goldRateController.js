const GoldRate = require('../models/GoldRate');

// @desc    Get latest gold rates
// @route   GET /api/gold-rates
// @access  Public
// @desc    Get latest gold rates
// @route   GET /api/gold-rates
// @access  Public
const getGoldRates = async (req, res) => {
    try {
        // Check if DB is connected
        if (require('mongoose').connection.readyState !== 1) {
            return res.json({
                gold22k: 6850,
                gold24k: 7450,
                silver: 88.50,
                updatedAt: new Date()
            });
        }

        const rates = await GoldRate.findOne().sort({ createdAt: -1 });
        if (!rates) {
            return res.json({
                gold22k: 6850,
                gold24k: 7450,
                silver: 88.50,
                updatedAt: new Date()
            });
        }
        res.json(rates);
    } catch (error) {
        // Fallback to mock data on error
        console.error('Error fetching rates, using mock data:', error.message);
        res.json({
            gold22k: 6850,
            gold24k: 7450,
            silver: 88.50,
            updatedAt: new Date()
        });
    }
};

// @desc    Update gold rates
// @route   POST /api/gold-rates
// @access  Private/Admin
const updateGoldRates = async (req, res) => {
    const { gold22k, gold24k, silver } = req.body;

    try {
        if (require('mongoose').connection.readyState !== 1) {
            return res.status(201).json({
                gold22k,
                gold24k,
                silver,
                updatedAt: new Date(),
                note: "Mock update (DB offline)"
            });
        }

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
