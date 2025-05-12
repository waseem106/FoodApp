'use client';

import { useState } from "react";

export type MealType={
  _id:string;
  title:string;
  image:string;
  slug:string;
  creator:string;
  summary:string;
}



export default function TestMealPost() {

  const [meal,setMeal]=useState<MealType[]>([])
  const handleSendMeal = async () => {
    const mealData = {
      title: "Test Meal",
      image: "https://via.placeholder.com/400x300.png?text=Meal",
      summary: "This is a test meal summary.",
      creator: "Test User",
      slug: "test-meal",
    };

    const res = await fetch('/api/meals', {
      method: 'POST',
      body: JSON.stringify(mealData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log('Response:', data);
    alert("Meal sent successfully!");
  };


  const getMealData=async ()=>{
    try {
      const res=await fetch('/api/meals')
      if(!res) throw new Error("Failed to fetch meal data")
      const mealData =await res.json()
      setMeal(mealData)
      console.log("Meal data received",mealData) 
      // alert("Meals Data recieved successfully")

      // setMeal(mealData)
    } catch (error) {
      console.log("Error",error)
    }

  }


  console.log("meal",meal)


  return (
    <div className="p-4">
      <button
        onClick={handleSendMeal}
        className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Send Static Meal to DB
      </button>

      <button
      onClick={getMealData}
      className="cursor-pointer"
      >
        Click to send meal data request
      </button>

    {meal && meal?.length > 0 && meal.map((item)=>(
      <div key={item._id} className="border flex  p-3 flex-col items-center justify-center font-medium md:text-2xl"> 
      <h1>{item.title}</h1>
      <img src={item.image} alt="Image of the Meal" />
      <h2>{item.slug}</h2>
      <p>{item.creator}</p>
      <p>{item.summary}</p>
      </div>
    ))}

    </div>
  );
}
