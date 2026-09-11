import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <header className=" bg-[#f0eec9] p-1.5  flex gap-4 my-1.5 mx-1 items-center rounded-xl">
        {/* Navbar */}
        <div className="bg-[#f0eec9] rounded-xl p-1 md:flex md:grid-cols-1 md:items-center">
          <Image src="/Bilai.png" width={32} height={32} alt="" />
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1 className="text-1xl font-matcha-mint font-normal text-[#212922] mx-0.5">
            bilai.
          </h1>
        </div>
      </header>

      <div className="flex justify-center items-center bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-screen ">
        <h1 className="font-matcha-mint font-medium lg:text-3xl ">
          WELCOME BACK
          <h2></h2>
        </h1>

        <div className="w-125 p-10 shadow-lg bg-gradient-to-bg from-[#fffff6] via-[#fffff6] to-[#ffe4cf] rounded-md">
          <h1 className="font-poppins font-extrabold lg:text-4xl text-[#212922] flex justify-center">
            Log in to
            <span className="font-matcha-mint font-normal lg:text-3xl text-[#212922] mx-2 lg:my-2">
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
              className=" bg-[#fffeee00] border border-black w-full h-8 rounded-md"
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
              className=" bg-[#fffeee00] border border-black w-full rounded-md h-8"
            />
            <p className="">
              Don&apos;t have an account?{""}
              <Link
                href="/signup_form"
                className="mx-0.5 font-poppins font-medium text-[#080808] hover:underline"
              >
                {" "}
                Sign up
              </Link>
            </p>
            <div className="flex justify-center items-center">
              <button className="mt-5 font-poppins font-bold text-2xl border-2 border-[#FA7D1F] bg-[#FA7D1F] rounded-xl py-1 w-full hover:bg-[#ffb175] hover:text-[#ffffff]">
                {" "}
                LOGIN{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
