const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

const products = [
    {
        name: 'Royal Kundan Necklace',
        type: 'Necklace',
        price: 150000,
        weight: 25.5,
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop',
        description: 'Exquisite Kundan necklace with intricate detailing.',
        featured: true
    },
    {
        name: 'Diamond Solitaire Ring',
        type: 'Ring',
        price: 45000,
        weight: 3.2,
        category: 'Rings',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop',
        description: 'Classic diamond solitaire ring for special occasions.',
        featured: true
    },
    {
        name: 'Traditional Gold Jhumka',
        type: 'Earrings',
        price: 65000,
        weight: 12.0,
        category: 'Earrings',
        image: 'https://images.unsplash.com/photo-1635767798638-3e2523c96d27?q=80&w=1976&auto=format&fit=crop',
        description: 'Traditional gold jhumkas with elegant design.',
        featured: false
    },
    {
        name: 'Antique Gold Bangle',
        type: 'Bangles',
        price: 85000,
        weight: 18.5,
        category: 'Bangles',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop',
        description: 'Antique finish gold bangle with intricate carvings.',
        featured: false
    },
    {
        name: 'Bridal Polki Set',
        type: 'Bridal Sets',
        price: 450000,
        weight: 85.0,
        category: 'Bridal Sets',
        image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2068&auto=format&fit=crop',
        description: 'Complete bridal polki set for the perfect wedding look.',
        featured: true
    },
    {
        name: 'Rose Gold Pendant',
        type: 'Necklace',
        price: 25000,
        weight: 4.5,
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
        description: 'Elegant rose gold pendant for daily wear.',
        featured: false
    }
];

const importData = async () => {
    try {
        await connectDB();

        // Check if products already exist to avoid duplicates (optional, but good practice)
        // For now, we'll just insert them. If you want to clear first: await Product.deleteMany();

        const count = await Product.countDocuments();
        if (count === 0) {
            await Product.insertMany(products);
            console.log('Data Imported!');
        } else {
            console.log('Products already exist, skipping import.');
        }

        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
