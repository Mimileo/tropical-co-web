import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana, open_sans } from '@/app/ui/fonts';
import Image from 'next/image';

// Base64-encoded tiny image placeholder
const placeholderBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMEwgNTAgMEwgNTAgNTAgMCAwIEwgMCAwIi8+PC9zdmc+"; // Example of Base64-encoded placeholder image

export default function TropLogo() {
  return (
    <div
      className={`${open_sans.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/vector.svg" // Main image
        width={50}
        height={50}
        className="md:block"
        alt="Tropical Landscaping Logo"
        placeholder="blur"
        blurDataURL={placeholderBase64} // Base64 placeholder
        priority // Load the image earlier if it's critical
      />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[18px] hidden md:block">Tropical Landscaping</p>
    </div>
  );
}
