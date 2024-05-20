"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toggleDarkMode } from "@/redux/theme/themeSlice";
import Image from "next/image";

export default function Home() {

  
  return (
   <>
   <h1 className="text-4xl font-bold flex items-center justify-center">Hello Campus Guru</h1>
   {/* <button onClick={handleDarkMode}>Change Theme</button> */}
   </>
  );
}
