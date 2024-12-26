import React from 'react';
import Link from 'next/link';

interface LinkProps {
  className?: string;
  href: string;
  target?: string;
  children: React.ReactNode;
}
const LinkTag: React.FC<LinkProps> = ({
  href,
  target,
  children,
  className,
}) => {
  return (
    <Link
      className={`${className} hover:text-primary`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkTag;
