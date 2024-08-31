import Image from "next/image";
import React from "react";

const Title = ({ text, image }) => {
  return (
    <div className="flex mt-2 mb-4 font-normal tracking-wide">
      <Image src={image} width={32} height={32} className="mr-2 rounded-lg" alt="Ttrending Image" />
      <span className="text-2xl">{text}</span>
    </div>
  );
};

export default Title;
