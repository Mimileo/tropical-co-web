
import type { MetadataRoute } from 'next';
// do blog and posts

export default function sitemap(): MetadataRoute.Sitemap {


  const URL = "https://www.tropicallandscaping.tech";
 

  const routes = ["", "/about", "/projects","/install", "/services", "/contact"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes];
}