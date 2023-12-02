"use client";

import { useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

const ToggleSwitch = () => {
  const [isLightMode, setLightMode] = useState(true);

  const toggleSwitch = () => {
    setLightMode(!isLightMode);

    const htmlElement = document.documentElement;

    // Periksa apakah kelas 'dark' sudah ada
    const isDarkMode = htmlElement.classList.contains("dark");

    // Jika sudah ada, hapus kelas 'dark'; jika belum ada, tambahkan kelas 'dark'
    htmlElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <>
      <div
        id="light"
        className={`${isLightMode ? "" : "hidden"} cursor-pointer`}
        onClick={toggleSwitch}
      >
        <Sun size={32} className="hover:fill-sky-400" />
      </div>
      <div
        id="dark"
        className={`${isLightMode ? "hidden" : ""} cursor-pointer`}
        onClick={toggleSwitch}
      >
        <Moon size={32} fill="#ffffff" className="hover:fill-sky-400" />
      </div>
    </>
  );
};

export default ToggleSwitch;
