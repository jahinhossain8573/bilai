// app/actions/auth.ts
"use server";

import { prisma } from "@/lib/prisma"; // adjust path if needed
import bcrypt from "bcryptjs";
import { z } from "zod";
import { signIn } from "@/auth"; // your auth.ts8

const signUpSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  whatsapp: z
    .string()
    .trim()
    .regex(/^01\d{9}$/, "Enter an 11-digit number starting with 01"),
});

export async function signUp(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    whatsapp: formData.get("whatsapp"),
  };

  const parsed = signUpSchema.safeParse(raw);

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { name, email, password, whatsapp } = parsed.data;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "Email is already registered" };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      whatsapp,
    },
  });

  // Automatically sign the user in after registration
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/", // change to your desired page
  });
}
