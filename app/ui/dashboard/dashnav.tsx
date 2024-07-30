import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './dash-links';
import DashLinks from './dash-links';
import TropLogo from '../trop-logo';
import { open_sans } from '../fonts';
import Image from 'next/image'
import { signOut } from '@/auth';



export default function DashNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
     
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
        {/*  <TropLogo /> */}<div
      className={`${open_sans.className} flex flex-row items-center leading-none text-white`}
    >
        <Image
              src="/avatar.png"
              width={50}
              height={50}
              className="md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}

      <p className="text-[18px] hidden md:block">Tropical Landscaping</p>
    </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <DashLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form action={async () => {
          'use server';
          await signOut();
        }}>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}