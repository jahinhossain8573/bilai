"use server";

import { prisma } from "@/lib/prisma";

type CreateCatInput = {
  name: string;
  breed: string;
  ageMonths: number;
  gender: "MALE" | "FEMALE";
  location: string;
  about: string;
  imageUrl: string;
};

export async function addCatToDB(catInput: CreateCatInput) {
  const cat = await prisma.cat.create({
    data: {
      name: catInput.name,
      breed: catInput.breed,
      ageMonths: catInput.ageMonths,
      gender: catInput.gender,
      location: catInput.location,
      about: catInput.about,
      imageUrl: catInput.imageUrl,
    },
  });
  return cat;
}
