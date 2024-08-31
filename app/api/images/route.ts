import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const imageCache: Record<string, any> = {};

export async function GET() {
  const cacheKey = 'images';

  if (imageCache[cacheKey]) {
    return new Response(JSON.stringify(imageCache[cacheKey]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const filenames = await fs.readdir(imagesDirectory);

    const photos = await Promise.all(filenames.map(async (name) => {
      const imagePath = path.join(imagesDirectory, name);
      const image = sharp(imagePath);

      const size = 200;
      const metadata = await image.metadata();

      // Resize the image
      const resizedImageBuffer = await image.resize(size, size).toBuffer();
      // Optionally save the resized image to disk or use it in your app

      return {
        src: `/images/${name}?w=${size}&h=${size}`, 
        width: size,
        height: size,
        srcSet: [
          { src: `/images/${name}?w=${size / 2}&h=${size / 2}`, width: size / 2, height: size / 2 },
          { src: `/images/${name}?w=${size / 4}&h=${size / 4}`, width: size / 4, height: size / 4 },
        ],
        blurDataURL: `/images/${name}`, 
      };
    }));

    imageCache[cacheKey] = photos;

    return new Response(JSON.stringify(photos), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error retrieving images:', error);
    return new Response(JSON.stringify({ error: 'Unable to retrieve images' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
