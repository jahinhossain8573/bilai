import Image from "next/image";

import catPhoto from "../resources/sample_cat_photo.jpeg";
export default function Card() {
  return (
    <div className="border w-fit rounded-2xl">
      <Image
        src={catPhoto}
        width={300}
        height={200}
        alt=""
        className="rounded-tl-2xl object-cover w-full p-2 aspect-video"
      />
      {/* Cat Image */}

      <div className="p-2">
        {/* Text inside the card */}
        <h2 className="">Milo</h2> {/* Line 1 — Cat Name */}
        <ul className="flex gap-1.5">
          {" "}
          {/* Line 2 — Breed, Age, Gender */}
          <li>
            <span>•</span>
            <span>Deshi</span>
          </li>
          <li>
            <span>•</span>
            <span>6 months</span>
          </li>
          <li>
            <span>•</span>
            <span>Male</span>
          </li>
        </ul>
        <div>
          {" "}
          {/* Line 3 — Location + WhatsApp */}
          <div className="flex justify-between">
            <span>📍 Dhanmondi, Dhaka</span>
            <button className="bg-gray-200 rounded-2xl px-2">
              Text on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
