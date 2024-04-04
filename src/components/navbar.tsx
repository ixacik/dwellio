import { NAV_LINKS } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="padding py-6 w-full sticky inset-0 bottom-auto bg-white border-b-black/25 text-white shadow-xl flex justify-between items-center">
      <Link href={"/"}>
        <Image src="/dwelio-logo.svg" width={129} height={35} alt="logo" />
      </Link>
      <ul className="flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.href}>
            <li>{link.label}</li>
          </Link>
        ))}
        <UserButton />
      </ul>
    </nav>
  );
};
export default Navbar;
