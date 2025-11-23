# Deployment Guide for Jayram Jewellers

This guide outlines the steps to deploy the **Next.js Frontend** to Vercel and the **Node.js Backend** to Render.

---

## 1. Prerequisites

- A **GitHub** account.
- The project code pushed to a GitHub repository (can be a monorepo with `frontend` and `backend` folders).
- Accounts on [Vercel](https://vercel.com) and [Render](https://render.com).

---

## 2. Deploying Backend (Node.js/Express) to Render

We recommend **Render** for the backend because it supports persistent Node.js servers (unlike Vercel which is serverless-first).

1.  **Log in to Render** and click **"New + "** -> **"Web Service"**.
2.  **Connect your GitHub repository**.
3.  **Configure the Service**:
    -   **Name**: `jayram-jewellers-backend` (or similar)
    -   **Root Directory**: `backend` (Important! Since your backend is in a subfolder)
    -   **Environment**: `Node`
    -   **Build Command**: `npm install`
    -   **Start Command**: `npm start`
4.  **Environment Variables**:
    -   Scroll down to "Environment Variables" and add:
        -   `MONGODB_URI`: Your MongoDB connection string (e.g., from MongoDB Atlas).
        -   `JWT_SECRET`: A strong secret key for authentication.
        -   `PORT`: `10000` (Render usually sets this, but good to be safe).
5.  **Deploy**: Click "Create Web Service".
6.  **Copy URL**: Once deployed, copy the backend URL (e.g., `https://jayram-backend.onrender.com`). You will need this for the frontend.

---

## 3. Deploying Frontend (Next.js) to Vercel

1.  **Log in to Vercel** and click **"Add New..."** -> **"Project"**.
2.  **Import your GitHub repository**.
3.  **Configure the Project**:
    -   **Framework Preset**: Next.js (should be auto-detected).
    -   **Root Directory**: Click "Edit" and select the `frontend` folder.
4.  **Environment Variables**:
    -   Expand "Environment Variables" and add:
        -   `NEXT_PUBLIC_API_URL`: The URL of your deployed backend (e.g., `https://jayram-backend.onrender.com`).
        -   **Note**: Ensure you do NOT have a trailing slash `/` at the end of the URL if your code appends it automatically.
5.  **Deploy**: Click "Deploy".
6.  **Verify**: Vercel will build and deploy your site. Once done, you will get a live URL (e.g., `https://jayram-jewellers.vercel.app`).

---

## 4. Final Configuration

1.  **Update Backend CORS**:
    -   Go back to your **Backend** code (`backend/index.js` or `backend/server.js`).
    -   Update the CORS configuration to allow requests from your new **Frontend URL** (e.g., `https://jayram-jewellers.vercel.app`).
    -   Push the changes to GitHub. Render will auto-deploy the update.

2.  **Test the Application**:
    -   Open your Vercel URL.
    -   Test the "Gold Rate" ticker (should fetch from backend).
    -   Test "Admin Login" (should connect to backend auth).
    -   Test "Contact Form" (if connected to backend).

---

## Troubleshooting

-   **Backend Connection Failed**: Check the `NEXT_PUBLIC_API_URL` in Vercel. Inspect the browser console (Network tab) to see if requests are going to the correct URL.
-   **CORS Errors**: Ensure the Backend allows the Frontend domain in its CORS settings.
-   **Database Errors**: Verify the `MONGODB_URI` in Render is correct and allows connections from anywhere (0.0.0.0/0) in MongoDB Atlas Network Access.
