"use client";

import Image from "next/image";
import { CreateCatInput } from "@/app/actions/cats";

import catPhoto from "../resources/sample_cat_photo.jpeg";
export default function Card({ catInput }: { catInput: CreateCatInput }) {
  function textOnWhatsApp() {
    const url = `https://wa.me/${8801732290601}?text=${encodeURIComponent("Hello!")}`;

    window.open(url, "_blank");
  }
  return (
    <div className="w-fit rounded-2xl bg-[#f0eec9] shadow-md">
      <Image
        src={catInput.imageUrl}
        width={300}
        height={200}
        alt=""
        className="rounded-t-2xl object-cover w-70 p-2 aspect-video"
      />
      {/* Cat Image */}

      <div className="px-2">
        {/* Text inside the card */}
        <h2 className=" text-lg font-bold text-[#212922]">{catInput.name}</h2>
        {/* Line 1 — Cat Name */}
        <ul className="flex gap-1.5 ">
          {" "}
          {/* Line 2 — Breed, Age, Gender */}
          <li>
            <span className="bg-[#a1cf6b] rounded-xl px-2 py-0.5">
              {catInput.breed}
            </span>
          </li>
          <li>
            <span>•</span>
            <span> {catInput.ageMonths} months</span>
          </li>
          <li>
            <span>•</span>
            <span> {catInput.gender}</span>
          </li>
        </ul>
        <div>
          {" "}
          {/* Line 3 — Location + WhatsApp */}
          <div className="flex justify-between py-1 items-center">
            <span>📍 {catInput.location}</span>
            <button
              onClick={textOnWhatsApp}
              className="bg-[#FA7D1F] rounded-xl px-1 py-1 text-[#f0eec9] font-poppins font-bold hover:bg-[#FA7D1F]/80"
            >
              Text on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
