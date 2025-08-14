"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { X, Plus, Save, ArrowLeft } from "lucide-react";
import { Blog, CreateBlogData } from "@/lib/blog";
import MarkdownEditor from "./MarkdownEditor";

interface BlogFormProps {
  blog?: Blog;
  mode: "create" | "edit";
}

const BlogForm: React.FC<BlogFormProps> = ({ blog, mode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CreateBlogData>({
    title: blog?.title || "",
    image: blog?.image || "",
    category: blog?.category || "",
    description: blog?.description || "",
    author: blog?.author || "",
    authorImage: blog?.authorImage || "",
    authorRole: blog?.authorRole || "",
    readTime: blog?.readTime || "",
    date: blog?.date || new Date().toISOString().split("T")[0],
    tags: blog?.tags || [],
    content: blog?.content || "",
  });
  const [newTag, setNewTag] = useState("");

  const handleInputChange = (
    field: keyof CreateBlogData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = mode === "create" ? "/api/blog" : `/api/blog/${blog?._id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save blog");
      }

      toast.success(
        mode === "create"
          ? "Blog created successfully!"
          : "Blog updated successfully!"
      );

      if (mode === "create") {
        router.push("/admin/dashboard");
      } else {
        router.push(`/blogs/${blog?._id}`);
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      toast.error("Failed to save blog. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">
          {mode === "create" ? "Create New Blog" : "Edit Blog"}
        </h1>
        <p className="text-gray-600 mt-2">
          {mode === "create"
            ? "Fill in the details below to create a new blog post."
            : "Update the blog post details below."}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Basic Information and Author Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter blog title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    placeholder="e.g., Technology, Business, Security"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Brief description of the blog post"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image">Featured Image URL *</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="readTime">Read Time *</Label>
                  <Input
                    id="readTime"
                    value={formData.readTime}
                    onChange={(e) =>
                      handleInputChange("readTime", e.target.value)
                    }
                    placeholder="e.g., 5 min read"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="date">Publish Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Author Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="author">Author Name *</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) =>
                      handleInputChange("author", e.target.value)
                    }
                    placeholder="Author's full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="authorImage">Author Image URL</Label>
                  <Input
                    id="authorImage"
                    value={formData.authorImage}
                    onChange={(e) =>
                      handleInputChange("authorImage", e.target.value)
                    }
                    placeholder="https://example.com/author.jpg"
                  />
                </div>

                <div>
                  <Label htmlFor="authorRole">Author Role</Label>
                  <Input
                    id="authorRole"
                    value={formData.authorRole}
                    onChange={(e) =>
                      handleInputChange("authorRole", e.target.value)
                    }
                    placeholder="e.g., Senior Developer, Security Expert"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tags Section */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add a tag"
                />
                <Button
                  type="button"
                  onClick={addTag}
                  variant="outline"
                  size="sm"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="gap-2">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-red-500"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Full Width Blog Content Editor */}
          <Card>
            <CardHeader>
              <CardTitle>Blog Content *</CardTitle>
            </CardHeader>
            <CardContent>
              <MarkdownEditor
                content={formData.content}
                onChange={(content) => handleInputChange("content", content)}
                placeholder="Start writing your blog content..."
              />
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading} className="min-w-[120px]">
            {isLoading ? (
              "Saving..."
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                {mode === "create" ? "Create Blog" : "Update Blog"}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
