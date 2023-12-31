import Link from "next/link";
import { lusitana, open_sans } from "../ui/fonts";
import ContactForm from "../ui/contact-form";


export default function Page() {
  return (
    
     
      <div className="bg-white-100 min-h-screen">
      <header className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h1 className="text-3xl font-bold text-left">Contact Us</h1>
      </header>

      <section className="max-w-4xl mx-auto mt-8 bg-white p-8 ">
        <h4 className="text-xl text-black-800 mb-6 text-center">Please feel free to reach out: </h4>

         
            <ContactForm />
       
       
       

        
      </section>
    </div>       
  );
}
