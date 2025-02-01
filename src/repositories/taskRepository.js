import { connection } from "../config/db.js";

export const fetchAllTasks = async () => {
  const [tasks] = await connection.query("SELECT * FROM tasks");
  return tasks;
};

export const fetchTaskById = async (id) => {
  const [task] = await connection.query(`SELECT * FROM tasks WHERE id = ?;`, [
    id,
  ]);
  return task;
};

export const createTask = async ({
  title,
  description,
  due_date,
  status,
  priority,
  user_id,
  category_id,
}) => {
  try {
    const [insertResult] = await connection.query(
      `INSERT INTO tasks (title, description, due_date, status, priority, user_id, category_id)
       VALUES (?, ?, ?, ?, ?, ?, ?);`,
      [title, description, due_date, status, priority, user_id, category_id]
    );
    const taskId = insertResult.insertId;
    const [task] = await fetchTaskById(taskId);
    return task;
  } catch (e) {
    console.error("Error creating task:", e);
    throw new Error("Error creating task");
  }
};

export const updateTask = async (
  id,
  { title, description, due_date, status, priority, is_archived }
) => {
  try {
    const [updateResult] = await connection.query(
      `UPDATE tasks
       SET title = ?, description = ?, due_date = ?, status = ?, priority = ?, is_archived = ?
       WHERE id = ?;`,
      [title, description, due_date, status, priority, is_archived, id]
    );
    if (updateResult.affectedRows === 0) {
      throw new Error("Task not found or could not be updated");
    }
    return fetchTaskById(id);
  } catch (e) {
    console.error("Error updating task:", e);
    throw new Error("Error updating task");
  }
};

export const deleteTask = async (id) => {
  const [deleteResult] = await connection.query(
    `DELETE FROM tasks WHERE id = ?;`,
    [id]
  );
  if (deleteResult.affectedRows === 0) {
    throw new Error("Task not found or could not be deleted");
  }
  return deleteResult;
};
