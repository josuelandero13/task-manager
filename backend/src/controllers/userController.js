import { validateUserUpdate } from "../schemas/userSchema.js";
import * as userService from "../services/userService.js";

export const getAll = async (_, res) => {
  const users = await userService.getAllUsers();

  res.json(users);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.fetchUserById(id);

  if (user) return res.json(user);

  res.status(404).json({ message: "User not found" });
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const input = req.body;
    const result = validateUserUpdate(input);

    const updatedUser = await userService.updateUser({ id, result });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await userService.deleteUser(id);

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
};
