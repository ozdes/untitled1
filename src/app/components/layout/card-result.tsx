import Image from "next/image";
import resultImage from "../../../../public/image/resultImg.png";
import {CalendarOutlined, MoonOutlined, TeamOutlined, UsbOutlined} from "@ant-design/icons";

function CardResult() {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <Image alt="resultImage" src={resultImage} className="mr-3"/>

            <div className="border border-gray-100 bg-white rounded flex flex-col justify-between w-full p-4">
                <div className="mb-2">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        Pine Beach Belek Side Royal Palace Hotel & Spa
                    </div>
                    <p className="text-sm text-gray-800 flex items-center text-bold">
                        <svg
                            className="w-3 h-3 text-orange-400 inline mr-0.5 mb-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-3 h-3 text-orange-400 inline mr-0.5 mb-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-3 h-3 text-orange-400 inline mr-0.5 mb-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-3 h-3 text-orange-400 inline mr-0.5 mb-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-3 h-3 text-orange-400 inline mr-2 mb-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        Belek,Turkey
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                    <div className="flex flex-col mb-4 md:mb-0">
                        <div className="flex flex-row mb-2">
                            <TeamOutlined className="text-zinc-400 mr-2" />
                            <span className="text-sm text-zinc-500">2 Adults, 1 Child</span>
                        </div>

                        <div className="flex flex-row mb-2">
                            <CalendarOutlined className="text-zinc-400 mr-2" />
                            <span className="text-sm text-zinc-500">25 July 2023</span>
                        </div>

                        <div className="flex flex-row mb-2">
                            <MoonOutlined className="text-zinc-400 mr-2" />
                            <span className="text-sm text-zinc-500">7 Nights</span>
                        </div>

                        <div className="flex flex-row mb-2">
                            <UsbOutlined className="text-zinc-400 mr-2" />
                            <span className="text-sm text-zinc-500">All inclusive plus/ultra</span>
                        </div>
                    </div>

                    <div className="border-l border-gray-300 h-1 mx-4 md:h-40" />

                    <div className="ml-4 flex flex-col items-end">
                        <span className="text-lg text-gray-400 line-through">1,200€</span>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-400 mr-1">from PP</span>
                            <span className="text-xl font-bold text-gray-500">1,200€</span>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-orange-400 text-white rounded text-sm font-semibold hover:bg-orange-600 transition-colors">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardResult;