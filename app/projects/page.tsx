"use client";

import Image from 'next/image';
import PhotoAlbum from 'react-photo-album';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        setError('Failed to load images');
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white-100 min-h-screen">
      <header className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h1 className="text-3xl font-bold text-left">Projects</h1>
      </header>

      <section className="max-w-4xl mx-auto bg-white p-8">
        <h3 className="text-xl font-medium text-black-800 mb-20">Explore our current and previous projects</h3>

        <PhotoAlbum
          layout="rows"
          photos={photos.map((photo) => ({
            ...photo,
            src: (
              <Image
                src={photo.src}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL || ""}
                alt="Project image"
                loading="lazy"
              />
            ),
          }))}
        />

        <p className="mt-8 mb-4 text-center"><strong>Transform Your Landscape Today!</strong></p>
        <p>Contact us to schedule a consultation and experience the difference our premium maintenance services can make. Let us bring out the full potential of your outdoor environment, ensuring it remains a source of pride and joy year-round.</p>
      </section>
    </div>
  );
}
