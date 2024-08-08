import Link from "next/link";
import { lusitana, open_sans } from "../ui/fonts";
import SideNavbar from "../ui/navigation/main-nav";
import TropLogo from "../ui/trop-logo";
import Image from 'next/image';


export default function Page() {
  return (
    
     <main className="flex min-h-screen flex-col p-0">
      
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-white-500 p-0 md:h-5">
        {/* spacer */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            
          <Image
              src="/avatarborder.png"
              width={500}
              height={500}
              alt="Screenshot of the dashboard project showing mobile version"
             
            />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <div className="mb-3 flex-col space-x-12">
          <p className={`${open_sans.className} text-xl text-gray-800 md:text-xl md:leading-normal mb-20`}>
            <strong>Tropical Landscaping</strong> is a small buisness located in Salinas, California, 
            the salad bowl of the world! With over 10 plus years of providng services to the tricounty, you
             can rely on the Tropical Landscaping 
            team from maintenance to a complete garden rennovation.


          </p>

          <p className={`${open_sans.className} text-xl text-gray-800 md:text-xl md:leading-normal`}>
          <strong>Call us at <a className="font-bold text-blue-600 underline dark:text-blue-500 hover:no-underline" href={"tel:8316634616"}>(831) 663 - 4616</a> for a consultation! </strong>
          </p>
          
        </div>
        
        <div className="mb-3 flex space-x-4">
          
        </div>
            
    
        </div>
      </div>
      
    </main>
          
       
  );
}
