import Link from "next/link";
import { FaYelp, FaLinkedin, } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import IconButton from "../icon-button";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <IconButton href="https://www.yelp.com/biz/tropical-landscaping-salinas" icon={FaYelp} colorClass="text-red-500" ariaLabel="Visit Tropical Landscaping Yelp page"/>
          <IconButton href="#" icon={FaLinkedin} colorClass="text-blue-500" ariaLabel="Visit Tropical Landscaping LinkedIn page" />
          <IconButton href="#" icon={GrInstagram} colorClass="text-pink-500" ariaLabel="Visit Tropical Landscaping Instagram page" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Tropical Landscaping</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
         <a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href="mailto:tropicallandscaping68@gmail.com">tropicallandscaping68@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}