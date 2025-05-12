import { Meal } from "@/models/Meals";
import { NextResponse } from "next/server";
import { dbconnect } from "@/lib/mongodb";






export async function POST(req: Request) {
  try {
    await dbconnect();
    const body = await req.json()
    const { title, image, summary, creatorName,creatorEmail, slug ,instructions } = body;
    if([title,summary,creatorName,creatorEmail,instructions,slug].some((item)=>(item.trim().length===0))){
        throw new Error("Validation Error")
    } 
    const newMeal = await Meal.create({ title, image, summary, creatorName,creatorEmail, slug ,instructions});
    return NextResponse.json(newMeal, { status: 201 });
  } catch (error) {
    console.log("Error", error);
  }
}

export async function GET() {
  try {
    await dbconnect();
    const data = await Meal.find();
    if (!data) throw new Error("Failed to fetch Meals data");
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.log("Error", error);
  }
}


