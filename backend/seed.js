require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 50,
    description: "High-quality wireless headphones with clear sound.",
    rating: 4.5,
    stock: 10,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 90,
    description: "Smart watch with fitness tracking and notifications.",
    rating: 4.6,
    stock: 8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 45,
    description: "Portable Bluetooth speaker with powerful sound.",
    rating: 4.4,
    stock: 12,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
  },
  {
    name: "Gaming Mouse",
    category: "Electronics",
    price: 35,
    description: "Responsive gaming mouse with ergonomic design.",
    rating: 4.3,
    stock: 20,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 75,
    description: "Mechanical keyboard designed for gaming and productivity.",
    rating: 4.7,
    stock: 15,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    name: "Leather Jacket",
    category: "Fashion",
    price: 120,
    description: "Premium leather jacket with a stylish modern design.",
    rating: 4.4,
    stock: 5,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
  },
  {
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 25,
    description: "Comfortable cotton t-shirt for everyday wear.",
    rating: 4.2,
    stock: 25,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Denim Jacket",
    category: "Fashion",
    price: 80,
    description: "Classic denim jacket with a comfortable fit.",
    rating: 4.5,
    stock: 9,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
  },
  {
    name: "Classic Hoodie",
    category: "Fashion",
    price: 55,
    description: "Warm and comfortable hoodie for casual outfits.",
    rating: 4.6,
    stock: 18,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  },
  {
    name: "Classic Sunglasses",
    category: "Fashion",
    price: 40,
    description: "Stylish sunglasses with a modern classic frame.",
    rating: 4.3,
    stock: 14,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    name: "Running Shoes",
    category: "Shoes",
    price: 70,
    description: "Comfortable running shoes designed for daily workouts.",
    rating: 4.3,
    stock: 15,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Sports Sneakers",
    category: "Shoes",
    price: 85,
    description: "Lightweight sneakers perfect for sports and outdoor activities.",
    rating: 4.5,
    stock: 12,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2"
  },
  {
    name: "Casual Sneakers",
    category: "Shoes",
    price: 65,
    description: "Trendy casual sneakers for everyday comfort.",
    rating: 4.4,
    stock: 16,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
  },
  {
    name: "Classic Boots",
    category: "Shoes",
    price: 110,
    description: "Durable classic boots with a premium finish.",
    rating: 4.6,
    stock: 7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Modern Chair",
    category: "Furniture",
    price: 150,
    description: "Modern comfortable chair for home and office.",
    rating: 4.5,
    stock: 6,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657"
  },
  {
    name: "Wooden Table",
    category: "Furniture",
    price: 220,
    description: "Elegant wooden table with a minimalist design.",
    rating: 4.7,
    stock: 4,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc"
  },
  {
    name: "Comfort Sofa",
    category: "Furniture",
    price: 450,
    description: "Comfortable modern sofa perfect for living rooms.",
    rating: 4.8,
    stock: 3,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
  },
  {
    name: "Perfume",
    category: "Beauty",
    price: 60,
    description: "Elegant fragrance with a long-lasting fresh scent.",
    rating: 4.5,
    stock: 20,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
  },
  {
    name: "Makeup Kit",
    category: "Beauty",
    price: 75,
    description: "Complete makeup kit for everyday beauty needs.",
    rating: 4.4,
    stock: 10,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
  },
  {
    name: "Skincare Set",
    category: "Beauty",
    price: 85,
    description: "Daily skincare set for a simple beauty routine.",
    rating: 4.6,
    stock: 12,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883"
  },
  {
    name: "Basketball",
    category: "Sports",
    price: 35,
    description: "Durable basketball suitable for indoor and outdoor games.",
    rating: 4.5,
    stock: 12,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc"
  },
  {
    name: "Football",
    category: "Sports",
    price: 40,
    description: "High-quality football designed for training and matches.",
    rating: 4.6,
    stock: 15,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55"
  },
  {
    name: "Badminton Racket",
    category: "Sports",
    price: 55,
    description: "Lightweight badminton racket with a comfortable grip.",
    rating: 4.4,
    stock: 8,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea"
  }
];

async function seedDatabase() {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();

    console.log("Old products deleted");

    await Product.insertMany(products);

    console.log("23 products inserted successfully");

    await mongoose.connection.close();

    console.log("Database connection closed");

  } catch (error) {

    console.error("Seed error:", error);

    process.exit(1);

  }
}

seedDatabase();