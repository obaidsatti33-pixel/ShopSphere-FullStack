const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
  getCustomerOrders,
  updateOrderStatus
} = require("../controllers/orderController");

// Create Order
router.post("/", createOrder);

// Get All Orders
router.get("/", getOrders);

// Get Customer Orders
router.get("/customer/:email", getCustomerOrders);

// Update Order Status
router.put("/:id", updateOrderStatus);

module.exports = router;