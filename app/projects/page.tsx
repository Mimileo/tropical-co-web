"use client";

import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

type Photo = {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export default function ProjectsPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch('/api/images');
      if (!response.ok) throw new Error('Network response was not ok');
      const data: Photo[] = await response.json();
      setPhotos(data);
    } catch (error) {
      setError('Failed to load images');
      console.error('Failed to fetch images:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white min-h-screen">
      <header className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h1 className="text-3xl font-bold text-left">Projects</h1>
      </header>

      <section className="max-w-4xl mx-auto bg-white p-4">
        <h3 className="text-xl font-medium text-black mb-8">
          Explore our current and previous projects
        </h3>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.src} className="relative w-full h-64">
              <Image
                src={photo.src}
                alt="Project Image"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 mb-4 text-center">
          <strong>Transform Your Landscape Today!</strong>
        </p>
        <p className="text-center">
          Contact us to schedule a consultation and experience the difference our premium maintenance services can make. Let us bring out the full potential of your outdoor environment, ensuring it remains a source of pride and joy year-round.
        </p>
      </section>
    </div>
  );
}
