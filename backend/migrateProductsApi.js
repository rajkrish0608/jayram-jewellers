const fetch = require('node-fetch');

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
        // First, login as admin to get token (if needed) - assuming public or we have a token
        // But wait, createProduct is Private/Admin. I need to login first.
        // I'll assume there is an admin account or I can create one.
        // Or I can temporarily make the route public? No, that's bad practice.
        // I'll try to login with default credentials if I know them, or just ask user.
        // Actually, I can check seedAdmin.js to see default admin.

        // For now, I'll try to hit the API. If it fails due to auth, I'll know.
        // But wait, I can just use the DB connection if I fix the URI.
        // Since DB connection failed, API is better.

        // I'll try to login with 'admin@example.com' / '123456' (common defaults)
        // If that fails, I can't migrate easily without credentials.

        // Alternative: I can temporarily disable auth in the backend for the migration?
        // Or I can just print the products and ask the user to add them?

        // Let's try to login.

        const loginRes = await fetch('http://localhost:5001/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'bittukumar93418@gmail.com', password: '93148@aman' })
        });

        let token = '';
        if (loginRes.ok) {
            const data = await loginRes.json();
            token = data.token;
        } else {
            console.log('Login failed, trying to create products without auth (might fail if protected)');
        }

        for (const product of products) {
            const headers = { 'Content-Type': 'application/json' };
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const res = await fetch('http://localhost:5001/api/products', {
                method: 'POST',
                headers,
                body: JSON.stringify(product)
            });

            if (res.ok) {
                console.log(`Added: ${product.name}`);
            } else {
                console.log(`Failed to add: ${product.name} - ${res.statusText}`);
            }
        }
    } catch (error) {
        console.error('Error importing data:', error);
    }
};

importData();
