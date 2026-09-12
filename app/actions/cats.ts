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
  userId: string | null;
};

export async function addCatToDB(catInput: CreateCatInput) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("You must be signed in to create a card.");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { name: true, whatsapp: true },
  });
  if (!user) {
    throw new Error("Your account could not be found.");
  }

  const cat = await prisma.cat.create({
    data: {
      name: catInput.name,
      breed: catInput.breed,
      ageMonths: catInput.ageMonths,
      gender: catInput.gender,
      location: catInput.location,
      about: catInput.about ?? null,
      imageUrl: catInput.imageUrl ?? null,
      parentName: user.name ?? "Unknown owner",
      whatsapp: user?.whatsapp ?? null,
      userId: session.user.id,
    },
  });
  return cat;
}

export async function deleteCatFromDB(catId: number) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("You must be signed in to delete a card.");
  }
  if (!Number.isInteger(catId) || catId < 1) {
    throw new Error("Invalid card.");
  }

  const result = await prisma.cat.deleteMany({
    where: {
      id: catId,
      userId: session.user.id,
    },
  });

  if (result.count === 0) {
    throw new Error("You can only delete cards you created.");
  }
}
