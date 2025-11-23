const mongoose = require('mongoose');

const inquirySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'New',
        enum: ['New', 'Contacted', 'Closed'],
    },
}, {
    timestamps: true,
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;
