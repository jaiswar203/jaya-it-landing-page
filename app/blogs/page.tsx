import React from "react";
import { Blog } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.statusText}`);
  }
  return res.json();
}

const BlogsPage = async () => {
  const blogs: (Blog & { _id: string })[] = await getBlogs();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              href={`/blogs/${blog._id}`}
              key={blog._id}
              className="cursor-pointer"
            >
              <BlogCard key={blog._id} blog={blog} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
