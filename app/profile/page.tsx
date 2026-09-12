"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { getCurrentUser, updateProfile } from "@/app/actions/user";
import { CatRecord } from "@/app/actions/cats";
import Card from "@/app/components/card";
import Link from "next/link";

export default function Page() {
  const { data: session } = useSession();

  const [WhatsApp, changeWhatsApp] = useState("");
  const [pastCats, changePastCats] = useState(0);
  const [currentCats, changeCurrentCats] = useState(0);
  const [ownedCats, setOwnedCats] = useState<CatRecord[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const username = session?.user?.name;

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        changeWhatsApp(user.whatsapp ?? "");
        changePastCats(user.catsOwnedInPast ?? 0);
        changeCurrentCats(user.catsAtHome ?? 0);
        setOwnedCats(user.cats);
      }
      setLoaded(true);
    });
  }, []);

  async function handleSave() {
    setSaving(true);
    setError(null);
    try {
      await updateProfile({ whatsapp: WhatsApp, pastCats, currentCats });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <header className="flex justify-between items-center p-3 border">
        <div>
          <span>bilai</span>
        </div>
        <div>
          <Link href="/">Back</Link>
        </div>
      </header>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 border">
        <div className="flex items-center gap-4">
          <div>
            <h1>{username}</h1>
          </div>
        </div>
        <div className="flex divide-x border">
          <div className="px-6 py-4 text-center">
            <input
              value={currentCats}
              onChange={(e) => changeCurrentCats(Number(e.target.value))}
              type="number"
              className="border"
            />
            <p>Cats at home</p>
          </div>
          <div className="px-6 py-4 text-center">
            <input
              value={pastCats}
              onChange={(e) => changePastCats(Number(e.target.value))}
              type="number"
              className="border"
            />
            <p>Cats owned in the past</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="p-5 border">
            <div className="flex justify-between items-center mb-3">
              <h2>Profile information</h2>
            </div>
            <p>WhatsApp:</p>
            <div>
              <span>+88</span>
              <input
                type="text"
                value={WhatsApp}
                onChange={(e) => changeWhatsApp(e.target.value)}
                className="border"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="p-5 border">
            <div className="flex justify-between items-center mb-3">
              <h2>My cards</h2>
            </div>
            {ownedCats.length === 0 ? (
              <p>You have not created any cards yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-3">
                {ownedCats.map((cat) => (
                  <Card
                    key={cat.id}
                    catInput={cat}
                    canDelete
                    onDeleted={(catId) =>
                      setOwnedCats((current) =>
                        current.filter((ownedCat) => ownedCat.id !== catId),
                      )
                    }
                  />
                ))}
              </div>
            )}
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSave}
              disabled={saving || !loaded}
              className="flex-1 py-2 border"
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex-1 py-2 border"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
