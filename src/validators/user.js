import { z } from "zod";

const userSchema = z.object({
  name: z
    .string({
      invalid_type_error: "User name must be a string",
      required_error: "User name is required.",
    })
    .min(1, { message: "The name is required." }),
  last_name: z
    .string({
      invalid_type_error: "User last name must be a string",
      required_error: "User last name is required.",
    })
    .min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "It must be a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." }),
  profile_picture: z.string().url({
    message: "Profile picture must be a valid URL",
  }),
  role: z.enum(["admin", "user"], {
    message: "Role must be either admin or user",
  }),
  is_active: z.boolean(),
});

export function validateUser(input) {
  return userSchema.safeParse(input);
}

export function validateUserUpdate(input) {
  return userSchema.partial().safeParse(input);
}
