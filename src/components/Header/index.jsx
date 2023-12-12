"use client";
import Link from "next/link";
import InputSearch from "./InputSearch";
import ToggleSwitch from "./ToggleSwitch";
import Menu from "./Menu";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";

const Header = () => {
  const handleClickMenu = () => {
    const mobileMenu = document.querySelector(".menu-mobile");
    const listIcon = document.querySelector("#burger-menu");
    const closeIcon = document.querySelector("#burger-close");
    const searchMobile = document.querySelector(".search-mobile");
    const searchIcon = document.querySelector("#search-icon");

    if (mobileMenu && listIcon && closeIcon && searchMobile && searchIcon) {
      // Close search if open
      if (!searchMobile.classList.contains("invisible")) {
        searchMobile.classList.add("invisible");
        searchMobile.classList.remove("visible", "opacity-100");
        searchMobile.classList.add("opacity-0");
        searchIcon.classList.remove("hidden");
        return;
      }

      // Toggle menu visibility
      mobileMenu.classList.toggle("invisible");
      mobileMenu.classList.toggle("visible");
      mobileMenu.classList.toggle("opacity-0");
      mobileMenu.classList.toggle("opacity-100");

      // Toggle menu icon visibility
      listIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    }
  };

  const handleClickSearch = () => {
    const searchMobile = document.querySelector(".search-mobile");
    const searchIcon = document.querySelector("#search-icon");
    const mobileMenu = document.querySelector(".menu-mobile");
    const listIcon = document.querySelector("#burger-menu");
    const closeIcon = document.querySelector("#burger-close");

    if (searchMobile && searchIcon && mobileMenu && listIcon && closeIcon) {
      // Close menu if open
      if (!mobileMenu.classList.contains("invisible")) {
        mobileMenu.classList.add("invisible");
        mobileMenu.classList.remove("visible", "opacity-100");
        mobileMenu.classList.add("opacity-0");
        listIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }

      // Toggle search visibility
      searchMobile.classList.toggle("invisible");
      searchMobile.classList.toggle("visible");
      searchMobile.classList.toggle("opacity-0");
      searchMobile.classList.toggle("opacity-100");
    }
  };

  return (
    <>
      <header className="w-full h-full sticky top-0 shadow-lg z-50 bg-white dark:bg-slate-800 dark:text-white">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="">
            <Link href={`/`} className="title-logo">
              ANIMEK
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="menu hidden md:flex flex-row justify-between items-center gap-8 ">
            <Menu className="flex gap-4 flex-row" classChild="w-full py-6" />
            <InputSearch />
            <ToggleSwitch />
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden relative flex flex-row justify-between items-center gap-8 py-4">
            <ToggleSwitch />
            <div className="flex flex-row justify-between">
              <List
                size={32}
                color=""
                className="dark:fill-white cursor-pointer"
                id="burger-menu"
                onClick={handleClickMenu}
              />
              <X
                size={32}
                className="dark:fill-white cursor-pointer hidden"
                id="burger-close"
                onClick={handleClickMenu}
              />
            </div>
            <Menu
              className="menu-mobile flex flex-col fixed invisible opacity-0 transition-all top-16 duration-300 border-solid border-t-[1px] border-t-slate-700 dark:border-t-slate-50 bg-white dark:bg-slate-700 dark:text-white right-0 w-1/2 gap-2 shadow-xl rounded-b-xl"
              classChild="w-full py-2 px-4"
            />
            <MagnifyingGlass
              size={28}
              className="cursor-pointer dark:text-white"
              id="search-icon"
              onClick={handleClickSearch}
            />
            <div className="search-mobile fixed invisible opacity-0 transition-all top-16 right-0 duration-300 border-solid border-t-[1px] border-t-slate-700 dark:border-t-slate-50 p-4 bg-white dark:bg-slate-700 dark:text-white rounded-b-xl shadow-xl">
              <InputSearch />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
