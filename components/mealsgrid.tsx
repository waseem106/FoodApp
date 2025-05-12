import React from "react";
import { MealType } from "@/app/meals/testing/page";
import Image from "next/image";
import Link from "next/link";

type MealsGrid = {
  meals: MealType;
  loading: boolean;
};

function Mealsgrid({ meals, loading }: any) {
  return (
    <>
      {loading && (
        // <p className="text-center animate-bounce text-3xl text-orange-400">
        //   Fetching.....
        // </p>
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="mx-4 md:mx-10 my-2 grid [grid-template-columns:repeat(1,1fr)] sm:[grid-template-columns:repeat(2,1fr)] md:[grid-template-columns:repeat(3,minmax(200px,1fr))]  gap-10  ">
        {meals &&
          meals?.length > 0 &&
          meals.map((item:any) => (
            <div
              key={item._id}
              className="border border-gray-600 shadow-2xl  flex flex-col justify-center p-3 rounded-md 
                overflow-hidden hover:brightness-75 
         "
            >
              <div className="relative w-full h-[300px]  overflow-hidden">
                <Image
                  src={item.image}
                  alt="Image of the Meal"
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="text-2xl font-medium">{item.title}</h1>
              <p>{item.summary}</p>

              <Link href={`/meals/${item.slug}`} className="ml-auto">
                <button className="cursor-pointer bg-orange-500 text-white px-2 md:px-3 my-1 p-1 md:p-2 rounded-md text-xl  ">
                  View Details
                </button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Mealsgrid;
