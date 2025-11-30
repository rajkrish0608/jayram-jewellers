const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

const checkProducts = async () => {
    try {
        await connectDB();
        const products = await Product.find({});
        console.log(`Found ${products.length} products:`);
        products.forEach(p => {
            console.log(`- Name: ${p.name}`);
            console.log(`  Image: ${p.image}`);
            console.log(`  Description: ${p.description}`);
            console.log('---');
        });
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkProducts();
