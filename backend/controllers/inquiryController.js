const Inquiry = require('../models/Inquiry');

// @desc    Create a new inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const inquiry = await Inquiry.create({
            name,
            email,
            phone,
            message,
        });

        res.status(201).json(inquiry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createInquiry,
    getInquiries,
};
