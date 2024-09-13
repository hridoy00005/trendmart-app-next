import { slide1, slide2, slide3, slide4 } from "@/public/images/heroslider";
import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

export default function HeroSlider() {
  return (
    <Carousel autoplay>
      <div className="rounded-se-lg sm:rounded-lg">
        <Image
          src={slide1}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
          alt="slide1"
        />
      </div>
      <div>
        <Image
          src={slide2}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
          alt="slide2"
        />
      </div>
      <div>
        <Image
          src={slide3}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
          alt="slide3"
        />
      </div>
      <div>
        <Image
          src={slide4}
          className="h-44 sm:h-60 w-full text-white bg-[#1e1e1e] flex justify-center items-center rounded-lg"
          alt="slide4"
        />
      </div>
    </Carousel>
  );
}
