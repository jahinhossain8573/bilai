"use client";
import { prisma } from "@/lib/prisma";
import { SessionProvider, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const { data: session } = useSession();

  // States
  const [WhatsApp, changeWhatsApp] = useState("");
  const [pastCats, changePastCats] = useState(0);
  const [currentCats, changeCurrentCats] = useState(0);

  // Data Fetch
  const username = session?.user?.name;

  return (
    <div>
      <header className="flex justify-between items-center p-3 border">
        <div>bilai</div>
      </header>

      {/* Profile card */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 border">
        <div className="flex items-center gap-4">
          <div>
            <h1>{username}</h1>
          </div>
        </div>
        <div className="flex divide-x border">
          <div className="px-6 py-4 text-center">
            <input
              value={currentCats}
              onChange={(e) => {
                changeCurrentCats(Number(e.target.value));
              }}
              type="number"
              className="border"
            ></input>
            <p>Cats at home</p>
          </div>
          <div className="px-6 py-4 text-center">
            <input
              value={pastCats}
              onChange={(e) => {
                changePastCats(Number(e.target.value));
              }}
              type="number"
              className="border"
            ></input>
            <p>Cats owned in the past</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Left column */}
        <div className="space-y-4">
          <div className="p-5 border">
            <div className="flex justify-between items-center mb-3">
              <h2>Profile information</h2>
            </div>
            <p>WhatsApp:</p>
            <input
              type="text"
              value={WhatsApp}
              onChange={(e) => {
                changeWhatsApp(e.target.value);
              }}
              className="border"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-5 border">
            <div className="flex justify-between items-center mb-3">
              <h2>My cats</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-3"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => {}} className="flex-1 py-2 border">
              Save
            </button>
            <button
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
              className="flex-1 py-2 border"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
