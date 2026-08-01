# 🍔 Yumzy - Premium Food Delivery Platform

Yumzy is a state-of-the-art, full-stack food delivery web application built with the MERN stack (MongoDB, Express, React, Node.js). Designed with a premium, dynamic, and fully responsive user interface, Yumzy brings the luxury restaurant experience straight to your screen.

![Yumzy UI Preview](frontend/src/assets/frontend_assets/header_img.png) <!-- Update this path if you want a different preview image -->

## ✨ Key Features

- **Dynamic Premium UI/UX:** Built with Tailwind CSS, featuring glassmorphism, micro-animations, and large, stunning Unsplash food photography.
- **Full E-Commerce Flow:** Seamlessly add items to cart, adjust quantities, and checkout.
- **Secure Payments:** Integrated with Stripe for safe and fast checkout processing.
- **Smart Filtering:** Browse a massive variety of authentic Indian cuisines categorized precisely (Biryani, Street Food, Desserts, Chinese, etc.).
- **User Authentication:** Secure login and registration.
- **Order Tracking:** Users can view their order history and status directly from their profile.
- **Admin Dashboard:** A separate admin panel to upload new food items, manage orders, and update delivery statuses in real-time.

## 🛠️ Technology Stack

- **Frontend:** React.js, Tailwind CSS, Context API for state management, React Router Dom.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB Atlas (Mongoose ORM).
- **Payment Gateway:** Stripe API.
- **Authentication:** JSON Web Tokens (JWT).
- **Image Handling:** Multer (Local storage for 100% reliable image serving).

## 🚀 Installation & Setup

To run Yumzy locally, you need Node.js and MongoDB installed/configured.

### 1. Clone the repository
```bash
git clone https://github.com/aassiiss/Yumzy.git
cd Yumzy
```

### 2. Setup the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
Database_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```
Run the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
```
Run the frontend server:
```bash
npm run dev
```
The app will be running at `http://localhost:5173`.

### 4. Setup the Admin Panel
```bash
cd ../admin
npm install
npm run dev
```
The admin panel will be running at `http://localhost:5174`.

## 📦 Database Seeding
To quickly populate your local database with high-quality, pre-configured dishes and images, run:
```bash
cd backend
node seed_local_existing.js
```
This will insert over 20+ perfectly formatted dishes into your MongoDB database using verified local images!

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 License
This project is licensed under the MIT License.
