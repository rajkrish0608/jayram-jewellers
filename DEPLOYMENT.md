# 🚀 Single-Click Vercel Deployment Guide

Jayram Jewellers is fully optimized to run **directly on Vercel as a single standalone app** with **zero external server setup**.

---

## ⚡ Quick Deployment Steps (Vercel)

### Step 1: Import Repository
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** -> **"Project"**.
3. Import your **GitHub repository** (`jayram-jewellers`).

### Step 2: Configure Project Settings
- **Framework Preset**: Next.js *(Auto-detected)*
- **Root Directory**: `frontend` *(Click Edit and select the `frontend` folder)*

### Step 3: (Optional) Set Environment Variables
*(Optional if you want to connect MongoDB Atlas or set custom admin credentials)*:
- `MONGODB_URI`: `mongodb+srv://<user>:<password>@cluster.mongodb.net/jayram_jewellers` *(Optional: If not provided, rates update dynamically in serverless memory)*
- `ADMIN_EMAIL`: Custom admin email *(Default: `bittukumar93418@gmail.com`)*
- `ADMIN_PASSWORD`: Custom admin password *(Default: `93148@aman`)*

### Step 4: Click Deploy!
- Vercel will build and launch your application instantly.
- Live Gold Rates, Calculator, and Admin Portal (`/admin/gold-rates`) will be fully operational on your `.vercel.app` URL.

---

## 🛠️ Features Included
- **Admin Portal**: Access at `/admin/login` or `/admin/gold-rates`.
- **Live Gold Rate Ticker**: Updates customer-facing rates instantly upon saving in Admin.
- **Rate Calculator**: Real-time 18K, 24K, and Silver price calculation for customers.
