import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// User Signup
export const SignupUser = async (req, res) => {
  const { fullname, email, phone, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        fullname,
        email,
        phone,
        password: hashedPassword,
      },
    });

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, fullname: user.fullname, email: user.email, phone: user.phone },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send response with token
    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: { id: user.id, fullname: user.fullname, email: user.email, phone: user.phone },
      token,
    });

  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// Login User
export const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, fullname: user.fullname, email: user.email, phone: user.phone },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send response with token
    res.cookie("PT_access_token", token, { httpOnly: true, secure: true });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: { id: user.id, fullname: user.fullname, email: user.email, phone: user.phone },
      token,
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// Get User
export const GetUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, user });

  } catch (error) {
    console.error("Get User error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// Logout User
export const LogoutUser = (req, res) => {
  res.clearCookie("PT_access_token");
  return res.status(200).json({ success: true, message: "Logged out successfully" });
};

export default router;
