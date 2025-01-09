import db from "../../db.js";

export class UserModel {
  static async getAll() {
    const [users] = await db.query("SELECT * FROM users");

    if (users.length === 0) return [];

    return users;
  }
}
