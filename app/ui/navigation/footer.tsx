import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Link href={"https://www.yelp.com/biz/tropical-landscaping-salinas"} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Tropical Landscaping</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
         <a class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href="mailto:tropicallandscaping68@gmail.com">tropicallandscaping68@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}