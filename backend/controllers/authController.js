import User from "../models/UserSchema.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { hashPassword } from "../helpers/helpAuth.js";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

export const register = async (req, res) => {
  const { name, email, password, photo } = req.body;
  try {
    // check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //check if password is good
    if (!password) {
      return res.json({
        error: "password is required",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }
    //hashed password
    const hashedPassword = await hashPassword(password);

    //create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      photo,
    });

    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User Successfully created" });

    return res.json(user);
  } catch (error) {
    res.status(500).json({ success: false, message: `error ${error}` });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: "No user found",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "invalid credentials" });
    }
    //get token
    const token = generateToken(user);

    res.status(200).json({
      status: true,
      message: "Successfully Login",
      token,
      data: { email, password },
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: `failed to login ${error}` });
  }
};
