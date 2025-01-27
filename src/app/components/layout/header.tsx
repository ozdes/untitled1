import { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/image/logo.webp";
import Tr from "../../../../public/image/tr.png";
import En from "../../../../public/image/en.png";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FiPhone, FiHeart, FiSearch } from "react-icons/fi";
import {Select} from "antd";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <div className="bg-[#F0F4F8] h-[40px] flex justify-end px-4 py-1 lg:flex hidden">
                <div className="flex items-center space-x-6">
                    <Link href="#" className="text-sm text-gray-700">
                        B2B Platform
                    </Link>
                    <Link href="#" className="text-sm text-gray-700">
                        Client Care
                    </Link>
                    <Link href="#" className="text-sm text-gray-700">
                        Contact
                    </Link>
                    <div className="flex items-center space-x-2">
                        <FiPhone color="#FF6A00" size={18} />
                        <span className="text-sm text-gray-700">
                +4021 210 17 17
            </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FiHeart color="#FF6A00" size={18} />
                        <span className="text-sm text-gray-700">Favorite</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center border border-gray-300 rounded-md py-1 px-3">
                            <FiSearch color="#FF6A00" size={18} />
                            <input
                                type="text"
                                className="ml-2 bg-transparent outline-none text-sm text-gray-700"
                                placeholder="Destination or Hotel"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <Select
                            defaultValue="en"
                            className="text-sm text-gray-700 bg-[#F0F4F8]">
                            <Select.Option value="en" className="flex items-center w-20">
                                <Image alt="En" src={En} />
                            </Select.Option>
                            <Select.Option value="tr" className="flex justify-between w-20">
                                <Image alt="Tr" src={Tr} />
                            </Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
            <nav className="bg-white px-4 lg:px-6 py-2.5 h-[80px]">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="" className="flex items-center">
                        <Image
                            alt="Logo"
                            src={Logo}
                            width={120}
                            height={40}
                        />
                    </Link>

                    <button onClick={toggleMenu} className="lg:hidden text-gray-700">
                        <FiMenu size={24} />
                    </button>

                    <div className="lg:flex lg:items-center lg:w-auto lg:order-1 hidden">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Popular Destinations</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Top Hotels</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Last Minute</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Recommended</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Charter Antalya</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">City Break İstanbul</Link>
                            </li>
                        </ul>
                    </div>

                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } fixed inset-0 bg-white bg-opacity-90 z-50 lg:hidden`}>

                        <button onClick={closeMenu} className="absolute top-4 right-4 text-2xl text-gray-700">
                            <FiX />
                        </button>

                        <ul className="flex flex-col items-center justify-center gap-4 py-4">
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Popular Destinations</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Top Hotels</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Last Minute</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Recommended</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">Charter Antalya</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-semibold text-gray-900">City Break İstanbul</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;
