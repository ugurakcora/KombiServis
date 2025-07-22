import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.kombiservisiordu.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
