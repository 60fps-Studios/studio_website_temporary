"use client";

import { useEffect } from "react";
import Image from "next/image";
import Client01 from "@/public/clients/appletv.png";
import Client02 from "@/public/clients/frozencone.jpg";
import Client03 from "@/public/clients/league.png";
import Client04 from "@/public/clients/marvel.png";
import Client05 from "@/public/clients/mercedes.png";
import Client06 from "@/public/clients/outpost.jpg";
import Client07 from "@/public/clients/toho.svg";
import Client08 from "@/public/clients/up.png";
import Client09 from "@/public/clients/volvo.png";
import Client10 from "@/public/clients/carbexLogo.jpg";
import Client11 from "@/public/clients/saurja.png";
import Client12 from "@/public/clients/urjakart.png";

// Import Swiper
import Swiper, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay]);

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section className="bg-black">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-9xl  text-center pb-12 md:pb-16">
          <h2 className="font-bold lg:text-6xl md:text-5xl text-3xl text-gray-100 font-poppins">
            Trusting by leading brands, including:
          </h2>
        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900">
          <div className="swiper-wrapper !ease-linear select-none">
            {/* Carousel items */}
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client01}
                alt="Client 01"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client02}
                alt="Client 02"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client03}
                alt="Client 03"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client04}
                alt="Client 04"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client05}
                alt="Client 05"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client06}
                alt="Client 06"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client07}
                alt="Client 07"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client08}
                alt="Client 08"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client09}
                alt="Client 09"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client10}
                alt="Client 10"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl"
                src={Client11}
                alt="Client 11"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out h-full w-full overflow-hidden object-cover rounded-2xl h-full w-full overflow-hidden"
                src={Client12}
                alt="Client 12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
