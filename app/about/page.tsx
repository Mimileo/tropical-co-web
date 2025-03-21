import Link from "next/link";
import { lusitana, open_sans } from "../ui/fonts";
import SideNavbar from "../ui/navigation/main-nav";
import TropLogo from "../ui/trop-logo";
import Image from 'next/image';
import CSLBButton from "../components/cslbButton";


export default function Page() {

  const licensed = "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=859434"
  return (
    
     <main className="flex min-h-screen flex-col p-0">
      
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-white-500 p-0 md:h-5">
        {/* spacer */}
      </div>
      <div className="mt-2 flex grow flex-col gap-2 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            
          <Image
              src="/avatarborder.png"
              width={500}
              height={500}
              alt="Tropical Nursery and Lanscaping Logo"
             
            />
        </div>
        <div className="flex items-center justify-center p-3 md:w-3/5 md:px-4 md:py-12">
        <div className="mb-3 flex flex-col space-y-10 px-10 md:px-20">          
           
              

            
            <h1 className={`${open_sans.className} font-black text-xl text-gray-800 md:text-xl`}>
            Bringing Top Landscaping to the Bay Area!</h1>

            <h1 className={`${open_sans.className} font-extrabold text-xl text-gray-800 md:text-xl md:leading-normal mb-20`}>
            Quailty and industry regulations are our priority! We are licensed under the Contractors State License Board!

            </h1>
             
         
           <div className="mx-auto">
           <CSLBButton licenseNumber="859434" href={licensed} />

             </div>

          <p className={`${open_sans.className} text-xl text-gray-800 md:text-xl  mb-20`}>

            <strong>Tropical Landscaping</strong> is a small buisness located in Salinas, California, 
            the salad bowl of the world! With over 10 plus years of providng services to the tricounty, you
             can rely on the Tropical Landscaping 
            team from maintenance to a complete garden rennovation.


          </p>

          <p className={`${open_sans.className} text-xl text-gray-800 md:text-xl md:leading-normal mb-20`}>
            We believe in collaborating closely with our clients to turn their dream landscapes into reality. Your vision and goals are always our top priority as we develop and execute a landscape design that reflects your style and preferences. 
            Our dedication to client satisfaction sets us apart as the go-to landscapers in Salinas, CA.</p>

    
          <p className={`${open_sans.className} text-xl text-gray-800 md:text-xl md:leading-normal mx-auto`}>
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
