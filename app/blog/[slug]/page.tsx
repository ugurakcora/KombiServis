import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Breadcrumb from "@/components/Breadcrumb";

// Blog yazısı için tip tanımlaması
type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  contentHtml: string;
};

// Tüm blog yazılarının sluglarını getir
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

// Metadata oluştur
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostData(params.slug);

  return {
    title: `${post.title} | Mert Teknik Blog`,
    description: post.excerpt,
  };
}

// Blog yazısını getir
async function getPostData(slug: string): Promise<BlogPost> {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Front matter'ı parse et
  const matterResult = matter(fileContents);

  // Markdown içeriğini HTML'e çevir
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Veriyi döndür
  return {
    slug,
    contentHtml,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    author: matterResult.data.author as string,
    category: matterResult.data.category as string,
    excerpt: matterResult.data.excerpt as string,
    image: matterResult.data.image as string,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  // Breadcrumb için öğeler
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <div className="mb-8">
              <div className="relative h-64 md:h-96 mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-sm text-primary-600 font-medium mr-4">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <span className="text-sm text-gray-500">
                  Yazar: {post.author}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
            </div>

            {/* Blog İçeriği */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </div>

            {/* Geri Dön & Paylaş */}
            <div className="mt-8 flex flex-wrap justify-between items-center">
              <Link
                href="/blog"
                className="flex items-center text-primary-600 hover:text-primary-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Tüm Blog Yazılarına Dön
              </Link>

              <div className="flex space-x-3 mt-4 sm:mt-0">
                <span className="text-gray-500">Paylaş:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://www.kombiservisiordu.com/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `https://www.kombiservisiordu.com/blog/${post.slug}`
                  )}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
