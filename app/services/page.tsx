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
       
       <h1 className="font-bold mt-8 mb-4 text-center">Enhance Your Home’s Value with Expert Landscaping</h1>

        <p>Did you know that professional landscaping can increase your home’s resale value by 15-20%? According to <a href="https://www.bankrate.com/homeownership/landscaping-increase-home-value/#:~:text=Landscaping%20can%20increase%20a%20home's%20resale%20value%20by%2015%2D20,of%20your%20home's%20current%20value." target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-300">Bankrate</a>, a well-maintained landscape significantly boosts your property’s curb appeal and overall worth.</p>
        <p className="mt-8 mb-4 mx-30">
        The Benefits of Choosing Tropical Landscaping
        Balancing work, family, and social commitments can make it difficult to maintain your landscape on your own. Let our professional landscapers take care of your outdoor space, ensuring it looks its best all year round. We pride ourselves on providing reliable, consistent service that enhances the beauty and value of your home.
        </p>
        <p className="mt-8 mb-4 mx-30">
        Get Started Today!
        If you're seeking top-tier landscaping services in Salinas, CA, look no further. Contact us today or fill out our FREE quote form, and a professional landscaper will get back to you promptly. Let us help you create the outdoor space you've always dreamed of!
        </p>
      </section>
    </div>
             
       
         
       
    
          
       
  );
}
