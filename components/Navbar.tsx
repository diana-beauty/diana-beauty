
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

function BrandLogo() {
  return (
    <Image
      src="/images/diana-beauty-new-logo.png"
      alt="Diana Beauty"
      width={420}
      height={190}
      priority
      className="h-auto w-[190px] object-contain sm:w-[210px] lg:w-[220px]"
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

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
      className={`sticky top-0 z-40 w-full border-b border-[#D4AF37]/30 transition-all duration-300 ${
        scrolled
          ? "bg-[#F2EBDD]/95 shadow-md backdrop-blur-xl"
          : "bg-[#FAF8F3]"
      }`}
    >
      <nav className="mx-auto flex h-[82px] w-full items-center justify-between gap-3 px-4 md:h-[86px] lg:px-8">

        {/* Diana Beauty – nya logotypen */}
        <a
          href="#hero"
          aria-label="Diana Beauty – startsida"
          className="flex h-full shrink-0 items-center"
        >
          <BrandLogo />
        </a>

        {/* Dator-menyn */}
        <ul className="hidden items-center gap-5 text-[12px] font-semibold uppercase tracking-[0.10em] text-[#292521] lg:flex xl:gap-7 xl:text-[13px]">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="relative py-2 transition duration-300 hover:text-[#B18B38] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#B18B38] after:transition-all after:duration-300 hover:after:w-full"
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
            className="hidden rounded-full bg-gradient-to-r from-[#F4D47A] to-[#C99524] px-6 py-3 text-sm font-semibold text-[#292521] shadow-sm transition hover:brightness-110 md:inline-flex"
          >
            Boka tid
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#292521] transition hover:bg-[#D4AF37]/15 lg:hidden"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </nav>

      {/* Mobilmeny */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#D4AF37]/25 bg-[#F2EBDD]">
          <div className="flex flex-col gap-1 px-5 py-5">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-[#292521] transition hover:bg-[#D4AF37]/15 hover:text-[#96732D]"
              >
                {link.title}
              </a>
            ))}

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-gradient-to-r from-[#F4D47A] to-[#C99524] py-3.5 text-center text-base font-semibold text-[#292521]"
            >
              Boka din tid
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
