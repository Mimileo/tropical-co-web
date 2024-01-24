import TropLogo from '@/app/ui/trop-logo';
import SideNav from '@/app/ui/navigation/sidenav';

import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';

import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { Metadata } from 'next'

import { lusitana, open_sans } from '@/app/ui/fonts';
import Image from 'next/image';
import SideNavbar from '@/app/ui/navigation/sidenav';
import { ScrollButton } from './ui/scrollbutton';


export default function Page() {
 
  return (
    
    <main className="flex min-h-screen flex-col p-0">
      
      <div  id="hero-image"  className="flex shrink-0 items-end rounded-lg bg-white-500 z-10" >
        {/* <TropLogo /> */}
      </div>

     

      
       <div className="relative w-full mx-auto">
          {/* Hero Image for Desktop */}
          <Image
            src="/heroscape.png"
            layout="responsive"
            width={1200}
            height={1200}
            className="hidden md:block h-auto max-w-full"
            alt="Hero Image for Desktop"
          />

          {/* Hero Image for Mobile */}
          <Image
            src="/heroscape.png"
            layout="responsive"
            width={560}
            height={620}
            className="block md:hidden h-auto max-w-full"
            alt="Hero Image for Mobile"
          />

          {/* Overlay for better text readability (Optional) */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>


          {/* Text or Content over the Image (Optional) */}
          <div className="absolute w-full lg:w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl  md:text-6xl font-bold sm:text-5xl lg:text-7xl mb-4 sm:mb-6 lg:mb-8">
            Your Landscaping Journey Begins Here
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10">
            Transforming spaces since 2004
          </p>

             {/* Explore More Button */}
            <div className="flex flex-col items-center mt-8">
              <ScrollButton targetId="section2">
                Explore More
                <ArrowDownIcon className="w-5 ml-2 block transform hover:scale-110 transition-transform duration-300" />
              </ScrollButton>
            </div>
                
         
          </div>

        
        </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row" id="section2">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
             <p className={`${open_sans.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Tropical Landscaping!</strong> A landscape company serving the Bay Area since 2004
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
       <div className="relative w-full h-full gap-4 md:flex-row flex-col">
          {/* Hero Image for Desktop */}
          <Image
            src="/heroscape.png"
            layout="responsive"
            width={1200}
            height={1200}
            className="hidden md:block h-auto max-w-full"
            alt="Hero Image for Desktop"
          />

          {/* Hero Image for Mobile */}
          <Image
            src="/heroscape.png"
            layout="responsive"
            width={560}
            height={620}
            className="block md:hidden h-auto max-w-full"
            alt="Hero Image for Mobile"
          />

          {/* Overlay for better text readability (Optional) */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>


          {/* Text or Content over the Image (Optional) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h6 className="text-xl md:text-xl font-bold">Breathtaking Scenic Landscapes</h6>
          </div>
        </div>
        </div>
    </main>
  );
}
