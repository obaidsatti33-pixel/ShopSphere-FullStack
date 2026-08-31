const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = new Admin({
      username: "admin",
      password: hashedPassword
    });

    await admin.save();

    console.log("Admin created successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.log("Error:", error.message);
  }
};

createAdmin();