import Link from "next/link";
import { lusitana, open_sans } from "../ui/fonts";
import SideNavbar from "../ui/navigation/sidenav";
import TropLogo from "../ui/trop-logo";
import Image from 'next/image';
import ListLayout from "../ui/list/list-layout";

import PhotoAlbum from "react-photo-album";
import React, { useState } from "react";


const photos = [
  {
    src: "/images/image1.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image1.jpg", width: 400, height: 300 },
      { src: "/images/image1.jpg", width: 200, height: 150 },
    ],
  },
  {
    src: "/images/image2.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image2.jpg", width: 400, height: 300 },
      { src: "/images/image2.jpg", width: 200, height: 150 },
    ],
  },
  {
    src: "/images/image3.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image3.jpg", width: 400, height: 300 },
      { src: "/images/image3.jpg", width: 200, height: 150 },
    ],
  },
  {
    src: "/images/image4.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image4.jpg", width: 400, height: 300 },
      { src: "/images/image4.jpg", width: 200, height: 150 },
    ],
  },
 {
    src: "/images/image5.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image5.jpg", width: 400, height: 300 },
      { src: "/images/image5.jpg", width: 200, height: 150 },
    ],
  },
   {
    src: "/images/image6.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image6.jpg", width: 400, height: 300 },
      { src: "/images/image6.jpg", width: 200, height: 150 },
    ],
  },
   {
    src: "/images/image7.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image7.jpg", width: 400, height: 300 },
      { src: "/images/image7.jpg", width: 200, height: 150 },
    ],
  },
   {
    src: "/images/image8.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/images/image8.jpg", width: 400, height: 300 },
      { src: "/images/image8.jpg", width: 200, height: 150 },
    ],
  },
];



export default function Page() {
  return (
    
     
      <div className="bg-white-100 min-h-screen">
        <header className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h1 className="text-3xl font-bold text-left">Projects</h1>
      </header>

      <section className="max-w-4xl mx-auto bg-white p-8">
        <h3 className="text-xl font-medium text-black-800 mb-20">Explore our current and previous projects</h3>

        <PhotoAlbum layout="rows" photos={photos} />

        <p className="mt-8 mb-4 text-center" ><strong>Transform Your Landscape Today!</strong></p>
        <p>Contact us to schedule a consultation and experience the difference our premium maintenance services can make. Let us bring out the full potential of your outdoor environment, ensuring it remains a source of pride and joy year-round.</p>

      
      </section>
    </div>
             
       
         
       
    
          
       
  );
}
