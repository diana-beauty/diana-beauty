"use client";

import Image from "next/image";
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
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Diana Beauty"
        fill
        priority
        quality={100}
        className="object-cover scale-105 transition-transform duration-[8000ms] hover:scale-110"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <div className="max-w-2xl">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
            Diana Beauty • Linköping
          </p>

          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Framhäv din
            <br />
            <span className="italic text-[#D4AF37]">
              naturliga
            </span>
            <br />
            <span className="italic text-[#D4AF37]">
              skönhet
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Professionella frans- och brynbehandlingar med fokus på kvalitet,
            precision och ett naturligt elegant resultat.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="https://www.bokadirekt.se/places/dianabeauty-52970"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#e7c85b] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              Boka tid
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D4AF37] px-8 py-4 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              Våra behandlingar
            </a>

          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <Award className="h-8 w-8 text-[#D4AF37]" />
              <p className="mt-2 font-medium text-white">
                Certifierad
              </p>
              <span className="text-sm text-gray-400">
                Sedan 2018
              </span>
            </div>

            <div>
              <Star className="h-8 w-8 text-[#D4AF37]" />
              <p className="mt-2 font-medium text-white">
                Premium
              </p>
              <span className="text-sm text-gray-400">
                Produkter
              </span>
            </div>

            <div>
              <Heart className="h-8 w-8 text-[#D4AF37]" />
              <p className="mt-2 font-medium text-white">
                Personlig
              </p>
              <span className="text-sm text-gray-400">
                Service
              </span>
            </div>

            <div>
              <MapPin className="h-8 w-8 text-[#D4AF37]" />
              <p className="mt-2 font-medium text-white">
                Linköping
              </p>
              <span className="text-sm text-gray-400">
                Centralt
              </span>
            </div>

          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#D4AF37]">
        <ChevronDown className="h-8 w-8" />
      </div>

    </section>
  );
}