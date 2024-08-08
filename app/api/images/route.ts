import fs from 'fs/promises'; // Use fs/promises for async operations
import path from 'path';

// Define a cache object to store image data
const imageCache: Record<string, any> = {}; 

export async function GET() {
  const cacheKey = 'images';
  
  // Check if data is already cached
  if (imageCache[cacheKey]) {
    return new Response(JSON.stringify(imageCache[cacheKey]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const filenames = await fs.readdir(imagesDirectory); // Asynchronous read

    const photos = filenames.map((name) => ({
      src: `/images/${name}`,
      width: 800, // Adjust based on your images
      height: 600, // Adjust based on your images
      srcSet: [
        { src: `/images/${name}`, width: 400, height: 300 },
        { src: `/images/${name}`, width: 200, height: 150 },
      ],
      blurDataURL: `/images/${name}`, // Placeholder for dynamic blur (if needed)
    }));

    // Cache the result
    imageCache[cacheKey] = photos;

    return new Response(JSON.stringify(photos), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors (e.g., directory not found)
    return new Response(JSON.stringify({ error: 'Unable to retrieve images' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
