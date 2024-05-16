"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link href={href} className={path === href ? "active" : undefined}>
      {children}
    </Link>
  );
};

export default NavLink;
