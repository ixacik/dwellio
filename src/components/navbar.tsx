import { NAV_LINKS } from "@/lib/constants";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Loader, Loader2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="padding h-20 w-full fixed inset-0 z-[999] bottom-auto bg-white text-white shadow-xl flex justify-between items-center">
      <Link href={"/"}>
        <Image src="/dwelio-logo.svg" width={129} height={35} alt="logo" />
      </Link>
      <ul className="flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.href}>
            <li>{link.label}</li>
          </Link>
        ))}
        <div className="flex items-center gap-2">
          <ClerkLoading>
            <Loader
              size={20}
              className="mx-auto animate-spin text-muted-foreground"
            />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button asChild>
                <SignUpButton mode="modal">Sign Up</SignUpButton>
              </Button>
              <Button variant={"secondary"} asChild>
                <SignInButton mode="modal">Log In</SignInButton>
              </Button>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
