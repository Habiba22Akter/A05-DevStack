import Hamburger from "../assets/hamburger.png";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-0">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          <img src={Hamburger} alt="Menu" className="h-5 w-6 object-contain" />
        </button>

        <a href="#home" className="flex items-center gap-2">
          <span className="brand-gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white">
            DS
          </span>
          <span className="hidden text-xl font-bold text-slate-900 sm:block">
            Dev <span className="brand-gradient">Stack</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 text-sm text-slate-600 md:flex">
          <li><a className="text-pink-600" href="#home">Home</a></li>
          <li><a className="hover:text-pink-600" href="#technologies">Technologies</a></li>
          <li><a className="hover:text-pink-600" href="#projects">Projects</a></li>
          <li><a className="hover:text-pink-600" href="#about">About</a></li>
          <li><a className="hover:text-pink-600" href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3 text-sm">
          <button className="hidden text-slate-700 sm:block">Sign In</button>
          <button className="brand-gradient-bg rounded-full px-5 py-2.5 font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm text-slate-700">
            <li><a onClick={() => setMenuOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#technologies">Technologies</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
