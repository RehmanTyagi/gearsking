// components
import { AiOutlineSearch } from "react-icons/ai";
import { GiShoppingCart, GiHamburgerMenu } from "react-icons/gi";
import { GrUnorderedList } from "react-icons/gr";
import Link from "next/link";
import Button from "@/components/Button";

const Header = () => {
  return (
    <>
      <div role="top-header" className="bg-gray-100/50">
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
              Gearsking
            </Link>
            <Link className="hover:text-primary" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <header className="sticky top-0 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between gap-10 p-4 text-sm">
          <span className="text-lg font-bold text-primary sm:text-2xl">
            Gearsking
          </span>
          <div
            className="hidden justify-between gap-5 rounded-lg border lg:flex lg:flex-grow"
            role="search-bar"
          >
            <div className="flex cursor-pointer items-center gap-2 bg-gray-100 p-2.5 text-sm font-medium hover:bg-gray-200">
              <GrUnorderedList className="text-lg" />
              <span>category</span>
            </div>
            <div className="flex flex-grow justify-between gap-2">
              <input
                type="text"
                placeholder="Search , e.g. Apple Macbook Pro"
                className="flex-grow text-gray-500 outline-none"
              />
              <Button className="px-5 text-2xl" type="button">
                <AiOutlineSearch />
              </Button>
            </div>
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
