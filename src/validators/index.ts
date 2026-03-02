import z from "zod";

export const emailSchema = z.object({
  email: z
    .email("Please enter a valid email address")
    .min(1, "L'email est requis")
    .toLowerCase()
    .trim()
    .regex(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      "Please enter a valid email address",
    )
    .refine((email) => email.length <= 254, { message: "Email is too long" }),
});
