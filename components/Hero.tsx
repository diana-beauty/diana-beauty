
"use client";

import {
  Award,
  Star,
  Heart,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[540px] w-full items-center overflow-hidden bg-[#080808] px-6 py-16 md:min-h-[560px] md:py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#241b0a]/40 via-transparent to-black" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
            Diana Beauty • Linköping
          </p>

          <h1 className="text-4xl font-light leading-tight text-white md:text-6xl">
            Framhäv din skönhet
            <br />
            på ett{" "}
            <span className="italic text-[#D4AF37]">
              naturligt sätt
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
            Professionella frans- och brynbehandlingar med fokus på
            kvalitet, precision och ett naturligt elegant resultat.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.bokadirekt.se/places/dianabeauty-52970"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#e7c85b]"
            >
              Boka din tid
            </a>

            <a
              href="#services"
              className="rounded-md border border-[#D4AF37] px-7 py-3 text-sm text-white transition hover:bg-[#D4AF37] hover:text-black"
            >
              Våra behandlingar
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
            <div>
              <Award className="h-6 w-6 text-[#D4AF37]" />
              <p className="mt-2 text-sm font-semibold text-white">
                Certifierad
              </p>
              <span className="text-xs text-gray-400">Sedan 2018</span>
            </div>

            <div>
              <Star className="h-6 w-6 text-[#D4AF37]" />
              <p className="mt-2 text-sm font-semibold text-white">
                Hög kvalitet
              </p>
              <span className="text-xs text-gray-400">
                Premiumprodukter
              </span>
            </div>

            <div>
              <Heart className="h-6 w-6 text-[#D4AF37]" />
              <p className="mt-2 text-sm font-semibold text-white">
                Kundfokus
              </p>
              <span className="text-xs text-gray-400">
                Trygghet och omsorg
              </span>
            </div>

            <div>
              <MapPin className="h-6 w-6 text-[#D4AF37]" />
              <p className="mt-2 text-sm font-semibold text-white">
                Linköping
              </p>
              <span className="text-xs text-gray-400">
                Centralt beläget
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-[#D4AF37]">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
