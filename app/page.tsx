import Link from "next/link";
import Card from "./components/card";

export default function App() {
  return (
    <div className="">
      <header className="p-5 flex justify-center gap-3 items-center">
        {/* Navbar */}
        <div>
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1>BILAI</h1>
        </div>
        <input
          type="text"
          className="bg-gray-200 rounded-2xl p-1"
          placeholder="Search"
        />
        {/* Search */}
        <Link href="">Home</Link>
        <button className=" hover:cursor-pointer">Add a Cat</button>
        <div>
          {/* Add in the Profile image here */}
          <span>Profile</span>
        </div>
        {/* Search */}
      </header>
      <div className="p-3">
        <h1 className="font-extrabold text-3xl">Cats looking for a home</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
