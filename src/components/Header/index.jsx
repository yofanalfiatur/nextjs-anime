import Link from "next/link";
import InputSearch from "./InputSearch";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  return (
    <>
      <header className="w-full h-full sticky top-0 shadow-lg z-50 bg-white dark:bg-slate-800 dark:text-white">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="">
            <Link href={`/`} className="title-logo">
              ANIMEK
            </Link>
          </div>
          <div className="menu flex flex-row justify-between items-center gap-8">
            <ul className="flex flex-row gap-4">
              <li className="flex">
                <a href={`/#anime`} className="w-full py-6 hover:text-sky-400">
                  Top Anime
                </a>
              </li>
              <li className="flex">
                <a href={`/#manga`} className="w-full py-6 hover:text-sky-400">
                  Top Manga
                </a>
              </li>
              <li className="flex">
                <a href="#" className="w-full py-6 hover:text-sky-400">
                  Coming Soon
                </a>
              </li>
            </ul>
            <InputSearch />
            <ToggleSwitch />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
