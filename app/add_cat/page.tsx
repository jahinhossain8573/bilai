import Link from "next/link";

const spanStyling: string = "font-bold ";
const inputGroupStyling: string = "flex flex-col w-3/4";
export default function Page() {
  return (
    <div>
      <header className="p-5 flex justify-center gap-x-48 items-center">
        {/* Navbar */}
        <div>
          {/* ADD IN LOGO AND THE "BILAI" TEXT HERE */}
          <h1>BILAI</h1>
        </div>
        <div className=" text-center">
          <h2 className="text-2xl font-bold">Cat for Adoption</h2>
          <span>Help adopters find the cat</span>
        </div>
        <Link href="/">Back to Cats</Link>
      </header>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2">
          {/* Container for the stuff on the left */}
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Name</span>
            <input type="text" className="border rounded-2xl" />
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Breed</span>
            <input type="text" className="border rounded-2xl" />
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Age</span>
            <input type="text" className="border rounded-2xl" />
          </div>
          <div className={inputGroupStyling}>
            <span className={spanStyling}>Location</span>
            <input type="text" className="border rounded-2xl" />
          </div>
          <button className="bg-green-400 p-2 rounded-2xl">
            Save Cat Profile
          </button>
          <span className="text-zinc-500">
            You can edit these details later
          </span>
        </div>
        <div>
          {/* Container for the stuff on the right */}
          <div>
            <span className={spanStyling}>Gender</span>
            <div>
              <input type="radio" />
              <span>Male</span>
              <input type="radio" />
              <span>Female</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={spanStyling}>Photo</span>
            <input
              type="file"
              name=""
              id=""
              className="border p-5 rounded-2xl"
            />
          </div>
          <div className="flex flex-col">
            <span className={spanStyling}>About your cat</span>
            <input type="text" className="border rounded-2xl p-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
