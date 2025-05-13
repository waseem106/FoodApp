import { dbconnect } from "@/lib/mongodb";
import { Meal } from "@/models/Meals";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbconnect();

    const { slug } = await params;

    const meal = await Meal.findOne({ slug });

    if (!meal) {
      return NextResponse.json({ message: "Meal not found" }, { status: 404 });
    }

    return NextResponse.json(meal, { status: 200 });
  } catch (error) {
    console.error("Error fetching meal:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
