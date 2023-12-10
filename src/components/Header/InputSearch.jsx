"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    //untuk memberikan validasi ketika input kosong atau kurang dari 2 character
    if (!keyword || keyword.length < 2) return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2 relative">
      <input
        type="text"
        className="text-gray-900 text-base p-2 border-2 rounded-md"
        placeholder="Search"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className=" absolute top-1/2 translate-y-[-50%] right-2"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={28} className="cursor-pointer" fill="#000000" />
      </button>
    </div>
  );
};

export default InputSearch;
