import Link from "next/link";
import { ContactForm } from "../ui/contact-form";



export default function Page() {
  return (
    
     
      <div className="bg-white-100 min-h-screen">
      <header className="max-w-4xl mx-auto mt-8 bg-white p-8">
        <h1 className="text-3xl font-bold text-left">Contact Us</h1>
      </header>

      <section className="max-w-4xl mx-auto mt-8 bg-white p-8 ">
      <h2 className="text-xl font-semibold mb-4 mx auto text-center">Contact us for inquiries or consultation!</h2>


         
      <ContactForm />
       
       
       

        
      </section>
    </div>       
  );
}
