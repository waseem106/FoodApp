import { paramstype } from "@/app/meals/[slug]/page";
import { dbconnect } from "@/lib/mongodb";
import { Meal } from "@/models/Meals";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: paramstype) {
  try {
    await dbconnect();
    const { slug } = context.params;
    const resData = await Meal.findOne({ slug });
    console.log("fetched result", resData);
    return NextResponse.json(resData, { status: 201 });
  } catch (error) {
    console.log("Error:", error);
  }
}
