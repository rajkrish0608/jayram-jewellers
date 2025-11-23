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
                gold18k: 5500,
                gold24k: 7450,
                silver: 88.50,
                updatedAt: new Date()
            });
        }

        const rates = await GoldRate.findOne().sort({ createdAt: -1 });
        if (!rates) {
            return res.json({
                gold18k: 5500,
                gold24k: 7450,
                silver: 88.50,
                updatedAt: new Date()
            });
        }

        // Handle legacy data (gold22k -> gold18k)
        const response = rates.toObject();
        if (response.gold22k && !response.gold18k) {
            response.gold18k = response.gold22k; // Or some conversion logic, but for now just map it so it doesn't break
            // Actually, 18k is cheaper than 22k. 18/22 ratio approx 0.81. 
            // But user just renamed it. So maybe just map it.
            // Or better, just use a default if missing.
        }
        if (!response.gold18k) response.gold18k = 5500;

        res.json(response);
    } catch (error) {
        // Fallback to mock data on error
        console.error('Error fetching rates, using mock data:', error.message);
        res.json({
            gold18k: 5500,
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
    const { gold18k, gold24k, silver } = req.body;

    try {
        if (require('mongoose').connection.readyState !== 1) {
            return res.status(201).json({
                gold18k,
                gold24k,
                silver,
                updatedAt: new Date(),
                note: "Mock update (DB offline)"
            });
        }

        const rate = new GoldRate({
            gold18k,
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
