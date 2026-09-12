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
  const ageYears = Number(year) || 0;
  const ageMonths = clamp(Number(month) || 0, 0, 11);

  // State for gender
  const [gender, changeGender] = useState<"MALE" | "FEMALE">("MALE");

  // States for photo
  const [image, changeImage] = useState<File | null>(null);
  const [imagePreview, changeImagePreview] = useState<string | null>(null);

  async function saveProfile() {
    const selectedGender = gender ?? "MALE";

    await addCatToDB({
      name,
      breed,
      ageMonths: year * 12 + month,
      gender: selectedGender,
      location,
      about: aboutCat,
      imageUrl: image
        ? await fileToCompressedBase64(image, 400)
        : placeholderCatPhoto.src,
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
    <div className="min-h-screen w-full bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat">
      <header className="p-5 flex justify-between gap-x-48 items-center">
        {/* Navbar */}
        <div className="md:flex md:grid-cols-1 md:items-center">
          <Image src="/Bilai.png" width={48} height={48} alt="" />
        
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1 className="text-2xl font-matcha-mint text-[#212922] mx-0.5">bilai.</h1>
        </div>
        <Link href="/" className=" text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5 mx-4">BACK</Link>
      </header>
        <div className="flex justify-center  w-[80%] mx-auto p-8 md:p-12 shadow-lg bg-gradient-to-b from-[#ffffff] to-[#fdd299] rounded-4xl my-20">
        <div className="">
         <div className=" text-center">
          <h2 className="text-xl xl:text-5xl font-poppins font-bold my-0.5">Cat for Adoption</h2>
          <span className="my-4">Help adopters know about your cat</span>
        </div>
          {/* Container for the stuff on the left */}
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Name</span>
            <input
              type="text"
              className="bg-[#fffeee] border border-black w-full rounded-md h-8 "
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
              className="bg-[#fffeee] border border-black w-full h-8 rounded-md"
              onChange={(e) => {
                changeBreed(e.target.value);
                // console.log(breed);
              }}
            />
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Age</span>
            <div className="flex justify-between items-start">
              <p className="font-poppins font-bold my-1">Year :
              <input
                onChange={(e) => {
                  changeYear(Number(e.target.value));
                  // console.log(aboutCat);
                }}
                type="number"
                value={year}
                placeholder="YY"
                className="bg-[#fffeee] border border-black w-12 rounded-md h-8 mx-1"
              />
              </p>
              <p className="font-poppins font-bold my-1">Month :
              <input
                onChange={(e) => {
                  changeMonth(clamp(Number(e.target.value), 0, 11));
                  // console.log(aboutCat);
                }}
                value={month}
                type="number"
                placeholder="MM"
                className="bg-[#fffeee] border border-black w-12 rounded-md h-8 mx-2"
              />
              </p>
            </div>
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Location</span>
            <input
              type="text"
              className="bg-[#fffeee] border border-black w-full rounded-md h-8"
              onChange={(e) => {
                changeLocation(e.target.value);
                // console.log(location);
              }}
            />
          {/* Container for the stuff on the right */}
          <div>
            <span className={spanStyling}>Gender</span>
            <div>
              <input
                name="gender"
                type="radio"
                onChange={() => {
                  changeGender("MALE");
                  // console.log(gender);
                }}
              />
              <span>Male</span>
              <input
                name="gender"
                type="radio"
                onChange={() => {
                  changeGender("FEMALE");
                  // console.log(gender);
                }}
              />
              <span>Female</span>
            </div>
          </div>
          <div className="flex flex-col border rounded-2xl p-3 bg-[#fffeee] my-2 h-30">
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
        </div>
        <div className=" text-flex flex-col items-center gap-2">
          <button
            onClick={saveProfile}
            className="w-full bg-[#0ce743] hover:bg-[#7cae4c] transition-colors text-[#060706] font-extrabold py-3 rounded-2xl text-center my-2" >
            Save Cat Profile
          </button>
          <span className="text-zinc-700 font-poppins font-normal text-xs flex justify-center items-center w-full">
            You can edit these details later
          </span>
        </div>
        </div>
      </div>
    </div>
  );
}
