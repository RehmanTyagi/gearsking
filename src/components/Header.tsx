"use client";

// components
import { AiOutlineSearch } from "react-icons/ai";
import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { GrUnorderedList } from "react-icons/gr";
import Link from "next/link";
import Button from "@/components/Button";

import { useTheme } from "@/hooks/useTheme";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>toggle theme {theme}</button>
      <header role="top-header" className="bg-gray-100 dark:bg-gray-800">
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
      </header>
      <header role="main-header" className="sticky top-0 shadow-md">
        <div className="container mx-auto flex items-center justify-between gap-10 p-4 text-sm">
          <span className="text-lg font-bold text-primary sm:text-2xl">
            Gearsking
          </span>
          <div
            className="hidden border md:flex lg:flex-grow dark:border-gray-700"
            role="search-bar"
          >
            <Button
              type="button"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <GrUnorderedList className="text-lg" />
              <span>category</span>
            </Button>
            <input
              type="text"
              placeholder="Search , e.g. Apple Macbook Pro"
              className="flex-grow bg-transparent px-5 text-gray-600 outline-none dark:text-gray-300"
            />
            <Button className="px-5 text-2xl" type="button">
              <AiOutlineSearch />
            </Button>
          </div>
          <div className="flex items-center gap-4 lg:gap-8" role="user-actions">
            <GiShoppingCart className="cursor-pointer text-2xl md:text-3xl lg:text-3xl" />
            <Button className="sm:text-base" type="button">
              Login
            </Button>
            <GiHamburgerMenu className="lg:hidden" size={25} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
