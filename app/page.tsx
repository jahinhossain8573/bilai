import Link from "next/link";
import Card from "./components/card";
import { CreateCatInput } from "@/app/add_cat/page";
import { prisma } from "@/lib/prisma";

export default async function App() {
  async function getData() {
    const data: CreateCatInput[] = await prisma.cat.findMany();
    return data;
  }
  const catData = await getData();
  return (
    <div className="bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-screen">
      <header className=" bg-[#f0eec9] p-1.5  flex justify-center gap-4 my-1.5 mx-1 items-center rounded-xl">
        {/* Navbar */}
        <div className="bg-[#a1cf6b] rounded-xl p-1 md:flex md:grid-cols-1 md:items-center">
          <img src="/Bilai.png" width={32} height={32} />
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1 className="lg:text-1xl font-matcha-mint font-normal text-[#212922]">
            bilai.
          </h1>
        </div>
        <input
          type="text"
          className="bg-[#FFFEEE] rounded-2xl p-1"
          placeholder="Search"
        />
        {/* Search */}
        <Link
          href="font-Poppins"
          className="text-[#212922] font-poppins font-bold hover:cursor-pointer`"
        >
          Home
        </Link>
        <Link
          href="/add_cat"
          className="text-[#212922] font-poppins font-bold hover:cursor-pointer"
        >
          Add a Cat
        </Link>
        <div>
          {/* Add in the Profile image here */}
          <Link
            href="/login_form"
            className="text-[#212922] font-poppins font-bold hover:cursor-pointer"
          >
            Profile
          </Link>
        </div>
        {/* Search */}
      </header>
      <div className="my-2 mx-4">
        <h1 className="font-poppins font-bold lg:text-2xl text-[#212922] my-2">
          Cats looking for a home
        </h1>
        <div className="flex flex-wrap gap-4 justify-center"></div>
      </div>
    </div>
  );
}
