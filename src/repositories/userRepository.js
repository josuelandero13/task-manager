import { connection } from "../config/db.js";

export const fetchUserById = async (id) => {
  const [user] = await connection.query(
    `SELECT id, name, last_name, email, profile_picture, role, is_active, created_at, updated_at
     FROM users WHERE id = ?;`,
    [id]
  );

  return user;
};

export const getAll = async () => {
  const [users] = await connection.query("SELECT * FROM users");

  if (users.length === 0) return [];

  return users;
};

export const createUser = async ({ input }) => {
  const { name, last_name, password, email, profile_picture, role, is_active } =
    input;

  try {
    const [insertResult] = await connection.query(
      `INSERT INTO users (name, last_name, password, email, profile_picture, role, is_active)
        VALUES (?, ?, ?, ?, ?, ?, ?);`,
      [name, last_name, password, email, profile_picture, role, is_active]
    );

    const userId = insertResult.insertId;

    const [user] = await fetchUserById(userId);

    return user;
  } catch (e) {
    console.error("Error al crear el usuario:", e);
    throw new Error("Error creating user");
  }
};

export const updateUser = async ({ id, result }) => {
  const { name, last_name, profile_picture, role, is_active } = result.data;

  if (!result.success) {
    throw new Error(result.error.message);
  }

  const [updateResult] = await connection.query(
    `UPDATE users
     SET name = ?, last_name = ?, profile_picture = ?, role = ?, is_active = ?
     WHERE id = ?;`,
    [name, last_name, profile_picture, role, is_active, id]
  );

  if (updateResult.affectedRows === 0) {
    throw new Error("No se pudo actualizar el usuario");
  }

  return fetchUserById(id);
};

export const deleteUser = async (id) => {
  const [deleteResult] = await connection.query(
    `DELETE FROM users WHERE id = ?;`,
    [id]
  );

  if (deleteResult.affectedRows === 0) {
    const error = new Error(`No user deleted; the ID ${id} may not exist`);
    error.statusCode = 404;
    throw error;
  }

  return deleteResult;
};
