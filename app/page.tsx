'use client';

import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { lusitana, open_sans } from '@/app/ui/fonts';
import { ScrollButton } from './ui/scrollbutton';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CSLBButton from './components/cslbButton';

export default function Page() {
  const { data: session, status } = useSession();
  const licensed = "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=859434"

 if (status === 'authenticated') {
   console.log("Auth: "+ status);
  }

  return (
    <main className="flex min-h-screen flex-col p-0">
      
      <div id="hero-image" className="relative w-full h-[800px] md:h-[100vh]">
        {/* Hero Image for Desktop */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/heroscape.png"
            fill
            className="object-cover"
            alt="Landscaping, Nursery in Salinas - Tropical Landscaping, Bay Area"
            priority
          />
        </div>

        {/* Hero Image for Mobile */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/heroscape.png"
            fill
            className="object-cover"
            alt="Landscaping, Nursery in Salinas - Tropical Landscaping, Bay Area"
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"

          />
        </div>

        {/* Overlay for better text readability (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Text or Content over the Image (Optional) */}
        <div className="absolute w-full lg:w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-2xl md:text-2xl font-bold sm:text-5xl lg:text-6xl mb-4 sm:mb-6 lg:mb-8">
            Your Landscaping Journey Begins Here
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10">
            Transforming spaces in the Bay Area since 2004
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
         <h1 className={`${open_sans.className} text-xl font-semibold text-gray-800 md:text-2xl md:leading-normal`}>Top-Quality Landscaping Services in the Bay Area</h1>
          <p className={`${open_sans.className} text-gray-800 md:text-md md:leading-normal`}>
            <strong>Tropical Landscaping Company</strong> - A landscaping company serving the Bay Area since 2004
          </p>
         
          <div className="mx-auto">
          <p className='mb-2'>Licensed under <strong>Contractors State License Board </strong></p>
           <CSLBButton licenseNumber="859434" href={licensed} />

          </div>
          <p className={`${open_sans.className} text-gray-800 md:text-md md:leading-normal`}>Transform your outdoor space with our expert landscaping services in Salinas Valley and the surrounding areas, including Santa Cruz, Monterey, and Santa Clara counties. At Tropical Landscaping, we are committed to delivering exceptional, professional service tailored to your unique landscape design needs.</p>
          {status === 'unauthenticated' ? (
              <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span>
              <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
           
          ) : (
           <Link
              href="/dashboard"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Dashboard</span>
              <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          )}
        </div>

        <div className="relative w-full h-full gap-4 md:flex-row flex-col">
          {/* Hero Image for Desktop */}
          <div className="hidden md:block relative w-full h-[800px]">
            <Image
              src="/garden.png"
              fill
              className="object-cover"
              alt="Landscaping, Backyard, Nursery in Salinas - Tropical Landscaping"
              priority
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"

            />
          </div>

          {/* Hero Image for Mobile */}
          <div className="block md:hidden relative w-full h-[620px]">
            <Image
              src="/garden.png"
              fill
              className="object-cover"
              alt="Landscaping, Nursery in Salinas - Tropical Landscaping"
              priority
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"

            />
          </div>

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
