export default function Page() {
  return (
    <div>
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
      <div className="bg-[url('/Background.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-screen"></div>
    </div>
  );
}
