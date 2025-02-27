import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title cannot exceed 100 characters" }),

  description: z.string().optional(),
  due_date: z
    .string()
    .optional()
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      "Due date must be a valid date"
    ),

  status: z
    .enum(["pending", "in_progress", "completed"], {
      message: "Status must be one of: pending, in_progress, or completed",
    })
    .optional(),

  priority: z
    .enum(["low", "medium", "high"], {
      message: "Priority must be low, medium, or high",
    })
    .optional(),

  is_archived: z.boolean().default(false).optional(),

  user_id: z
    .number()
    .int({ message: "User ID must be an integer" })
    .positive({ message: "User ID must be positive" }),

  category_id: z
    .number()
    .int({ message: "Category ID must be an integer" })
    .positive({ message: "Category ID must be positive" })
    .optional(),
});

export function validateTaskUpdate(input) {
  return taskSchema.partial().safeParse(input);
}
