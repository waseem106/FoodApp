"use client";
import Mealsgrid from "@/components/mealsgrid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MealType } from "./testing/page";

function page() {
  const [meal, setMeal] = useState<MealType[]>([]);
  const [loading, setLoading] = useState(false);

  const getMealData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/meals");
      if (!res) throw new Error("Failed to fetch meal data");
      const mealData = await res.json();

      setMeal(mealData);
      setLoading(false);
      console.log("Meal data received", mealData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getMealData();
  }, []);

  return (
    <div>
      <header className="mx-4 md:mx-10">
        <h1 className="text-3xl font-bold">
          Delicious meals, created{" "}
          <span className="text-orange-500">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className=" text-white font-bold my-3">
          <Link
            href={"/meals/share"}
            className="bg-orange-500 py-2 px-4 rounded-2xl"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
        <p className="my-4">
          <Link
            href={"/meals/testing"}
            className="bg-orange-500 px-5 py-2 my-2 rounded-2xl text-white font-bold"
          >
            Testing Routing
          </Link> 
        </p>
      </header>

      <main>
        <Mealsgrid meals={meal} loading={loading} />
      </main>
    </div>
  );
}

export default page;
