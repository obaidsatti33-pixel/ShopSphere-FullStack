const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const protect = require("../middlewares/authMiddleware");

// Public route — customers products dekh sakte hain
router.get("/", getProducts);

// Protected routes — sirf authenticated admin
router.post("/", protect, createProduct);

router.put("/:id", protect, updateProduct);

router.delete("/:id", protect, deleteProduct);

module.exports = router;