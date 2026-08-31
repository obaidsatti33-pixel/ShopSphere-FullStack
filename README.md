# 🛍️ ShopSphere — Full Stack E-Commerce Platform

ShopSphere is a modern full-stack e-commerce web application built with **React, Node.js, Express, and MongoDB**.

It includes a customer-facing shopping experience as well as a secure admin panel for managing products.

---

## ✨ Features

### 🛒 Customer Features

* Browse products
* Search products
* Filter products by category
* Product details page
* Add products to cart
* Increase/decrease product quantity
* Remove products from cart
* Clear cart
* Wishlist functionality
* Checkout system
* Order placement
* Order success page
* Customer login/signup
* Responsive design
* Local storage support

### 🔐 Admin Features

* Secure admin login
* JWT-based authentication
* Password hashing with bcrypt
* Protected product management routes
* Add products
* Update products
* Delete products
* View product statistics
* Total products count
* Total product inventory value
* Average product rating
* Low-stock product count
* Admin logout

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* JavaScript
* HTML5
* CSS3
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* CORS
* dotenv

---

## 📂 Project Structure

```text
ShopSphere-FullStack/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── productController.js
│   │   └── ...
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Admin.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   │
│   ├── app.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🔐 Admin Authentication

ShopSphere uses **JWT authentication** to protect admin-only operations.

### Authentication Flow

```text
Admin Login
     ↓
Backend verifies credentials
     ↓
Password checked with bcrypt
     ↓
JWT token generated
     ↓
Token stored on frontend
     ↓
Protected API requests
     ↓
JWT middleware verifies token
     ↓
Admin operation allowed
```

### Protected Operations

The following product operations require a valid JWT:

```text
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

Product viewing remains public:

```text
GET /api/products
```

---

## ⚙️ Backend API

### Authentication

```text
POST /api/auth/login
```

### Products

```text
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Orders

```text
POST /api/orders
GET  /api/orders
PUT  /api/orders/:id
```

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd ShopSphere-FullStack
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the `backend` folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3001
```

Do not upload your `.env` file to GitHub.

### 6. Start the backend

```bash
cd backend
node app.js
```

Backend runs on:

```text
http://localhost:3001
```

### 7. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Vite will provide the frontend URL in the terminal.

---

## 🌐 Live Demo

### Frontend

https://shopsphere-by-obaid.netlify.app

### Backend

https://shop-sphere-backend-sooty.vercel.app

---

## 📸 Screenshots

Screenshots of the ShopSphere application can be added here.

Recommended screenshots:

* Home page
* Products page
* Product details
* Cart
* Wishlist
* Checkout
* Admin login
* Admin dashboard

---

## 🔒 Security

ShopSphere includes:

* JWT-based authentication
* bcrypt password hashing
* Protected admin routes
* Environment variables for sensitive configuration
* CORS configuration
* Unauthorized requests blocked by authentication middleware

---

## 📱 Responsive Design

ShopSphere is designed to work across:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

The customer-facing interface has been tested in responsive/mobile layouts.

---

## 🎯 Project Goals

This project was built to practice and demonstrate full-stack web development concepts including:

* React frontend development
* REST API development
* MongoDB database integration
* Authentication and authorization
* CRUD operations
* API integration
* State management
* Responsive UI development
* Full-stack deployment

---

## 👨‍💻 Author

**Obaid**

Built as a full-stack e-commerce project using the MERN stack.

---

## ⭐ Future Improvements

Possible future improvements include:

* Payment gateway integration
* Advanced admin dashboard
* Order management interface
* User profile system
* Product reviews
* Pagination
* Advanced product filtering
* Image upload system
* Role-based authentication
