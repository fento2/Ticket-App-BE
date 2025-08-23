import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const signUpSchema = z.object({
  username: z
    .string()
    .min(1, "username required")
    .refine((val) => val === val.toLowerCase(), {
      message: "username must be lowercase",
    }),
  email: z.string().email("email required"),
  name: z.string().min(1, "name required"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters")
    .refine(
      (val) =>
        /[A-Z]/.test(val) &&
        /[a-z]/.test(val) &&
        /\d/.test(val) &&
        /[!@#$%^&*]/.test(val),
      { message: "password not strong" }
    ),
});

export const authValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    signUpSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
