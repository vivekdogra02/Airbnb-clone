import Image from "next/image";
import React from "react";

function MediumCard({ img, title }: any) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} fill className="rounded-xl" alt="Medium Card Img" />
      </div>
      <h1 className="text-2xl mt-3">{title}</h1>
    </div>
  );
}

export default MediumCard;
