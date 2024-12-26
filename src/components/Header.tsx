// components
import { AiOutlineSearch } from 'react-icons/ai';
import { GiShoppingCart, GiHamburgerMenu } from 'react-icons/gi';
import { GrUnorderedList } from 'react-icons/gr';
import Link from 'next/link';
import Button from '@/components/Button';

const Header = () => {
  return (
    <>
      <div role='top-header' className='bg-gray-100/50'>
        <div className='container mx-auto text-[10px] lg:text-sm p-3 sm:text-xs flex items-center justify-center lg:justify-between'>
          <Link href='tel:7210708977' className='hidden lg:block'>
            Call us: 91721070899
          </Link>
          <div className='flex items-center gap-1' role='offer-wall'>
            <span className='font-bold'>35%</span>
            <span>off on Refurbished laptops</span>
            <span className='font-bold cursor-copy'>
              &quot;GearsKingChoice&quot;
            </span>
            <Link className='underline text-primary' href='/'>
              More Details
            </Link>
          </div>
          <div className='hidden lg:flex lg:items-center lg:gap-6'>
            <Link className='hover:text-primary' href='/'>
              Home
            </Link>
            <Link className='hover:text-primary' href='/about'>
              Gearsking
            </Link>
            <Link className='hover:text-primary' href='/contact'>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <header className='shadow-md'>
        <div className='flex gap-10 container mx-auto text-sm justify-between items-center p-4'>
          <span className='text-primary text-lg md:text-xl lg:text-2xl font-bold'>
            Gearsking
          </span>
          <div
            className='md:flex md:flex-grow justify-between hidden rounded-lg gap-5 items-center border'
            role='search-bar'
          >
            <div className='flex p-2 lg:p-3 text-xs lg:text-sm items-center font-medium cursor-pointer hover:bg-gray-200 gap-2 bg-gray-100'>
              <GrUnorderedList />
              <span>category</span>
            </div>
            <div className='flex gap-2 h-full flex-grow justify-between items-center'>
              <input
                type='text'
                placeholder='Search , e.g. Apple Macbook Pro'
                className='lg:h-11 h-8 w-full lg:text-base text-gray-500 outline-none'
              />
              <Button className='p-2.5 lg:p-3 lg:text-xl' type='button'>
                <AiOutlineSearch />
              </Button>
            </div>
          </div>
          <div className='flex items-center gap-4 lg:gap-8' role='user-actions'>
            <GiShoppingCart className='cursor-pointer text-2xl md:text-3xl lg:text-3xl' />
            <Button className='text-xs md:text-sm lg:text-lg' type='button'>
              Login
            </Button>
            <GiHamburgerMenu className='md:hidden' size={25} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
