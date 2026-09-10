export default function Page() {
  return <div>
          <header className=" bg-[#f0eec9] p-1.5  flex gap-4 my-1.5 mx-1 items-center rounded-xl">
        {/* Navbar */}
        <div className="bg-[#f0eec9] rounded-xl p-1 md:flex md:grid-cols-1 md:items-center">
          <img src="/Bilai.png" width={32} height={32} />
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1 className="text-1xl font-matcha-mint font-normal text-[#212922] mx-0.5">
            bilai.
          </h1>
        </div>
      </header>
    <div className="flex justify-center items-center bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-screen ">
    <div className="w-125 p-10 shadow-lg bg-gradient-to-b from-[#ffffff] to-[#f0eec9] rounded-md">
       <h1 className="font-poppins font-extrabold text-4xl text-[#212922] flex justify-center">
          Log in to
          <h1 className="font-matcha-mint font-normal lg:text-3xl text-[#212922] mx-2 my-2">
             bilai.
          </h1>
        </h1>
        <div>
          <h2 className="flex justify-center items-center font-sans font-normal"> Manage your listings and connect with adopters </h2>
        </div>
        <hr className="mt-3" />
<div>
  <label htmlFor="email" className="block text-base mb-2 my-2 font-poppins font-bold">Email</label>
  <input type="text" id="username" className=" bg-[#FFFEEE] border-[#ffffff] w-full rounded-md" />
</div>
    </div>
      </div>
  </div>;
} 
