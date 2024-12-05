import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ImageKit from "./ImageKit";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { getToken } = useAuth();

  // useEffect(() => {
  //   getToken().then((token) => console.log(token));
  // }, []);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <ImageKit src={"fox-logo.png"} width={30} height={30} alt="Logo" />
        <span>adefxlog.</span>
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="cursor-pointer">
          {open ? (
            <X size={30} onClick={() => setOpen(!open)} />
          ) : (
            <Menu size={30} onClick={() => setOpen(!open)} />
          )}
        </div>
        {/* Mobile Links */}
        <div
          className={`w-full h-screen flex flex-col justify-center gap-8 font-medium text-lg items-center absolute top-16 bg-[#e6e6ff] ${
            open ? "right-0" : "-right-[100%]"
          } transition-all ease-in-out duration-500 z-50`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl text-white bg-blue-800">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl text-white bg-blue-800">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
