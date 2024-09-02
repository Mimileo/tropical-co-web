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
      try {
        const image = sharp(imagePath);
        const size = 200;

        // Check if image format is supported by sharp
        const metadata = await image.metadata();
        if (!metadata.format || !['jpeg', 'png', 'webp', 'tiff'].includes(metadata.format)) {
          console.warn(`Skipping unsupported format: ${name}`);
          return null; // Skip unsupported format
        }

      
        if (metadata.width === undefined || metadata.height === undefined) {
          console.warn(`Skipping image with missing metadata dimensions: ${name}`);
          return null; 
        }

        // Resize the image
        const resizedImageBuffer = await image.resize(size, size).toBuffer();

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
      } catch (error) {
        console.error(`Error processing image: ${name}`, error);
        return null; 
      }
    }));

    // Filter out any null values from unsupported images
    const filteredPhotos = photos.filter(photo => photo !== null);

    imageCache[cacheKey] = filteredPhotos;

    return new Response(JSON.stringify(filteredPhotos), {
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
