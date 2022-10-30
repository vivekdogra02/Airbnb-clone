import Image from "next/image";
import React from "react";
import {
  Bars3BottomRightIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left section */}

      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Middle section - Search */}

      <div className="flex items-center py-2 md:border-2 rounded-full md:shadow-lg">
        <input
          type="text"
          className="flex-grow ml-2 pl-5 bg-tranparent outline-none
          text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search..."
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex 
        h-8 mx-auto md:mx-2
         bg-red-400 cursor-pointer text-white rounded-full p-2"
        />
      </div>

      {/* Right section */}

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3BottomRightIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
