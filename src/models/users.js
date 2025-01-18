import connection from "../config/db.js";

export class UserModel {
  static fetchUserById = async (id) => {
    const [user] = await connection.query(
      `SELECT id, name, last_name, email, profile_picture, role, is_active, created_at, updated_at
        FROM users WHERE id = ?;`,
      [id]
    );

    return user;
  };

  static async getAll() {
    const [users] = await connection.query("SELECT * FROM users");

    if (users.length === 0) return [];

    return users;
  }

  static async createUser({ input }) {
    const {
      name,
      last_name,
      password,
      email,
      profile_picture,
      role,
      is_active,
    } = input;

    try {
      const [insertResult] = await connection.query(
        `INSERT INTO users (name, last_name, password, email, profile_picture, role, is_active)
          VALUES (?, ?, ?, ?, ?, ?, ?);`,
        [name, last_name, password, email, profile_picture, role, is_active]
      );

      const userId = insertResult.insertId;

      const [users] = await this.fetchUserById(userId);

      return users;
    } catch (e) {
      console.error("Error al crear el usuario:", e);
      throw new Error("Error creating user");
    }
  }

  static async updateUser({ id, input }) {
    const { name, last_name, profile_picture, role, is_active } = input;

    try {
      const [updateResult] = await connection.query(
        `UPDATE users
          SET name = ?, last_name = ?, profile_picture = ?, role = ?, is_active = ?
          WHERE id = ?;`,
        [name, last_name, profile_picture, role, is_active, id]
      );
      console.log(updateResult.affectedRows === 0);

      if (updateResult.affectedRows === 0) {
        throw new Error("No se pudo actualizar el usuario");
      }

      const [user] = await this.fetchUserById(id);

      return user;
    } catch (e) {
      console.error("Error al actualizar el usuario:", e);
      throw new Error("Error updating user");
    }
  }
}
