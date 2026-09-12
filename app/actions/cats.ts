"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export type CreateCatInput = {
  name: string;
  breed: string;
  ageMonths: number;
  gender: "MALE" | "FEMALE";
  location: string;
  about?: string | null;
  imageUrl?: string | null;
};

export type CatRecord = CreateCatInput & {
  id: number;
  parentName: string;
  whatsapp: string | null;
  createdAt: Date;
};

export async function addCatToDB(catInput: CreateCatInput) {
  const session = await auth();
  const username = session?.user?.name ?? "Unknown owner";

  const user = session?.user?.email
    ? await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { whatsapp: true },
      })
    : null;

  const cat = await prisma.cat.create({
    data: {
      name: catInput.name,
      breed: catInput.breed,
      ageMonths: catInput.ageMonths,
      gender: catInput.gender,
      location: catInput.location,
      about: catInput.about ?? null,
      imageUrl: catInput.imageUrl ?? null,
      parentName: username,
      whatsapp: user?.whatsapp ?? null,
    },
  });
  return cat;
}
