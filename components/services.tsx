import Image from "next/image";
import Service01 from "@/public/images/service-01.jpg";
import Service02 from "@/public/images/service-02.jpg";
import Service03 from "@/public/images/service-03.jpg";
import Service04 from "@/public/images/service-04.jpg";
import Service05 from "@/public/images/service-05.jpg";
import Service06 from "@/public/images/service-06.jpg";
import Service07 from "@/public/images/service-07.jpg";
import Service08 from "@/public/images/service-08.jpg";
import Service09 from "@/public/images/service-09.jpg";
import Service10 from "@/public/images/service-10.jpg";
import Service11 from "@/public/images/service-11.jpg";
import Service12 from "@/public/images/service-12.jpg";
import Service13 from "@/public/images/service-13.jpg";
import Service14 from "@/public/images/service-14.jpg";
import Service15 from "@/public/images/service-15.jpg";

export default function Services() {
  return (
    <section className="bg-black ">
      <div className="max-w-8xl mx-auto ">
        <div className="py-12 md:py-20">
          <div className="relative">
            <div
              className="h-full flex flex-col  items-center overflow-hidden transition duration-700 ease-out px-4 sm:px-6  "
              data-aos="fade-up"
            >
              <div
                className="max-w-8xl mx-auto text-center pb-6 md:pb-16"
                data-aos="fade-up"
              >
                <h2 className="font-bold lg:text-6xl md:text-5xl text-3xl text-gray-100 font-poppins">
                  Scale your business with ready-to-buy services
                </h2>
              </div>
              {/* Image */}

              <div className="mb-4 ">
                <a className="relative block group overflow-hidden " href="#0">
                  <img
                    className=" group-hover:scale-110 transition duration-700 ease-out "
                    src="./services/CreativeServices.jpg"
                    alt="CreativeServices"
                  />
                  <div className=" absolute inset-0 group-hover:scale-110 transition duration-700 ease-out">
                    <div className="relative inset-0 flex flex-col justify-center items-center w-full h-full text-white bg-black/20">
                      <div className="text-3xl md:text-6xl font-bold m-4">
                        Creative Services
                      </div>
                      <div className="md:text-4xl italic font-medium md:mx-10 text-xl mx-12">
                        From captivating visuals to inspiring spaces, <br />
                        we bring your vision to life.
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mb-4 ">
                <a className="relative block group overflow-hidden " href="#0">
                  <img
                    className=" group-hover:scale-110 transition duration-700 ease-out "
                    src="./services/DigitalPresence.jpg"
                    alt="DigitalPresence"
                  />
                  <div className=" absolute inset-0 group-hover:scale-110 transition duration-700 ease-out">
                    <div className="relative inset-0 flex flex-col justify-center items-center w-full h-full  text-white bg-black/20">
                      <div className="text-3xl md:text-6xl font-bold m-4">
                        Digital Presence
                      </div>
                      <div className="md:text-4xl italic font-medium md:mx-10 text-xl mx-12">
                        Content & Design: The Perfect Blend for Online Success.
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mb-4 ">
                <a className="relative block group overflow-hidden " href="#0">
                  <img
                    className=" group-hover:scale-110 transition duration-700 ease-out "
                    src="./services/MarketingServices.jpg"
                    alt="Marketing Services"
                  />
                  <div className=" absolute inset-0 group-hover:scale-110 transition duration-700 ease-out">
                    <div className="relative inset-0 flex flex-col justify-center items-center w-full h-full  text-white bg-black/20 ">
                      <div className="text-3xl md:text-6xl font-bold m-4">
                        Marketing Services
                      </div>
                      <div className="md:text-4xl italic font-medium md:mx-10 text-xl mx-12">
                        From Feeds to Streets, We Spread Your Story:
                        <br /> Unleash the Power of Integrated Marketing
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mb-4 ">
                <a className="relative block group overflow-hidden " href="#0">
                  <img
                    className=" group-hover:scale-110 transition duration-700 ease-out "
                    src="./services/BrandDevelopment.jpg"
                    alt="BrandDevelopment"
                  />
                  <div className=" absolute inset-0 group-hover:scale-110 transition duration-700 ease-out">
                    <div className="relative inset-0 flex flex-col justify-center items-center w-full h-full  text-white bg-black/20">
                      <div className="text-3xl md:text-6xl font-bold m-4">
                        Brand Development
                      </div>
                      <div className="md:text-4xl italic font-medium md:mx-10 text-xl mx-12">
                        From Strategy to Soul: We Craft Brands with Impact.
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <h3 className="grow text-left">
                <a
                  className="font-Poppins font-bold lg:text-3xl md:text-2xl text-xl text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  System Design
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
