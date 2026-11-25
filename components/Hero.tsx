
"use client";

import Image from "next/image";
import {
  Award,
  Star,
  Heart,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[340px] w-full overflow-hidden bg-[#080808] md:min-h-[390px]"
    >
      {/* Bakgrundsbild */}
      <Image
        src="/images/hero.jpg"
        alt="Diana Beauty – frans- och brynbehandlingar"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover object-center"
      />

      {/* Mörka lager */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      {/* Innehåll */}
      <div className="relative z-10 flex min-h-[340px] items-center px-5 py-10 md:min-h-[390px] md:px-8">
        <div className="max-w-[540px]">

          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] md:text-xs">
            Diana Beauty
          </p>

          <h1 className="font-serif text-3xl leading-[1.12] text-white md:text-5xl">
            Framhäv din skönhet
            <br />
            på ett{" "}
            <span className="italic text-[#D4AF37]">
              naturligt
            </span>{" "}
            sätt
          </h1>

          <p className="mt-4 max-w-[390px] text-xs leading-5 text-gray-200 md:text-sm md:leading-6">
            Professionella frans- och brynbehandlingar
            med fokus på kvalitet, trygghet och ett naturligt resultat.
          </p>

          {/* Knappar */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="rounded-sm border border-[#D4AF37] bg-[#B18B38] px-6 py-2.5 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-[#D4AF37]"
            >
              Boka din tid
            </a>

            <a
              href="#services"
              className="rounded-sm border border-[#B18B38] px-6 py-2.5 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-[#B18B38] hover:text-black"
            >
              Våra behandlingar
            </a>
          </div>

          {/* Fördelar */}
          <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 md:grid-cols-4 md:gap-5">

            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 shrink-0 text-[#D4AF37]" />
              <div>
                <p className="text-[10px] font-semibold text-white">
                  Certifierad
                </p>
                <p className="text-[9px] text-gray-400">
                  Sedan 2018
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 shrink-0 text-[#D4AF37]" />
              <div>
                <p className="text-[10px] font-semibold text-white">
                  Hög kvalitet
                </p>
                <p className="text-[9px] text-gray-400">
                  Premiumprodukter
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 shrink-0 text-[#D4AF37]" />
              <div>
                <p className="text-[10px] font-semibold text-white">
                  Kundfokus
                </p>
                <p className="text-[9px] text-gray-400">
                  Trygghet & omsorg
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-[#D4AF37]" />
              <div>
                <p className="text-[10px] font-semibold text-white">
                  Linköping
                </p>
                <p className="text-[9px] text-gray-400">
                  Centralt beläget
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
