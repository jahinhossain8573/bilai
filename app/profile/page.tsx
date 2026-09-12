"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div>
      <button
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
        className="border py-1 px-2 rounded-2xl"
      >
        Sign Out
      </button>
    </div>
  );
}
