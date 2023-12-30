import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana, open_sans } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${open_sans.className} flex flex-row items-center leading-none text-white`}
    >
        <Image
              src="/vector.svg"
              width={50}
              height={50}
              className="md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}

      <p className="text-[18px] hidden md:block">Tropical Landscaping</p>
    </div>
  );
}
