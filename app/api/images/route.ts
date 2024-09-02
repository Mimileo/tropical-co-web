import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { NextResponse } from 'next/server';

const imageCache: Record<string, any> = {};

export async function GET() {
  const cacheKey = 'images';

  // Serve from cache if available
  if (imageCache[cacheKey]) {
    return NextResponse.json(imageCache[cacheKey]);
  }

  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const filenames = await fs.readdir(imagesDirectory);

    const photos = await Promise.all(filenames.map(async (name) => {
      const imagePath = path.join(imagesDirectory, name);
      try {
        const image = sharp(imagePath);
        const size = 200;

        // Check if image format is supported
        const metadata = await image.metadata();
        if (metadata.format && ['jpeg', 'png', 'webp', 'tiff'].includes(metadata.format)) {
       
          return {
            src: `/images/${name}`,
            width: size,
            height: size,
            srcSet: [
              { src: `/images/${name}?w=${size / 2}&h=${size / 2}`, width: size / 2, height: size / 2 },
              { src: `/images/${name}?w=${size / 4}&h=${size / 4}`, width: size / 4, height: size / 4 },
            ],
            blurDataURL: `/images/${name}`, 
          };
        } else {
          console.warn(`Skipping unsupported format or undefined format: ${name}`);
          return null; 
        }
      } catch (error) {
        console.error(`Error processing image: ${name}`, error);
        return null; 
      }
    }));

    // Filter out null values 
    const filteredPhotos = photos.filter(photo => photo !== null);

    // Cache the result
    imageCache[cacheKey] = filteredPhotos;

    return NextResponse.json(filteredPhotos, {
      headers: {
        'Cache-Control': 'public, max-age=3600, immutable', // caching headers
      },
    });
  } catch (error) {
    console.error('Error retrieving images:', error);
    return new NextResponse(JSON.stringify({ error: 'Unable to retrieve images' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
