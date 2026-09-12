"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-screen">
      <header>
        {/* Navbar */}
        <div className="md:flex md:grid-cols-1 md:items-center">
          <Image src="/Bilai.png" width={48} height={48} alt="" />
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1 className="text-2xl font-matcha-mint text-[#212922] mx-0.5">
            bilai.
          </h1>
        </div>
      </header>

      <div className=" flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-6 md:px-16 py-12 overflow-hidden gap-8 md:gap-0">
        <div className="mx-5 md:mx-10 xl:mx-30">
          <h1 className="font-poppins font-bold text-[#FA7D1F] text-xs xl:text-xl flex justify-center">
            A HOME FOR EVERY CAT
          </h1>
          <h1 className=" text-4xl xl:text-6xl font-matcha-mint text-[#212922] flex justify-center">
            Join Us
         </h1>
           <h2 className="text-xs md:text-sm font-poppins font-bold text-[#212922] flex justify-center">
            Give your cats a better future.
          </h2>
      </div>        
      <div className="w-[90%] sm:w-full max-w-md p-6 md:p-12 shadow-lg bg-gradient-to-b from-[#ffffff] to-[#f0eec9] rounded-4xl my-10 md:my-50 xl:my-30 xl:mx-60 md:mx-10 mx-auto">
          <h1 className="font-poppins font-extrabold text-2xl xl:text-3xl text-[#212922] flex justify-center">
            Sign Up to
            <span className="font-matcha-mint font-normal text-2xl xl:text-3xl text-[#212922] mx-1.5 my-1 xl:my-1.5">
              bilai.
            </span>
          </h1>
          <div>
            <h2 className="flex justify-center items-center font-sans font-normal">
              {" "}
              Manage your listings and connect with adopters{" "}
            </h2>
          </div>
          <hr className="mt-3" />
          <div>
            <label
              htmlFor="email"
              className="block text-base mb-2 my-5 font-poppins font-bold"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(String(e))}
              className=" bg-[#fffeee00] border border-black w-full rounded-md h-8"
            />
            <label
              htmlFor="email"
              className="block text-base mb-2 my-5 font-poppins font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="username"
              value={password}
              onChange={(e) => setPassword(String(e))}
              className=" bg-[#fffeee00] border border-black w-full rounded-md h-8"
            />
            <p className="">Already have an account?{""}
              <Link href="/login_form" className="mx-0.5 font-poppins font-medium text-[#080808] hover:underline"> Sign in</Link>
            </p>
          </div>
                      <div className="flex justify-center items-center">
              <button className="mt-5 font-poppins font-bold text-2xl border-2 border-[#a1cf6b] bg-[#a1cf6b] rounded-xl py-1 w-full hover:bg-[#d5f8ad] hover:text-[#a7a5a5]"> Sign Up </button>

            </div>
        </div>
      </div>
    </div>
  );
}
