import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
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
                  sizes="(max-width: 768px) 100vw, 800px"
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

              <div className="relative group mt-4 sm:mt-0">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:text-gray-800">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  <span>Paylaş</span>
                  <svg
                    className="w-4 h-4 transform group-hover:rotate-180 group-focus-within:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-10 sm:group-hover:visible sm:group-hover:opacity-100 focus-within:opacity-100 focus-within:visible">
                  <div className="py-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `https://www.kombiservisiordu.com/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-[#1877F2] mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      <span className="text-gray-700">Facebook</span>
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `https://www.kombiservisiordu.com/blog/${post.slug}`
                      )}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-800 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                      <span className="text-gray-700">X (Twitter)</span>
                    </a>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `${post.title} - https://www.kombiservisiordu.com/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-[#25D366] mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      <span className="text-gray-700">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
