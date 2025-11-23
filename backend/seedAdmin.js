const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');
const connectDB = require('./config/db');

dotenv.config();

const seedAdmin = async () => {
    try {
        await connectDB();

        const email = 'bittukumar93418@gmail.com';
        const password = '93148@aman';
        const name = 'Admin';

        // Check if admin exists
        const adminExists = await Admin.findOne({ email });

        if (adminExists) {
            // Update password
            adminExists.password = password;
            await adminExists.save();
            console.log('Admin password updated successfully');
        } else {
            // Create new admin
            await Admin.create({
                name,
                email,
                password
            });
            console.log('Admin created successfully');
        }

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedAdmin();
