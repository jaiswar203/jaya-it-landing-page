import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { db } = await connectToDatabase();
    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog from MongoDB:", error);
    if (
      error instanceof Error &&
      error.message.includes(
        "Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer"
      )
    ) {
      return NextResponse.json(
        { message: "Invalid blog ID format" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Error fetching blog" },
      { status: 500 }
    );
  }
} 