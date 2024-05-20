"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toggleDarkMode } from "@/redux/theme/themeSlice";
import Image from "next/image";

export default function Home() {
  const darkMode=useAppSelector((state)=>state.theme.darkMode);
  const dispatch=useAppDispatch();
  const handleDarkMode=()=>{
    dispatch(toggleDarkMode())
  }
  
  return (
   <>
   <h1 className="text-4xl font-bold flex items-center justify-center">Hello Campus Guru</h1>
   <button onClick={handleDarkMode}>Change Theme</button>
   </>
  );
}
