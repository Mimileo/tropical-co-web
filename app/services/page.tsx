import Link from "next/link";
import { lusitana, open_sans } from "../ui/fonts";
import SideNavbar from "../ui/navigation/main-nav";
import TropLogo from "../ui/trop-logo";
import Image from 'next/image';
import ListLayout from "../ui/list/list-layout";
import ServiceList from "../ui/list/service-list";


export default function Page() {
  return (
    
     
      <div className="bg-white-100 min-h-screen">
      <header className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h1 className="text-3xl font-bold text-left">Our Landscaping Services</h1>
      </header>

      <section className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h2 className="font-bold mb-6 text-center">Tropical Landscaping offers a variety of services, including: </h2>

           <div className="text-center"> 
            <ServiceList /> 
           </div>

        <h3 className="font-bold mt-8 mb-4 text-center">
        Whether it is the backyard, front yard, or garden, our expert landscaping services specialize in creating stunning backyard designs that enhance your outdoor living space.
        </h3>
        <p className="mt-8 mb-4 mx-30">Contact us to schedule a consultation and experience the difference our premium maintenance services can make. Let us bring out the full potential of your outdoor environment, ensuring it remains a source of pride and joy year-round.</p>

      </section>
    </div>
             
       
         
       
    
          
       
  );
}
