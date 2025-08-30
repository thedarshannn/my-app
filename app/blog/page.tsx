import React from "react";
import { SampleBlogs } from "@/config/sampleblogs";

interface Blog {
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
}

const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          ✍️ My Thoughts
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of things I’ve been writing, learning, and exploring.
        </p>
      </div>

      {/* Blog List */}
      <div className="space-y-16">
        {blogs.map((blog, index) => (
          <div
            key={blog.slug}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Blog Image */}
            <div className="lg:w-1/2 w-full">
              <div className="w-full aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Blog Content */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-4xl font-bold mb-3 leading-snug">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-base mb-6">{blog.description}</p>
              <a
                href={`/blogpost/${blog.slug}`}
                className="text-indigo-600 hover:text-indigo-800 font-semibold text-lg inline-flex items-center group"
              >
                Read More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BlogPage() {
  return <BlogList blogs={SampleBlogs} />;
}
