"use client";

import Image from 'next/image';

const photos = [
  { src: '/images/image1-min.jpg', width: 600, height: 400 },
  { src: '/images/image2-min.jpg', width: 600, height: 400 },
  { src: '/images/image3-min.jpg', width: 600, height: 400 },
  { src: '/images/image4-min.jpg', width: 600, height: 400 },
  { src: '/images/image5-min.jpg', width: 600, height: 400 },
  { src: '/images/image6-min.jpg', width: 600, height: 400 },
  { src: '/images/image7-min.jpg', width: 600, height: 400 },
  { src: '/images/image8-min.jpg', width: 600, height: 400 },
];

export default function ProjectsPage() {
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
          {photos.map((photo, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={photo.src}
                alt={`Project Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
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
