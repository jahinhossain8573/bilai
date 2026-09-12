import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import localFont from "next/font/local";
import "./globals.css";
export const metadata: Metadata = {
  title: "Bilai - Cat Adoption",
  description: "Find your next cat, or help one find a home.",
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const matchaMint = localFont({
  src: "./fonts/MatchaMint.ttf",
  variable: "--font-matcha-mint",
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${matchaMint.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
