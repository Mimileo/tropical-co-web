import Link from "next/link";
import { lusitana, open_sans } from "../ui/fonts";
import SideNavbar from "../ui/navigation/sidenav";
import TropLogo from "../ui/trop-logo";
import Image from 'next/image';
import ListLayout from "../ui/list/list-layout";


export default function Page() {
  return (
    
     
      <div className="bg-white-100 min-h-screen">
      <header className="bg-white-700 text-black text-center m-8">
        <h1 className="text-3xl font-bold text-left ml-40">Maintenance Services</h1>
      </header>

      <section className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h4 className="text-xl text-black-800 mb-6">Why Choose Tropical Landscaping Company for Your Maintenance Needs?</h4>

        <ul className="disc-none mx-3">
          <li className="mb-4 bg-gray-100 p-5 rounded">
            <strong>Expert Team:</strong> Our skilled and experienced team is dedicated to maintaining the beauty and health of your landscape.
          </li>
          <li className="mb-4 bg-gray-100 p-5 rounded">
            <strong>Cutting-Edge Technology:</strong> We leverage the latest technology for efficient and precise maintenance services.
          </li>
          <li className="mb-4 bg-gray-100 p-5 rounded">
            <strong>Quality Assurance:</strong> Every service is executed with attention to detail, ensuring the longevity and vibrancy of your outdoor space.
          </li>
        </ul>

        <p className="mt-8 mb-4 text-center" ><strong>Transform Your Landscape Today!</strong></p>
        <p>Contact us to schedule a consultation and experience the difference our premium maintenance services can make. Let us bring out the full potential of your outdoor environment, ensuring it remains a source of pride and joy year-round.</p>

        <a href="#contact" className="mt-6 inline-block px-4 py-2 bg-green-700 text-white rounded-md transition duration-300 hover:bg-green-600">
          Contact Us
        </a>
      </section>
    </div>
             
       
         
       
    
          
       
  );
}
