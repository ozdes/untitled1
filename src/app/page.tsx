'use client';

import Image from "next/image";
import Hero from '../../public/image/hero.webp';
import vecHotel from '../../public/image/hotel.png';
import vecFlight from '../../public/image/flight.png';
import vecPackage from '../../public/image/package.png';
import Header from '../app/components/layout/header';
import Hotel from '../app/components/layout/hotel';
import Package from '../app/components/layout/package';
import Flight from "../app/components/layout/flight";
import {useEffect, useState} from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("package");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "node_modules/@material-tailwind/html/scripts/tabs.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
      <div className="w-full">
        <Header />
        <div className="w-full flex flex-col">
          <div className="flex flex-row">
            <Image alt="Hero" src={Hero} objectFit="cover" />
            <div className="absolute md:top-2/3 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="w-full">
                <ul className="justify-center flex flex-wrap list-none rounded-md" data-tabs="tabs" role="list">
                  <li className={`flex text-center w-[80px] h-[25px] md:w-[130px] md:h-[40px] ${activeTab === "package" ? "bg-white" : "bg-inherit backdrop-blur-md shadow-md"}`}>
                    <a
                        className={`flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer ${activeTab === "package" ? "text-slate-700" : "text-slate-600"}`}
                        onClick={() => handleTabClick("package")}
                        role="tab" aria-selected={activeTab === "package"} aria-controls="package"
                    >
                      <Image className="mr-2" alt="Package" src={vecPackage} objectFit="cover" />
                      Package
                    </a>
                  </li>
                  <li className={`flex text-center w-[80px] h-[25px] md:w-[130px] md:h-[40px] ${activeTab === "hotel" ? "bg-white" : "bg-inherit backdrop-blur-md shadow-md"}`}>
                    <a
                        className={`flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === "hotel" ? "text-slate-700" : "text-slate-600"}`}
                        onClick={() => handleTabClick("hotel")}
                        role="tab" aria-selected={activeTab === "hotel"} aria-controls="hotel"
                    >
                      <Image className="mr-2" alt="Hotel" src={vecHotel} objectFit="cover" />
                      Hotel
                    </a>
                  </li>
                  <li className={`flex text-center w-[80px] h-[25px] md:w-[130px] md:h-[40px] ${activeTab === "flight" ? "bg-white" : "bg-inherit backdrop-blur-md shadow-md"}`}>
                    <a
                        className={`flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${activeTab === "flight" ? "text-slate-700" : "text-slate-600"}`}
                        onClick={() => handleTabClick("flight")}
                        role="tab" aria-selected={activeTab === "flight"} aria-controls="flight"
                    >
                      <Image className="mr-2" alt="Flight" src={vecFlight} objectFit="cover" />
                      Flight
                    </a>
                  </li>
                </ul>
                <div data-tab-content="" className="p-5">
                  <div id="package" role="tabpanel" className={activeTab === "package" ? "block" : "hidden opacity-0"}>
                    <Package />
                  </div>
                  <div id="hotel" role="tabpanel" className={activeTab === "hotel" ? "block" : "hidden opacity-0"}>
                    <Hotel />
                  </div>
                  <div id="flight" role="tabpanel" className={activeTab === "flight" ? "block" : "hidden opacity-0"}>
                    <Flight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
