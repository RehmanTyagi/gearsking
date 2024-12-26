import Image from 'next/image';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import LinkTag from '@/components/Link';

const Footer = () => {
  return (
    <div className='container mx-auto'>
      <div className='sm:grid sm:grid-cols-2 sm:gap-5 sm:p-10 p-5 justify-items-center border bg-customGray'>
        <div className='flex flex-col gap-2 pt-5'>
          <h1 className='text-xl font-bold sm:text-3xl md:text-5xl'>
            Gearsking
          </h1>
          <p className='text-sm md:w-80 lg:w-96  md:text-base text-gray-500'>
            Easy & reliable, best selling site for 100% tested refurbished, new
            laptops, computers. Gearsking, be the king.
          </p>
        </div>
        <div className='flex justify-center gap-5'>
          <Image
            src='/images/gearsking-ios.svg'
            alt='Gearsking iOS'
            width={120}
            height={120}
            priority
            className='md:w-40 cursor-pointer md:h-4w-40'
          />
          <Image
            src='/images/gearsking-playstore.svg'
            alt='Gearsking iOS'
            width={120}
            height={120}
            priority
            className='md:w-40 cursor-pointer md:h-4w-40'
          />
        </div>
      </div>
      <div className='bg-customGray p-5 grid grid-cols-2 sm:flex md:gap-10 md:p-16 md:justify-between lg:justify-center lg:gap-28 gap-5'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-bold'>Company</h1>
          <LinkTag href='#'>about us</LinkTag>
          <LinkTag href='#'>career</LinkTag>
          <LinkTag href='#'>Privacy Policy</LinkTag>
          <LinkTag href='#'>blogs</LinkTag>
          <LinkTag href='#'>flash sales</LinkTag>
          <LinkTag href='#'>affiliate</LinkTag>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-bold'>Customers</h1>
          <LinkTag href='#'>Help</LinkTag>
          <LinkTag href='#'>Payment Method</LinkTag>
          <LinkTag href='#'>Track Orders</LinkTag>
          <LinkTag href='#'>Free Shipping</LinkTag>
          <LinkTag href='#'>Return & Refund Policy</LinkTag>
          <LinkTag href='#'>Guarantee</LinkTag>
        </div>
        <div className='flex flex-col gap-5 col-span-2'>
          <h1 className='text-lg font-bold'>Contacts Us</h1>
          <LinkTag
            href='tel:7210708977'
            className='flex gap-4 p-3 items-center justify-between bg-white border-2 rounded-md'
          >
            <MdOutlineSupportAgent className='text-4xl' />
            <div className='text-sm sm:text-xs'>
              <p className='truncate'>Got questions? Call us 24/7</p>
              <p className='text-sm font-bold'>+91 720107089</p>
            </div>
            <MdKeyboardArrowRight className='text-2xl text-gray-500' />
          </LinkTag>
          <div className='flex items-center gap-3'>
            <p className='font-semibold'>Find us on:</p>
            <LinkTag href='#'>
              <Image
                width={30}
                height={30}
                alt='social'
                fetchPriority='low'
                src='/images/gearsking-linkedin.svg'
              />
            </LinkTag>
            <LinkTag href='#'>
              <Image
                width={30}
                height={30}
                alt='social'
                fetchPriority='low'
                src='/images/gearsking-twitter.svg'
              />
            </LinkTag>
            <LinkTag href='#'>
              <Image
                width={30}
                height={30}
                alt='social'
                fetchPriority='low'
                src='/images/gearsking-facebook.svg'
              />
            </LinkTag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
