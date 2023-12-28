"use client";
import { useRouter } from "next/navigation";

import React from "react";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <>
      <button className="btn btn-primary" onClick={() => router.back()}>
        ⏪ Back to previous page
      </button>
    </>
  );
};

export default ButtonBack;
