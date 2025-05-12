import { dbconnect } from "@/lib/mongodb";
import { Meal } from "@/models/Meals";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This is the correct signature for a dynamic route API handler in the App Router.
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbconnect();
    const resData = await Meal.findOne({ slug: params.slug });

    if (!resData) {
      return NextResponse.json({ message: "Meal not found" }, { status: 404 });
    }

    return NextResponse.json(resData, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
