"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import placeholderCatPhoto from "@/app/resources/sample_cat_photo.jpeg";
import { CatRecord, deleteCatFromDB } from "@/app/actions/cats";

export default function Card({
  catInput,
  canDelete,
  showWhatsApp = true,
  onDeleted,
}: {
  catInput: CatRecord;
  canDelete: boolean;
  showWhatsApp?: boolean;
  onDeleted?: (catId: number) => void;
}) {
  const router = useRouter();
  const [isDeleting, startDeleting] = useTransition();

  function deleteCard() {
    if (!window.confirm(`Delete ${catInput.name}'s card?`)) return;

    startDeleting(async () => {
      try {
        await deleteCatFromDB(catInput.id);
        onDeleted?.(catInput.id);
        router.refresh();
      } catch (error) {
        window.alert(
          error instanceof Error
            ? error.message
            : "Unable to delete this card.",
        );
      }
    });
  }

  function textOnWhatsApp() {
    if (!catInput.whatsapp) return;
    const url = `https://wa.me/${"88" + catInput.whatsapp}?text=${encodeURIComponent("Hello! I found your cat " + catInput.name + " listed on Bilai. Could you please give me some additional information?")}`;

    window.open(url, "_blank");
  }
  return (
    <div className="w-full rounded-2xl bg-[#f0eec9] shadow-md">
      <Image
        src={catInput.imageUrl ?? placeholderCatPhoto.src}
        width={300}
        height={200}
        alt=""
        className="rounded-t-2xl object-cover w-70 p-2 aspect-video"
      />
      {/* Cat Image */}

      <div className="px-2">
        {/* Text inside the card */}
        <div className="flex justify-between gap-4">
          <span className=" text-lg font-bold text-[#212922]">
            {catInput.name}
          </span>
          <span>Parent: {catInput.parentName}</span>
        </div>

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
            {catInput.ageMonths === 0 ? (
              <span>Newborn</span>
            ) : (
              <>
                <span>
                  {" "}
                  {Math.floor(catInput.ageMonths / 12) !== 0 && (
                    <>
                      {Math.floor(catInput.ageMonths / 12)}{" "}
                      {Math.floor(catInput.ageMonths / 12) === 1 ? (
                        <span>year</span>
                      ) : (
                        <span>years</span>
                      )}
                    </>
                  )}
                </span>
                <span>
                  {" "}
                  {catInput.ageMonths % 12 !== 0 &&
                    catInput.ageMonths % 12}{" "}
                  {catInput.ageMonths % 12 !== 0 &&
                    (catInput.ageMonths % 12 === 1 ? (
                      <span>month</span>
                    ) : (
                      <span>months</span>
                    ))}
                </span>
              </>
            )}
          </li>
          <li>
            <span>•</span>
            {catInput.gender === "MALE" ? (
              <span> Male</span>
            ) : (
              <span> Female</span>
            )}
          </li>
        </ul>
        <div>
          {" "}
          {/* Line 3 — Location + WhatsApp */}
          <div className="flex justify-between py-1 items-center">
            <span>📍 {catInput.location}</span>
            <div className="flex gap-1">
              {showWhatsApp && (
                <button
                  onClick={textOnWhatsApp}
                  className="bg-[#FA7D1F] rounded-xl px-1 py-1 text-[#f0eec9] font-poppins font-bold hover:bg-[#FA7D1F]/80"
                >
                  Text on WhatsApp
                </button>
              )}
              {canDelete && (
                <button
                  onClick={deleteCard}
                  disabled={isDeleting}
                  className="bg-red-600 rounded-xl px-1 py-1 text-white font-poppins font-bold hover:bg-red-700 disabled:opacity-50"
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
