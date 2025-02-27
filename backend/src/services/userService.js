import * as userRepository from "../repositories/userRepository.js";

export const fetchUserById = async (id) => {
  const user = await userRepository.fetchUserById(id);

  return user[0];
};

export const getAllUsers = async () => {
  const users = await userRepository.getAll();

  if (users.length === 0) return [];

  return users;
};

export const createUser = async ({ input }) => {
  const { email } = input;
  const existingUser = await userRepository.findByEmail(email);

  if (existingUser.length > 0)
    return res.status(400).json({ error: "The user already exists" });

  const newUser = await userRepository.createUser({ input });

  if (newUser.length === 0) {
    throw new Error("Error al crear el usuario");
  }

  return newUser;
};

export const updateUser = async ({ id, result }) => {
  const user = await userRepository.fetchUserById(id);

  if (!user.length) {
    throw new Error("Usuario no encontrado");
  }

  const updatedUser = await userRepository.updateUser({ id, result });
  return updatedUser[0];
};

export const deleteUser = async (id) => {
  const deleteResult = await userRepository.deleteUser(id);

  return deleteResult;
};
