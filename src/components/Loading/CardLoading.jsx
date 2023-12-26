import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardLoading = () => {
  return (
    <>
      <Link
        href="#"
        className="card animate-pulse flex flex-col gap-y-1 bg-gray-200  rounded-md hover:shadow-xl hover:bg-slate-200 relative overflow-hidden dark:bg-slate-500 dark:hover:bg-slate-400"
      >
        <Image
          src="https://placehold.co/300x400/jpg"
          alt="card-image"
          width={300}
          height={400}
          priority
          className="aspect-[3/4] object-cover object-center"
        />
        <div className="p-4 flex flex-col items-center w-full h-full justify-center">
          <h4 className="text-center ">Loading ...</h4>
        </div>
        <div className="absolute top-0 left-0 px-2 pt-2 pb-4 bg-slate-900 bg-opacity-80 flex flex-col items-center gap-1">
          <Image
            src="/score-star.svg"
            alt="star"
            width={20}
            height={20}
            priority
            className=""
          />
          <p className="text-white">0.0</p>
        </div>
      </Link>
    </>
  );
};

export default CardLoading;
