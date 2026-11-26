
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

const bookingUrl =
  "https://www.bokadirekt.se/places/dianabeauty-52970";

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
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#D4AF37]/20 bg-black/90 shadow-2xl backdrop-blur-2xl"
          : "bg-black/30"
      }`}
    >
      <nav className="flex h-20 w-full items-center justify-between gap-3 px-4 lg:px-6">

        {/* Logotyp */}
        <a
          href="#hero"
          aria-label="Diana Beauty – startsida"
          className="flex h-full shrink-0 items-center"
        >
          <Image
            src="/images/diana-logo-test.png"
            alt="Diana Beauty"
            width={180}
            height={75}
            priority
           className="block h-auto max-h-[85px] w-[210px] rounded-2xl object-contain object-left transition duration-300 hover:scale-[1.03] lg:w-[225px]"
          />
        </a>

        {/* Dator-menyn */}
        <ul className="hidden items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white lg:flex xl:gap-6">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="transition duration-300 hover:text-[#D4AF37]"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Bokningsknapp och mobilmeny */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#e7c85b] md:inline-flex"
          >
            Boka tid
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobilmeny */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#D4AF37]/20 bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col space-y-5 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-white transition hover:text-[#D4AF37]"
              >
                {link.title}
              </a>
            ))}

            <a
              href={bookingUrl}
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
