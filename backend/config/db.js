const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jayram_jewellers', {
            serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.log('Running in offline mode (Mock Data)');
        // process.exit(1); // Don't exit, allow app to run with mock data
    }
};

module.exports = connectDB;
