# Development Guide for Jayram Jewellers

This guide provides step-by-step instructions to set up the project locally for development.

---

## 1. Prerequisites

Before you begin, ensure you have the following installed:
-   **Node.js** (v18 or higher)
-   **npm** (Node Package Manager)
-   **MongoDB** (Local installation or MongoDB Atlas connection string)

---

## 2. Project Structure

The project is divided into two main folders:
-   **`frontend/`**: Next.js application (React, Tailwind CSS).
-   **`backend/`**: Node.js application (Express, Mongoose).

---

## 3. Backend Setup

1.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    -   Create a `.env` file in the `backend` folder.
    -   Add the following variables:
        ```env
        PORT=5000
        MONGODB_URI=mongodb://localhost:27017/jayram_jewellers
        JWT_SECRET=your_super_secret_key_here
        ```
    -   *Note: Replace `your_super_secret_key_here` with a secure random string.*

4.  **Start the Backend Server**:
    ```bash
    npm run dev
    ```
    -   The server will start at `http://localhost:5000`.
    -   It will connect to your MongoDB database automatically.

---

## 4. Frontend Setup

1.  **Open a new terminal** and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the Frontend Development Server**:
    ```bash
    npm run dev
    ```
    -   The application will start at `http://localhost:3000`.

---

## 5. Verifying the Setup

1.  Open your browser and go to `http://localhost:3000`.
2.  You should see the **Jayram Jewellers** home page.
3.  **Test Backend Connection**:
    -   Go to the **Gold Rate** page (`/gold-rate`).
    -   If the ticker is showing rates, the frontend is successfully running.
    -   *Note: Currently, the ticker uses mock data for demo purposes, but the structure is ready for API integration.*

---

## 6. Common Development Tasks

### Adding a New Page (Frontend)
-   Create a new folder in `frontend/app/` (e.g., `frontend/app/new-page/`).
-   Add a `page.tsx` file inside it.
-   The route will be automatically created at `/new-page`.

### Creating a New API Route (Backend)
-   Create a route file in `backend/routes/` (e.g., `backend/routes/newRoutes.js`).
-   Define your Express router and endpoints.
-   Import and use the route in `backend/index.js`.

### Database Management
-   Models are defined in `backend/models/`.
-   Use these models in your controllers (`backend/controllers/`) to interact with MongoDB.

---

## 7. Troubleshooting

-   **Port Conflicts**: If port 3000 or 5000 is in use, the servers may fail to start. Stop other processes or change the port in `.env` (Backend) or `package.json` (Frontend).
-   **MongoDB Connection Error**: Ensure your local MongoDB service is running or your Atlas URI is correct.
