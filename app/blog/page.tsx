import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog | Mert Teknik",
  description:
    "Kombi bakımı, arızaları, enerji tasarrufu ve ısınma sistemleri hakkında faydalı bilgiler ve ipuçları.",
};

// Blog yazılarını markdown dosyalarından okuma fonksiyonu
function getBlogPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), "content/blog");
    if (!fs.existsSync(postsDirectory)) {
      console.warn("Blog dizini bulunamadı:", postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
      // Dosya adından slug oluştur
      const id = fileName.replace(/\.md$/, "");

      // Markdown dosyasını oku
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // gray-matter ile front matter'ı parse et
      const matterResult = matter(fileContents);

      // Veriyi id ile birlikte döndür
      return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        author: matterResult.data.author,
        category: matterResult.data.category,
        excerpt: matterResult.data.excerpt,
        image: matterResult.data.image,
      };
    });

    // Tarihe göre sırala
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Blog yazıları okunurken hata:", error);
    return [];
  }
}

export default function BlogPage() {
  // Statik olarak blog yazılarını getir
  const blogPosts = getBlogPosts();

  // Breadcrumb için öğeler
  const breadcrumbItems = [{ label: "Blog" }];

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Blog
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Kombi bakımı, arızalar, enerji tasarrufu ve ısınma sistemleri
            hakkında faydalı bilgiler ve ipuçları
          </p>

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary-600 font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Yazar: {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary-600 font-medium hover:text-primary-700"
                      >
                        Devamını Oku →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                Henüz blog yazısı bulunmuyor.
              </p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Daha fazla faydalı bilgi ve ipucu için bizi takip edin.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
