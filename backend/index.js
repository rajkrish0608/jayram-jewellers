const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const goldRateRoutes = require('./routes/goldRateRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/gold-rates', goldRateRoutes);
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/inquiries', require('./routes/inquiryRoutes'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
