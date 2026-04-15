import z from "zod";
import { VALIDATION_ERRORS } from "../../../shared/lib/zod/validation-messages";

export const loginSchema = z.object({
  email: z
    .email({message: VALIDATION_ERRORS.invalidEmail})
    .trim()
    .min(1, VALIDATION_ERRORS.required),
  password: z
    .string()
    .trim()
    .min(3, VALIDATION_ERRORS.minLength(3))
});

export type LoginDTO = z.infer<typeof loginSchema>;