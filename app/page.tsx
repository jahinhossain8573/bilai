import Link from "next/link";
import Card from "./components/card";
import { CreateCatInput } from "@/app/actions/cats";
import { prisma } from "@/lib/prisma";

export default async function App() {
  async function getData() {
    const data: CreateCatInput[] = await prisma.cat.findMany();
    return data;
  }
  const catData = await getData();
  return (
    <div className="bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-screen">
      <header className=" bg-[#f0eec9] p-1.5  flex justify-center gap-2 my-1.5 mx-1 items-center rounded-xl">
        {/* Navbar */}
        <div className="bg-[#f0eec9] rounded-xl p-1 md:flex md:grid-cols-1 md:items-center">
          <img src="/Bilai.png" width={32} height={32} />
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1 className="lg:text-xl font-matcha-mint font-normal text-[#212922] mx-0.5">
            bilai.
          </h1>
        </div>
        <input
          type="text"
          className="bg-[#FFFEEE] rounded-2xl p-1 w-3/5"
          placeholder="Search"
        />
        {/* Search */}
        <Link
          href="Home"
          className="text-[#212922] font-poppins font-extrabold hover:text-[##080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5"
        >
          Home
        </Link>
        <Link
          href="/add_cat"
          className="md:hidden text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5"
        >
          <span></span>
          <span>Add</span>
        </Link>
        <Link
          href="/add_cat"
          className="hidden md:block text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5 whitespace-nowrap"
        >
          <span className="hidden lg:inline">Add a Cat</span>
          <span className="lg:hidden">Add</span>
        </Link>
        <div>
          {/* Add in the Profile image here */}
          <Link
            href="/login_form"
            className="text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5"
          >
            Profile
          </Link>
        </div>
        {/* Search */}
      </header>
      <div className="my-2 mx-4">
        <h1 className="font-matcha-mint font-medium lg:text-2xl text-[#212922] my-2 text-center">
          Cats looking for a Home
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {catData.map((e) => (
            <div key={e.id}>
              <Card catInput={e} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}