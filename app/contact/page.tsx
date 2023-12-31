import Link from "next/link";
import { lusitana, open_sans } from "../ui/fonts";


export default function Page() {
  return (
    
     
      <div className="bg-white-100 min-h-screen">
      <header className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h1 className="text-3xl font-bold text-left">Contact Us</h1>
      </header>

      <section className="max-w-4xl mx-auto mt-8 bg-white p-8 ">
        <h4 className="text-xl text-black-800 mb-6 text-center">Tropical Landscaping offers a variety of services, including: </h4>

         

        <p className="mt-8 mb-4 text-center" >
          <strong>Transform Your Landscape Today!</strong>
        </p>
        <p className="mt-8 mb-4 mx-30">Contact us to schedule a consultation and experience the difference 
        our premium maintenance services can make. Let us bring out the full potential of your outdoor environment, ensuring it remains a source of pride and joy year-round.</p>

        <a href="#contact" className="mt-6 inline-block px-4 py-2 bg-green-700 text-white rounded-md transition duration-300 hover:bg-green-600">
          Contact Us
        </a>
      </section>
    </div>       
  );
}
