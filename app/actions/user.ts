"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

type UpdateProfileInput = {
  whatsapp: string;
  pastCats: number;
  currentCats: number;
};

export async function getCurrentUser() {
  const session = await auth();
  if (!session?.user?.email) return null;

  return prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      cats: {
        orderBy: { createdAt: "desc" },
      },
    },
  });
}

export async function updateProfile(input: UpdateProfileInput) {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("You must be logged in to update your profile.");
  }

  await prisma.user.update({
    where: { email: session.user.email },
    data: {
      whatsapp: input.whatsapp,
      catsOwnedInPast: input.pastCats,
      catsAtHome: input.currentCats,
    },
  });
}
