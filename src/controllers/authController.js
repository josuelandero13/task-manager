import * as userService from "../services/userService.js";
import { validateUser } from "../schemas/userSchema.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { findByEmail } from "../repositories/userRepository.js";

process.loadEnvFile();

export const register = async (req, res) => {
  try {
    const result = validateUser(req.body);
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Required fields" });

    if (!result.success) {
      return await res
        .status(422)
        .json({ error: JSON.parse(result.error.message) });
    }

    const newUser = await userService.createUser({ input: result.data });

    res.status(201).json({ message: "Successfully registered user" });
  } catch (error) {
    res.status(500).json({ error: "Registration error" });
  }
};

export const login = async (req, res) => {
  try {
    const DATA = 0;
    const { email, password } = req.body;
    const user = await findByEmail(email);
    const dataUserPassword = user[DATA]?.password;
    const dataUserId = user[DATA]?.id;

    if (user.length === 0)
      return res.status(400).json({ error: "User not found" });

    const isPasswordValid = await argon2.verify(dataUserPassword, password);
    if (!isPasswordValid)
      return res.status(400).json({ error: "Incorrect password" });

    const token = jwt.sign(
      { userId: dataUserId, email: email },
      process.env.AUTH_SECRET,
      { expiresIn: "1h" }
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        samesite: "none",
        maxAge: 1000 * 60 * 60,
      })
      .send({ message: "Logged in successfully"});
  } catch (error) {
    res.status(500).json({ error: "Login error",error: error });
  }
};

export const authCheck = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res
        .status(401)
        .json({ unauthorized_user: "Unauthenticated user" });

    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    const user = await findByEmail(decoded.email);

    res.json({
      id: user._id,
      email: user.email,
      username: user.username,
    });
  } catch (error) {
    res.status(401).json({ error: "Sesión inválida" });
  }
};
