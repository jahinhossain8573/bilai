"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import placeholderCatPhoto from "../resources/sample_cat_photo.jpeg";
import { addCatToDB } from "@/app/actions/cats";
import { clamp } from "lodash";
import { useState } from "react";

const spanStyling: string = "font-bold "; // Controls styling for the input titles
const inputGroupStyling: string = "flex flex-col w-3/4"; // Controls styling for the stuff on the left

export default function Page() {
  const router = useRouter();
  // States for all of the fields
  //States for text-based fiels
  const [name, changeName] = useState("");
  const [breed, changeBreed] = useState("");
  const [location, changeLocation] = useState("");
  const [aboutCat, changeAboutCat] = useState("");

  // States for age
  const [month, changeMonth] = useState<number>(0);
  const [year, changeYear] = useState<number>(0);

  // State for gender
  const [gender, changeGender] = useState<"male" | "female" | null>("male");

  // States for photo
  const [image, changeImage] = useState<File | null>(null);
  const [imagePreview, changeImagePreview] = useState<string | null>(null);

  async function saveProfile() {
    await addCatToDB({
      name,
      breed,
      ageMonths: year * 12 + month,
      gender: gender.toUpperCase() as "MALE" | "FEMALE",
      location,
      about: aboutCat,
      imageUrl: image
        ? await fileToCompressedBase64(image, 400)
        : placeholderCatPhoto,
    });

    router.push("/");
  }

  function fileToCompressedBase64(file: File, maxWidth = 800): Promise<string> {
    return new Promise((resolve) => {
      const img = document.createElement("img");
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas
          .getContext("2d")!
          .drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.7)); // 0.7 = quality
      };
      img.src = URL.createObjectURL(file);
    });
  }

  return (
    <div>
      <header className="p-5 flex justify-center gap-x-48 items-center">
        {/* Navbar */}
        <div>
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1>BILAI</h1>
        </div>
        <div className=" text-center">
          <h2 className="text-2xl font-bold">Cat for Adoption</h2>
          <span>Help adopters find the cat</span>
        </div>
        <Link href="/">BACK</Link>
      </header>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2">
          {/* Container for the stuff on the left */}
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Name</span>
            <input
              type="text"
              className="border rounded-2xl"
              onChange={(e) => {
                changeName(e.target.value);
                // console.log(name);
              }}
            />
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Breed</span>
            <input
              type="text"
              className="border rounded-2xl"
              onChange={(e) => {
                changeBreed(e.target.value);
                // console.log(breed);
              }}
            />
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Age</span>
            <div className="flex">
              <input
                onChange={(e) => {
                  changeYear(Number(e.target.value));
                  // console.log(aboutCat);
                }}
                type="number"
                value={year}
                placeholder="YY"
                className="border rounded-2xl w-10"
              />
              <input
                onChange={(e) => {
                  changeMonth(clamp(Number(e.target.value), 0, 11));
                  // console.log(aboutCat);
                }}
                value={month}
                type="number"
                placeholder="MM"
                className="border rounded-2xl w-10"
              />
            </div>
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Location</span>
            <input
              type="text"
              className="border rounded-2xl"
              onChange={(e) => {
                changeLocation(e.target.value);
                // console.log(location);
              }}
            />
          </div>
          <button
            onClick={saveProfile}
            className="bg-green-400 p-2 rounded-2xl hover:cursor-pointer hover:bg-green-500"
          >
            Save Cat Profile
          </button>
          <span className="text-zinc-500">
            You can edit these details later
          </span>
        </div>
        <div>
          {/* Container for the stuff on the right */}
          <div>
            <span className={spanStyling}>Gender</span>
            <div>
              <input
                name="gender"
                type="radio"
                onChange={() => {
                  changeGender("male");
                  // console.log(gender);
                }}
              />
              <span>Male</span>
              <input
                name="gender"
                type="radio"
                onChange={() => {
                  changeGender("female");
                  // console.log(gender);
                }}
              />
              <span>Female</span>
            </div>
          </div>
          <div className="flex flex-col border rounded-2xl p-3">
            <span className={spanStyling}>Photo</span>
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) {
                  return;
                }
                changeImage(file);
                changeImagePreview(URL.createObjectURL(file));
              }}
              className=""
            />
            {imagePreview && (
              <Image
                src={String(imagePreview)}
                alt=""
                width={500}
                height={500}
              ></Image>
            )}
          </div>
          <div className="flex flex-col">
            <span className={spanStyling}>About your cat</span>
            <textarea
              onChange={(e) => {
                changeAboutCat(e.target.value);
                // console.log(aboutCat);
              }}
              value={aboutCat}
              className="border rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
