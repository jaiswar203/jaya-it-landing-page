import { notFound } from "next/navigation";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { Metadata } from "next";
import { cache } from "react";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  summary?: string;
  tags?: string[];
}

const getBlog = cache(async (id: string) => {
  try {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    const { db } = await connectToDatabase();
    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) });
    return blog as Blog | null;
  } catch (error) {
    console.error("Error fetching blog from MongoDB:", error);
    return null;
  }
});

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const blog = await getBlog(params.id);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const keywords = [
    ...(blog.tags || []),
    blog.title,
    blog.author,
    "Jaya IT",
    ...blog.title.split(" "),
  ];

  return {
    title: blog.title,
    description: blog.summary || blog.content.substring(0, 160),
    keywords: keywords,
    openGraph: {
      title: blog.title,
      description: blog.summary || blog.content.substring(0, 160),
      images: blog.image ? [blog.image] : [],
    },
  };
}

const BlogPostPage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlog(params.id);

  if (!blog) {
    notFound();
  }

  // Define components object with proper Tailwind typography
  const markdownComponents: Components = {
    h1: ({ ...props }) => <h1 className="text-4xl md:text-5xl font-extrabold mt-16 mb-8 text-gray-900 dark:text-gray-100 tracking-tight" {...props} />,
    h2: ({ ...props }) => <h2 className="text-3xl font-bold mt-12 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3 text-gray-900 dark:text-gray-100" {...props} />,
    h3: ({ ...props }) => <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-900 dark:text-gray-100" {...props} />,
    h4: ({ ...props }) => <h4 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100" {...props} />,
    h5: ({ ...props }) => <h5 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100" {...props} />,
    h6: ({ ...props }) => <h6 className="text-base font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100" {...props} />,
    p: ({ ...props }) => <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base" {...props} />,
    a: ({ ...props }) => <a className="text-violet-600 dark:text-violet-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 underline decoration-violet-300 dark:decoration-violet-700 hover:decoration-fuchsia-400 dark:hover:decoration-fuchsia-500 underline-offset-2 transition-colors font-medium" {...props} />,
    ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 pl-5 space-y-2 text-gray-700 dark:text-gray-300" {...props} />,
    ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 pl-5 space-y-2 text-gray-700 dark:text-gray-300" {...props} />,
    li: ({ ...props }) => <li className="marker:text-violet-500 dark:marker:text-violet-400" {...props} />,
    strong: ({ ...props }) => <strong className="font-semibold text-gray-800 dark:text-gray-200" {...props} />,
    em: ({ ...props }) => <em className="italic text-gray-700 dark:text-gray-300" {...props} />,
    blockquote: ({ ...props }) => <blockquote className="border-l-4 border-violet-500 dark:border-l-violet-400 pl-4 py-2 my-6 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/30 rounded-r-md" {...props} />,
    code: ({ ...props }) => <code className="bg-gray-100 dark:bg-gray-800 text-fuchsia-600 dark:text-fuchsia-400 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
    pre: ({ ...props }) => <pre className="bg-gray-800 dark:bg-gray-900 rounded-md p-4 my-6 overflow-x-auto text-sm shadow-md text-gray-200 dark:text-gray-300" {...props} />,
    hr: ({ ...props }) => <hr className="my-8 border-t border-gray-200 dark:border-gray-700" {...props} />,
    table: ({ ...props }) => <table className="w-full my-6 border-collapse border border-gray-200 dark:border-gray-700 shadow-sm" {...props} />,
    thead: ({ ...props }) => <thead className="bg-gray-50 dark:bg-gray-800/50" {...props} />,
    tbody: ({ ...props }) => <tbody {...props} />,
    tr: ({ ...props }) => <tr className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50/50 dark:even:bg-gray-800/20" {...props} />,
    th: ({ ...props }) => <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300" {...props} />,
    td: ({ ...props }) => <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300" {...props} />,
    img: ({ ...props }) => (
      <span className="flex justify-center my-8">
        <Image
          src={props.src as string}
          alt={props.alt || ""}
          width={800}
          height={450}
          className="rounded-lg shadow-md border dark:border-gray-700"
        />
      </span>
    ),
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 py-8 md:px-6 lg:py-16">
        <article className="max-w-4xl mx-auto">
          {blog.image && (
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center text-gray-900 dark:text-gray-100">
            {blog.title}
          </h1>
          <div className="text-center text-muted-foreground mb-8">
            <span className="text-gray-600 dark:text-gray-400">By {blog.author}</span>{" "}
            <span className="text-gray-500 dark:text-gray-500">|</span>{" "}
            <span className="text-gray-600 dark:text-gray-400">{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-headings:font-bold prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-violet-600 dark:prose-a:text-violet-400 hover:prose-a:text-fuchsia-600 dark:hover:prose-a:text-fuchsia-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:text-fuchsia-600 dark:prose-code:text-fuchsia-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900 prose-pre:text-gray-200 dark:prose-pre:text-gray-300 prose-strong:text-gray-800 dark:prose-strong:text-gray-200 prose-blockquote:border-l-violet-500 dark:prose-blockquote:border-l-violet-400 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-li:marker:text-violet-500 dark:prose-li:marker:text-violet-400">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={markdownComponents}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;
