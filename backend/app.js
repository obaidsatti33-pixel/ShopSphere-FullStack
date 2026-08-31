require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
connectDB();

// Product Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Order Routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

// Order API Test
app.get("/api/orders-test", (req, res) => {
  res.json({
    message: "Orders API is working!"
  });
});

// Home Route
app.get("/", (req, res) => {
  res.send("ShopSphere Backend is Running!");
});

// Start Server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
