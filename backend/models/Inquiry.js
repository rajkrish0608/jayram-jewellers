const mongoose = require('mongoose');

const inquirySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
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
        enum: ['New', 'Read', 'Replied'],
        default: 'New',
    },
}, {
    timestamps: true,
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;
