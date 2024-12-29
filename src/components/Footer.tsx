import Image from "next/image";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import LinkTag from "@/components/Link";

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: [
        { href: "#", label: "about us" },
        { href: "#", label: "career" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "blogs" },
        { href: "#", label: "flash sales" },
        { href: "#", label: "affiliate" },
      ],
    },
    {
      title: "Customers",
      links: [
        { href: "#", label: "Help" },
        { href: "#", label: "Payment Method" },
        { href: "#", label: "Track Orders" },
        { href: "#", label: "Free Shipping" },
        { href: "#", label: "Return & Refund Policy" },
        { href: "#", label: "Guarantee" },
      ],
    },
  ];

  const paymentMethods = [
    {
      src: "/images/gearsking-visa.svg",
      alt: "visa",
    },
    {
      src: "/images/gearsking-paypal.svg",
      alt: "paypal",
    },
    {
      src: "/images/gearsking-mastercard.svg",
      alt: "mastercard",
    },
    {
      src: "/images/gearsking-american.svg",
      alt: "american express",
    },
    {
      src: "/images/gearsking-amazon.svg",
      alt: "amazon",
    },
    {
      src: "/images/gearsking-stripe.svg",
      alt: "stripe",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between rounded-lg border px-10 md:flex-row xl:px-32 dark:border-gray-700">
        <div className="hidden items-center py-5 md:block md:gap-10 lg:flex">
          <h1 className="text-3xl font-bold">Gearsking</h1>
          <p className="text-base text-gray-500">
            best selling site for 100% genuine gadgets
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <Image
            src="/images/gearsking-ios.svg"
            alt="Gearsking iOS"
            width={150}
            height={150}
            priority
            className="cursor-pointer"
          />
          <Image
            src="/images/gearsking-playstore.svg"
            alt="Gearsking iOS"
            width={150}
            height={150}
            priority
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 p-5 sm:flex sm:justify-between md:gap-10 md:p-16 lg:justify-center lg:gap-28">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">{section.title}</h1>
            {section.links.map((link) => (
              <LinkTag className="text-sm capitalize" key={link.label} href="#">
                {link.label}
              </LinkTag>
            ))}
          </div>
        ))}
        <div className="col-span-2 flex flex-col gap-5">
          <h1 className="text-lg font-bold">Contacts Us</h1>
          <LinkTag
            href="tel:7210708977"
            className="flex items-center justify-between gap-4 rounded-md border p-3"
          >
            <MdOutlineSupportAgent className="text-4xl" />
            <div className="text-sm sm:text-xs">
              <p className="truncate">Got questions? Call us 24/7</p>
              <p className="text-sm font-bold">+91 720107089</p>
            </div>
            <MdKeyboardArrowRight className="text-2xl text-gray-500" />
          </LinkTag>
          <div className="flex items-center gap-3">
            <p className="font-semibold">Find us on:</p>
            <LinkTag href="#">
              <Image
                width={30}
                height={30}
                alt="social"
                fetchPriority="low"
                src="/images/gearsking-linkedin.svg"
              />
            </LinkTag>
            <LinkTag href="#">
              <Image
                width={30}
                height={30}
                alt="social"
                fetchPriority="low"
                src="/images/gearsking-twitter.svg"
              />
            </LinkTag>
            <LinkTag href="#">
              <Image
                width={30}
                height={30}
                alt="social"
                fetchPriority="low"
                src="/images/gearsking-facebook.svg"
              />
            </LinkTag>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 border-t p-5 md:flex-row">
        <p className="text-xs text-gray-500 lg:text-sm">
          @{new Date().getFullYear()} All rights reserved. Designed by gearsking
          inc.
        </p>
        <div className="flex items-center gap-5 text-sm font-semibold">
          <span className="hidden lg:block">Payment method</span>
          {paymentMethods.map((method) => (
            <Image
              className="md:h-10 md:w-10"
              key={method.alt}
              src={method.src}
              alt={method.alt}
              width={30}
              height={30}
              priority
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
