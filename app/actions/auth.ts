// app/actions/auth.ts
"use server";

import { prisma } from "@/lib/prisma"; // adjust path if needed
import bcrypt from "bcryptjs";
import { z } from "zod";
import { redirect } from "next/navigation";
import { signIn } from "@/auth"; // your auth.ts

const signUpSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function signUp(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = signUpSchema.safeParse(raw);

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message };
  }

  const { email, password } = parsed.data;

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
      email,
      password: hashedPassword,
    },
  });

  // Automatically sign the user in after registration
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/", // change to your desired page
  });
}
