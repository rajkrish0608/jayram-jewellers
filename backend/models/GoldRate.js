const mongoose = require('mongoose');

const goldRateSchema = mongoose.Schema({
    gold18k: {
        type: Number,
        required: true,
    },
    gold24k: {
        type: Number,
        required: true,
    },
    silver: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const GoldRate = mongoose.model('GoldRate', goldRateSchema);

module.exports = GoldRate;
