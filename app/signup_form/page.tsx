"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { signUp } from "@/app/actions/auth";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("whatsapp", whatsapp);

    const result = await signUp(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

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
        <div className="sm:mx-5 md:mx-10 xl:mx-30">
          <h1 className="font-poppins font-bold text-[#FA7D1F] text-xs xl:text-xl flex justify-center">
            A HOME FOR EVERY CAT
          </h1>
          <h1 className=" text-4xl xl:text-6xl font-matcha-mint text-[#212922] flex justify-center">
            JOIN US
          </h1>
          <h2 className="text-xs md:text-xl font-poppins font-bold text-[#212922] flex justify-center">
            Build your cats a bright future.
          </h2>
        </div>
        <div className="w-[90%] sm:w-full max-w-md p-6 md:p-12 shadow-lg bg-gradient-to-b from-[#ffffff] to-[#fdd299] rounded-4xl my-10 md:my-50 xl:my-30 xl:mx-60 md:mx-10 mx-auto">
          <h1 className="font-poppins font-extrabold text-4xl text-[#212922] flex justify-center">
            Sign Up to
            <span className="font-matcha-mint font-normal lg:text-3xl text-[#212922] mx-2 my-2">
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
          {error && (
            <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="block text-base mb-2 my- font-poppins font-bold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Your Name"
              className=" bg-[#fffeee00] border border-black w-full rounded-md h-8"
              required
            />
            <label
              htmlFor="email"
              className="block text-base mb-2 my-5 font-poppins font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(String(e.target.value))}
              placeholder=" yourexample@gmail.com"
              className=" bg-[#fffeee00] border border-black w-full rounded-md h-8"
            />

            <label
              htmlFor="whatsapp"
              className="block text-base mb-2 my-5 font-poppins font-bold"
            >
              WhatsApp:
            </label>
            <div className="flex items-center">
              <span className="mr-1 text-2xl">+88</span>
              <input
                type="tel"
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="01xxxxxxxxx"
                inputMode="numeric"
                maxLength={11}
                pattern="01[0-9]{9}"
                title="Enter an 11-digit number starting with 01"
                className="bg-[#fffeee00] border border-black w-full rounded-md h-8"
                required
              />
            </div>

            <label
              htmlFor="password"
              className="block text-base mb-2 my-5 font-poppins font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(String(e.target.value))}
              placeholder=" ********"
              className="bg-[#fffeee00] border border-black w-full rounded-md h-8"
            />
            <p>
              Already have an account?
              <Link
                href="/login_form"
                className="mx-0.5 font-poppins font-medium text-[#080808] hover:underline"
              >
                Log in
              </Link>
            </p>
            <button
              type="submit"
              disabled={loading}
              className="mt-5 font-poppins font-bold text-2xl border-2 border-[#FA7D1F] bg-[#FA7D1F] rounded-xl py-1 w-full hover:bg-[#ffb175] hover:text-[#ffffff]"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
