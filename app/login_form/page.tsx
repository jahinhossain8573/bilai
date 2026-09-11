import Link from "next/link";
import Image from "next/image";

export default function Page() {
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
            Welcome
          </h1>
          <h2 className="text-xs md:text-xl font-poppins font-bold text-[#212922] flex justify-center">
            Your cats have been waiting.
          </h2>
        </div>

        <div className=" w-125 p-15 shadow-lg bg-gradient-to-b from-[#fffff6] via-[#fffff6] to-[#ffe4cf] rounded-4xl my-10 xl:my-30 mx-30">
          <h1 className="font-poppins font-extrabold text-2xl xl:text-3xl text-[#212922] flex justify-center">
            Log in to
            <h1 className="font-matcha-mint font-normal text-2xl xl:text-3xl text-[#212922] mx-1.5 md:my-1">
              bilai.
            </h1>
          </h1>
          <div>
            <h2 className="flex justify-center items-center font-sans font-normal ">
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
              placeholder=" your@example.com"
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
              placeholder=" *******"
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
