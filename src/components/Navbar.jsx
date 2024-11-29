import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <img src="/fox-logo.png" className="w-8 h-8" alt="" />
        <span>adefxlog.</span>
      </div>
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
          } transition-all ease-in-out duration-500`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="#">
            <button className="py-2 px-4 rounded-3xl text-white bg-blue-800">
              Login 👋
            </button>
          </a>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="#">
          <button className="py-2 px-4 rounded-3xl text-white bg-blue-800">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
