const Order = require("../models/Order");

// Create Order
const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      products,
      totalAmount
    } = req.body;

    const order = new Order({
      customerName,
      customerEmail,
      products,
      totalAmount
    });

    const savedOrder = await order.save();

    res.status(201).json({
      message: "Order created successfully",
      order: savedOrder
    });

  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({
      message: "Failed to create order",
      error: error.message
    });
  }
};


// Get All Orders
const getOrders = async (req, res) => {
  try {

    const orders = await Order
      .find()
      .sort({ createdAt: -1 });

    res.status(200).json(orders);

  } catch (error) {

    console.error("Get Orders Error:", error);

    res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message
    });

  }
};


      // Get Customer Orders
const getCustomerOrders = async (req, res) => {
  try {

    const { email } = req.params;

    const orders = await Order
      .find({
        customerEmail: email
      })
      .sort({ createdAt: -1 });

    res.status(200).json(orders);

  } catch (error) {

    console.error(
      "Get Customer Orders Error:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch customer orders",
      error: error.message
    });

  }
};


// Update Order Status
const updateOrderStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const updatedOrder =
      await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.status(200).json({
      message: "Order status updated successfully",
      order: updatedOrder
    });

  } catch (error) {

    console.error(
      "Update Order Status Error:",
      error
    );

    res.status(500).json({
      message: "Failed to update order",
      error: error.message
    });

  }
};


module.exports = {
  createOrder,
  getOrders,
  getCustomerOrders,
  updateOrderStatus
};