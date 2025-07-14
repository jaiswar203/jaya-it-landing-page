import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const blogs = await db.collection("blogs").find().toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json(
      { message: "Error fetching blogs" },
      { status: 500 }
    );
  }
}
