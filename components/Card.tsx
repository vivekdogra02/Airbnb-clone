import Image from "next/image";
import React from "react";

function Card({ img, location, distance }: any) {
  return (
    <div
      className="flex items-center m-2 space-x-4 
    rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
    transform duration-200 ease-out"
    >
      {/* Left */}
      <div className="relative h-16 w-16 ">
        <Image src={img} fill className="rounded-lg" alt="Card Img" />
      </div>
      {/* Right */}
      <div className="">
        <h2 className="">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default Card;
