import React from "react";
import Image from "next/image";
import { Inter, Open_Sans, Cormorant_Garamond } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const open_Sans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"], // Specify the subsets you need
  preload: true, // Preload the font
  variable: "--font-Open_Sans",
});
const cormorant_Garamond = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["cyrillic"], // Specify the subsets you need
  preload: true, // Preload the font
  variable: "--font-cormorant_Garamond",
});

export default function layout({ children }) {
  return (
    <div className={` relative bg-black ${cormorant_Garamond.variable} font-cormorant_Garamond `}>
      <div className="  w-full h-20 bg-black flex items-center justify-between px-10 py-10 fixed  z-10">
        <img src="/logo.png" className=" h-16 object-contain" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="pt-20">{children}</div>
    </div>
  );
}
