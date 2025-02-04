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

    if (!email || !password) return res.status(400).json({ error: "Required fields" });

    if (!result.success) {
      return await res
        .status(422)
        .json({ error: JSON.parse(result.error.message) });
    }

    const newUser = await userService.createUser({ input: result.data });

    res.status(201).json({ message: "Successfully registered user", userId });
  } catch (error) {
    res.status(500).json({ error: "Registration error" });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findByEmail(email);
    if (!user) return res.status(400).json({ error: "User not found" });

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) return res.status(400).json({ error: "Incorrect password" });

    const token = jwt.sign({ userId: user.id }, process.env.AUTH_SECRET, { expiresIn: "1h" });
    res.json({ message: "Successful login!", token });
  } catch (error) {
    res.status(500).json({ error: "Login error" });
  }
}
