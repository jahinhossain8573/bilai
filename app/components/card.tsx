import Image from "next/image";

import catPhoto from "../resources/sample_cat_photo.jpeg";
export default function Card() {
  return (
    <div className="w-fit rounded-2xl bg-[#f0eec9] shadow-md">
      <Image
        src={catPhoto}
        width={300}
        height={200}
        alt=""
        className="rounded-t-2xl object-cover w-full p-2 aspect-video"
      />
      {/* Cat Image */}

      <div className="px-2">
        {/* Text inside the card */}
        <h2 className=" text-lg font-bold text-[#212922]">Milo</h2>{" "}
        {/* Line 1 — Cat Name */}
        <ul className="flex gap-1.5 ">
          {" "}
          {/* Line 2 — Breed, Age, Gender */}
          <li>
            <span></span>
            <span className="bg-[#a1cf6b] rounded-xl px-2 py-0.5">Deshi</span>
          </li>
          <li>
            <span>•</span>
            <span> 6 months</span>
          </li>
          <li>
            <span>•</span>
            <span> Female</span>
          </li>
        </ul>
        <div>
          {" "}
          {/* Line 3 — Location + WhatsApp */}
          <div className="flex justify-between py-1 items-center">
            <span>📍 Dhanmondi, Dhaka</span>
            <button className="bg-[#FA7D1F] rounded-xl px-1 py-1 text-[#f0eec9] font-poppins font-bold hover:bg-[#FA7D1F]/80">
              Text on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
