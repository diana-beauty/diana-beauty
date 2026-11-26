
import Image from "next/image";
import {
  CalendarDays,
  ChevronRight,
  Eye,
} from "lucide-react";

const bookingUrl =
  "https://www.bokadirekt.se/places/dianabeauty-52970";

function BrowIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
      <path
        d="M4 26C11 12 25 8 36 15"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M8 29C16 20 27 17 35 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".8"
      />
    </svg>
  );
}

function LashLiftIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
      <path
        d="M20 34V22
        M20 22C13 22 9 17 8 11C15 11 19 16 20 22
        M20 22C20 14 24 8 31 5C33 13 28 20 20 22
        M20 22C14 15 9 12 4 13C6 20 12 23 20 22
        M20 22C25 17 31 15 36 17C33 23 27 25 20 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 34H28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrowLiftIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
      <path
        d="M12 5H6V12M28 5H34V12M6 28V35H12M34 28V35H28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16C14 13 17 13 20 15M21 15C24 13 27 13 30 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 21H17M23 21H27M15 28C18 31 22 31 25 28"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const services = [
  { name: "Fransar", icon: Eye },
  { name: "Bryn", icon: BrowIcon },
  { name: "Lash Lift", icon: LashLiftIcon },
  { name: "Brow Lift", icon: BrowLiftIcon },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-[#21120C] text-white md:min-h-[540px] lg:min-h-[560px]"
    >
      {/* Bakgrundsbild */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/diana-hero-photo-clean.png"
          alt="Fransbehandling hos Diana Beauty"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_45%]"
        />
      </div>

      {/* Mörk toning bakom texten */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#1B0D07]/95 via-[#28150D]/75 via-45% to-[#28150D]/10" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-[#21120C]/35" />

      {/* Innehåll */}
      <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-10 sm:px-10 md:px-14 lg:py-12">
        <div className="w-full max-w-[700px]">

          {/* Stor Diana Beauty-logotyp */}
          <div className="mb-5">
            <Image
              src="/images/diana-beauty-new-logo.png"
              alt="Diana Beauty"
              width={500}
              height={220}
              priority
              className="h-auto w-[260px] object-contain object-left sm:w-[300px] md:w-[320px]"
            />
          </div>

          {/* Huvudrubrik */}
          <h1 className="font-serif text-[2.2rem] leading-[1.12] text-white sm:text-5xl md:text-[3.1rem]">
            <span className="block whitespace-nowrap">
              Framhäv din skönhet
            </span>
            <span className="block whitespace-nowrap">
              på ett{" "}
              <span className="italic text-[#E9BD58]">
                naturligt sätt.
              </span>
            </span>
          </h1>

          <div className="mt-5 h-[2px] w-28 rounded-full bg-[#D4AF37]" />

          {/* Beskrivning */}
          <p className="mt-5 max-w-[430px] text-sm leading-7 text-white/95 sm:text-base">
            Professionella frans- och brynbehandlingar
            i Linköping.
          </p>

          {/* Bokningsknappar */}
          <div className="mt-6 flex max-w-[390px] flex-col gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#F4D47A] to-[#C99524] px-6 text-sm font-bold text-[#21120C] shadow-lg transition hover:brightness-110 sm:text-base"
            >
              <CalendarDays className="h-5 w-5" />
              Boka din tid online
              <ChevronRight className="h-5 w-5" />
            </a>

            <a
              href="#services"
              className="inline-flex min-h-[48px] items-center justify-center gap-4 rounded-full border-2 border-[#E9BD58] px-6 text-sm text-white transition hover:bg-[#D4AF37]/15 sm:text-base"
            >
              Våra behandlingar
              <ChevronRight className="h-5 w-5 text-[#E9BD58]" />
            </a>
          </div>

          {/* Större behandlingssymboler */}
          <div className="mt-8 grid max-w-[470px] grid-cols-4 border-t border-[#D4AF37]/60 pt-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.name}
                  href="#services"
                  className={`flex flex-col items-center gap-2 px-2 text-center text-sm text-white transition hover:text-[#F4D47A] ${
                    index !== 0
                      ? "border-l border-[#D4AF37]/60"
                      : ""
                  }`}
                >
                  <Icon className="h-9 w-9 text-[#E9BD58]" />
                  <span>{service.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
