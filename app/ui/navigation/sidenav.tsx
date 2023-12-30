"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import TropLogo from "../trop-logo";

const SideNavbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'about',
      name: 'about'
    },
    {
      id: 2,
      link: "projects",
      name: 'projects'
    },
    {
      id: 3,
      link: "install",
      name: 'install'
    },
    {
      id: 4,
      link: "services",
      name: 'Services'
    },
    {
      id: 5,
      link: "contact",
      name: 'contact'
    },
   
  ];
  

  return (
    <div id="trop-nav" className="flex justify-between items-center w-full h-20 px-4 text-white bg-black nav z-20">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h3 className="text-3xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
           
            rel="noreferrer"
          >
            <TropLogo />
          </a>
        </h3>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
   
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-30 text-gray-500 md:hidden"
      >
         
        
        {nav ? 
       
          <FaTimes size={30} />
           :<FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-20">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4  cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideNavbar;