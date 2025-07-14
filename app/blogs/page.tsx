"use client";

import React, { useEffect, useState } from "react";
import { Blog } from "@/lib/blog";
import { BlogCard, BlogCardSkeleton } from "@/components/blog/BlogCard";
import Link from "next/link";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<(Blog & { _id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/blog`, {
          cache: "no-store",
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }
        
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="text-center text-red-500">
          <p>Error loading blogs: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? // Show skeleton cards while loading
              Array.from({ length: 6 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))
            : // Show actual blog cards when loaded
              blogs.map((blog) => (
                <Link
                  href={`/blogs/${blog._id}`}
                  key={blog._id}
                  className="cursor-pointer"
                >
                  <BlogCard blog={blog} />
                </Link>
              ))}
        </div>
        
        {!loading && blogs.length === 0 && (
          <div className="text-center text-muted-foreground">
            <p>No blogs found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogsPage;
