"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Hem", href: "#hero" },
  { title: "Om Diana", href: "#about" },
  { title: "Behandlingar", href: "#services" },
  { title: "Galleri", href: "#gallery" },
  { title: "Omdömen", href: "#reviews" },
  { title: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#D4AF37]/20 bg-black/75 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        <a href="#hero" className="flex items-center">
          <Image
            src="/images/diana-logo-test.png"
            alt="Diana Beauty"
            width={170}
            height={70}
            priority
            style={{ height: "auto" }}
            className="transition duration-300 hover:scale-105"
          />
        </a>

        <ul className="hidden items-center gap-10 text-sm uppercase tracking-[0.18em] text-white lg:flex">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="relative transition duration-300 hover:text-[#D4AF37] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">

          <a
            href="https://www.bokadirekt.se/places/dianabeauty-52970"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#D4AF37] px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#e7c85b] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] md:inline-flex"
          >
            Boka tid
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
            aria-label="Öppna meny"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#D4AF37]/20 bg-black/95 backdrop-blur-xl">

          <div className="flex flex-col space-y-6 px-8 py-8">

            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white transition hover:text-[#D4AF37]"
              >
                {link.title}
              </a>
            ))}

            <a
              href="https://www.bokadirekt.se/places/dianabeauty-52970"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4AF37] py-3 text-center font-semibold text-black transition hover:bg-[#e7c85b]"
            >
              Boka tid
            </a>

          </div>

        </div>
      </div>

    </header>
  );
}