"use client";

// components
import { Select } from "@headlessui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { GrUnorderedList } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

import { useTheme } from "@/hooks/useTheme";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      {/* <button onClick={toggleTheme}>toggle theme {theme}</button> */}
      <div role="top-header" className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex items-center justify-center p-3 text-[10px] md:text-sm lg:justify-between">
          <Link href="tel:7210708977" className="hidden lg:block">
            Call us: 91721070899
          </Link>
          <div className="flex items-center gap-1" role="offer-wall">
            <span className="font-bold">35%</span>
            <span>off on Refurbished laptops</span>
            <span className="cursor-copy font-bold">
              &quot;GearsKingChoice&quot;
            </span>
            <Link className="text-primary underline" href="/">
              More Details
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Link className="hover:text-primary" href="/">
              Home
            </Link>
            <Link className="hover:text-primary" href="/about">
              about
            </Link>
            <Link className="hover:text-primary" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <header
        role="top-navbar"
        className="sticky top-0 z-50 flex flex-col gap-2.5 bg-white p-4 dark:bg-gray-900"
      >
        <div className="container mx-auto flex items-center justify-between gap-10 text-sm">
          <div>
            <p className="ml-1 text-[10px] text-gray-500/50">
              Delivering address
            </p>
            <Select className="relative bottom-1 max-w-48 border-none bg-transparent !p-0 text-[12px] outline-none">
              <option value="rajiv-nagar-mandoli">
                England, Central London, walk street, 123
              </option>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/icons/cart.svg"
              alt="GearsKing"
              width={30}
              height={30}
            />
            <Image
              src="/icons/Notification.svg"
              alt="GearsKing"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border px-3 py-2 text-xs text-gray-400 dark:border-gray-500 lg:hidden">
          <Image src="/icons/Search.svg" alt="search" width={20} height={20} />
          <p className="">Search here ...</p>
        </div>
      </header>
    </>
  );
};

export default Header;
