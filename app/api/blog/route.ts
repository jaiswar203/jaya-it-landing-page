import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { CreateBlogData } from "@/lib/blog";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const blogs = await db.collection("blogs").find().sort({ createdAt: -1 }).toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json(
      { message: "Error fetching blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: CreateBlogData = await request.json();
    
    // Validate required fields
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { message: "Title, content, and author are required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    
    const blogData = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("blogs").insertOne(blogData);
    
    return NextResponse.json(
      { 
        message: "Blog created successfully", 
        _id: result.insertedId,
        ...blogData 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Error creating blog" },
      { status: 500 }
    );
  }
}
