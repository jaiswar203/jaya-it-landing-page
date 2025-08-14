import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { UpdateBlogData } from "@/lib/blog";

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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body: UpdateBlogData = await request.json();
    
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { message: "Title, content, and author are required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    
    const { _id, ...updateData } = body; //eslint-disable-line
    const finalUpdateData = {
      ...updateData,
      updatedAt: new Date(),
    };

    const result = await db
      .collection("blogs")
      .updateOne(
        { _id: new ObjectId(params.id) },
        { $set: finalUpdateData }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Error updating blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { db } = await connectToDatabase();
    
    const result = await db
      .collection("blogs")
      .deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Error deleting blog" },
      { status: 500 }
    );
  }
} 