import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3BottomRightIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

function Header({ placeholder }: any) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState<number>(1);
  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges?.selection?.startDate);
    setEndDate(ranges?.selection?.endDate);
  };

  const selectionRange: any = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  // console.log(selectionRange);
  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left section */}

      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e?.target?.value)}
          type="text"
          className="flex-grow ml-2 pl-5 bg-tranparent outline-none
          text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeholder || "Start your search..."}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guest
            </h2>
            <UsersIcon className="h-5" />

            <input
              type="number"
              name=""
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              id=""
              value={noOfGuests}
              onChange={(e: any) => setNoOfGuests(e?.target?.value)}
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
