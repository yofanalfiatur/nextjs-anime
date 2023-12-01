"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Search = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="flex flex-row items-center gap-2 relative">
      <input
        type="text"
        className="text-gray-900 text-base p-2 rounded-md"
        placeholder="Search"
        ref={searchRef}
      />
      <button
        className=" absolute top-1/2 translate-y-[-50%] right-0"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={32} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default Search;
