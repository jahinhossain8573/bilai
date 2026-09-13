import Link from "next/link";
import Image from "next/image";
import Card from "./components/card";
import { CatRecord } from "@/app/actions/cats";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export default async function App() {
  const session = await auth();

  async function getData() {
    const data: CatRecord[] = await prisma.cat.findMany();
    return data;
  }
  const catData = await getData();
  return (
    <div className="bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-screen">
      <header className=" bg-[#f0eec9] p-1.5  flex justify-between gap-2 items-center">
        {/* Navbar */}
        <div className="bg-[#f0eec9] rounded-xl p-1 md:flex md:grid-cols-1 md:items-center">
          <Image src="/Bilai.png" width={32} height={32} alt="" />
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1 className="lg:text-xl font-matcha-mint font-normal text-[#212922] mx-0.5">
            bilai.
          </h1>
        </div>

        {session === null ? (
          <div>
            <Link
              href={"/login_form"}
              className="md:hidden text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5"
            >
              <span >+ List Cat</span>
            </Link>
            <Link
              href="/login_form"
              className="hidden md:block text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5 whitespace-nowrap"
            >
              <span className="hidden lg:inline">+ List Cat</span>
              <span className="lg:hidden">+ List Cat</span>
            </Link>
          </div>
        ) : (
          <div>
            <Link
              href={"/add_cat"}
              className="md:hidden text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5"
            >
              <span>+ List Cat</span>
            </Link>
            <Link
              href="/add_cat"
              className="hidden md:block text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5 whitespace-nowrap"
            >
              <span className="hidden lg:inline">+ List Cat</span>
              <span className="lg:hidden">+ List Cat</span>
            </Link>
           </div>
        )}

        <div>
          {/* Add in the Profile image here */}
          {session === null ? (
            <Link
              href="/login_form"
              className="text-[#212922] font-poppins font-extrabold hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5"
            >
              <span>Login</span>
            </Link>
          ) : (
            <Link
              href="/profile"
              className="text-[#212922] font-poppins font-extrabold flex items-center hover:text-[#080808] transition-colors duration-200 hover:bg-[#a1cf6b] rounded-2xl p-1.5"
            >
              <Image src="/profile.png" width={32} height={32} alt="" />
              <span>Profile</span>
            </Link>
          )}
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
              <Card
                catInput={e}
                canDelete={session?.user?.id === e.userId}
                showWhatsApp={session?.user?.id !== e.userId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
