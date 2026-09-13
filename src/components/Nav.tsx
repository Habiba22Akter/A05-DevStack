import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="page-container flex h-[72px] items-center justify-between gap-3">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full rounded bg-current" />
            <span className="h-0.5 w-full rounded bg-current" />
            <span className="h-0.5 w-full rounded bg-current" />
          </span>
        </button>

        <a href="#home" className="shrink-0 md:order-none" aria-label="Dev Stack home">
          <img src={Logo} alt="Dev Stack" className="h-9 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`transition hover:text-violet-600 ${index === 0 ? 'text-pink-600' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden px-2 py-2 text-sm font-semibold text-slate-700 transition hover:text-violet-600 sm:block">
            Sign In
          </button>
          <button className="brand-gradient rounded-full px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5 sm:text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-sm md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-violet-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <button className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
