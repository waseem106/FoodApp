"use client";
import Mealform from "@/components/mealform";
import React from "react";

function Page() {
  return (
    <>
      <header className="leading-[3] mx-4 md:mx-20 ">
        <h1 className="text-2xl md:text-5xl font-extrabold ">
          Share your <span className="text-orange-500">favorite meal </span>
        </h1>
        <p className="text-gray-300">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      <main className="mx-auto md:mx-20 w-[80vw] md:w-[50vw] mt-10">
        <Mealform />
      </main>
    </>
  );
}

export default Page;
