
"use client";

import { useState } from "react";
import {
  ChevronDown,
  Eye,
  Crown,
  RefreshCw,
  Sparkles,
  Flower2,
  Heart,
  Clock3,
} from "lucide-react";

const bookingUrl =
  "https://www.bokadirekt.se/places/dianabeauty-52970#services";

const categories = [
  {
    title: "Nytt set fransförlängning",
    subtitle: "Framhäv dina ögon med fransar anpassade efter din stil.",
    icon: Eye,
    services: [
      { name: "Mega volymfransar – nytt set", price: "935 kr", oldPrice: "1 100 kr", time: "125 min", description: "Flera tunna fransar appliceras på varje naturlig frans för en extra fyllig och dramatisk look.", campaign: true },
      { name: "Volymfransar – nytt set", price: "850 kr", oldPrice: "1 000 kr", time: "120 min", description: "Volym, längd och en intensivare blick. Anpassas efter önskad längd, tjocklek och böjning.", campaign: true },
      { name: "Mixfransar – nytt set", price: "765 kr", oldPrice: "900 kr", time: "120 min", description: "En kombination av singel- och volymfransar för en naturlig men fyllig look.", campaign: true },
      { name: "Singelfransar – nytt set", price: "680 kr", oldPrice: "800 kr", time: "90 min", description: "En syntetisk frans appliceras på varje naturlig frans för ett elegant och naturligt resultat.", campaign: true },
      { name: "Wispy Lashes / Wet Look – nytt set", price: "893 kr", oldPrice: "1 050 kr", time: "120 min", description: "Markerad Wispy-effekt med volym- och singelfransar.", campaign: true },
      { name: "Borttagning + nytt set volymfransar", price: "935 kr", oldPrice: "1 100 kr", time: "145 min", campaign: true },
      { name: "Borttagning + nytt set mixfransar", price: "850 kr", oldPrice: "1 000 kr", time: "145 min", campaign: true },
      { name: "Borttagning + nytt set singelfransar", price: "765 kr", oldPrice: "900 kr", time: "130 min", campaign: true },
      { name: "Borttagning + Wispy Lashes", price: "978 kr", oldPrice: "1 150 kr", time: "145 min", campaign: true },
      { name: "Borttagning + Mega volymfransar", price: "1 020 kr", oldPrice: "1 200 kr", time: "150 min", campaign: true },
      { name: "Borttagning av fransar", price: "250 kr", time: "30 min" },
    ],
  },
  {
    title: "Paket – Fransförlängning + Brow Lift",
    subtitle: "Kombinera vackra fransar med välformade bryn.",
    icon: Crown,
    services: [
      { name: "Brow Lift + volymfransar", price: "1 275 kr", oldPrice: "1 500 kr", time: "145 min", campaign: true },
      { name: "Brow Lift + nytt set mixfransar", price: "1 190 kr", oldPrice: "1 400 kr", time: "145 min", campaign: true },
      { name: "Brow Lift + nytt set singelfransar", price: "1 105 kr", oldPrice: "1 300 kr", time: "125 min", campaign: true },
    ],
  },
  {
    title: "Påfyllning av fransförlängning",
    subtitle: "Behåll dina fransar fina och fylliga mellan behandlingarna.",
    icon: RefreshCw,
    services: [
      { name: "Påfyllning inom 3 veckor – Mega volym", price: "800 kr", time: "75 min", description: "Stor påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set." },
      { name: "Quickfix – fransförlängning", price: "450 kr", time: "30 min", description: "För mindre luckor inom max 10 dagar från senaste behandlingen. Ingen rensning av gamla fransar ingår." },
      { name: "Påfyllning inom 3 veckor – Volymfransar", price: "700 kr", time: "60 min", description: "Stor påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set." },
      { name: "Påfyllning inom 3 veckor – Mixfransar", price: "600 kr", time: "60 min", description: "Påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set." },
      { name: "Wispy Lashes / Wet Look – påfyllning", price: "650 kr", time: "60 min", description: "Påfyllning inom 3 veckor." },
      { name: "Påfyllning inom 3 veckor – Singelfransar", price: "550 kr", time: "50 min", description: "Stor påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set." },
    ],
  },
  {
    title: "Lash Lift & Brow Lift",
    subtitle: "Lyft fram dina naturliga fransar och bryn.",
    icon: Sparkles,
    services: [
      { name: "Kombobehandling Lash & Brow Lift", price: "1 250 kr", time: "80 min", description: "Brow Lift och Lash Lift inklusive keratinbehandling, trådning av bryn och fransfärg." },
      { name: "Lash Lift borttagning / avslappning", price: "200 kr", time: "15 min", description: "Korrigering av ett tidigare Lash Lift. Böjen kan tas bort helt eller mjukas upp efter bedömning." },
      { name: "Korean Lash Lift inkl. färg av fransar", price: "723 kr", oldPrice: "850 kr", time: "80 min", description: "Definierat lyft, vacker böj och noggrann separation. Fransfärgning och vårdande avslutning ingår.", campaign: true },
      { name: "Korean Lash Lift", price: "680 kr", oldPrice: "800 kr", time: "70 min", description: "Koreanskt Lash Lift med definierat lyft, vacker böj och vårdande avslutning.", campaign: true },
      { name: "Korean Lash & Brow Lift inkl. färg och mask", price: "1 148 kr", oldPrice: "1 350 kr", time: "90 min", description: "Lash Lift och Brow Lift med färgning, brynformning och återfuktande mask.", campaign: true },
      { name: "Brow Lift inkl. keratin och trådning", price: "595 kr", oldPrice: "700 kr", time: "45 min", description: "Brow Lift med keratinbehandling och trådning.", campaign: true },
      { name: "Brow Lift inkl. trådning och färg av bryn", price: "638 kr", oldPrice: "750 kr", time: "60 min", description: "Brow Lift med trådning, färgning och keratinbehandling.", campaign: true },
      { name: "Lash Lift inkl. keratin och fransfärg", price: "750 kr", time: "60 min", description: "Lash Lift med keratinbehandling och fransfärg." },
      { name: "Lash Lift inkl. keratinbehandling", price: "700 kr", time: "60 min", description: "Ger ögonfransarna en naturlig böjning och ett lyft som vanligtvis håller i 6–8 veckor." },
      { name: "Trådning av bryn inkl. färgning av bryn/fransar", price: "450 kr", time: "45 min" },
    ],
  },
  {
    title: "Trådning & färgning",
    subtitle: "Forma och framhäv dina bryn och fransar.",
    icon: Flower2,
    services: [
      { name: "Trådning av bryn och färgning", price: "400 kr", time: "25 min" },
      { name: "Trådning av hela ansiktet", price: "350 kr", time: "30 min" },
      { name: "Trådning av bryn", price: "300 kr", time: "30 min" },
      { name: "Färgning av fransar", price: "200 kr", time: "20 min" },
      { name: "Kombobehandling – trådning och färgning", price: "400 kr", time: "40 min", description: "Trådning av hela ansiktet inklusive färgning av fransar och bryn." },
      { name: "Trådning överläpp", price: "100 kr", time: "10 min" },
    ],
  },
  {
    title: "Massage",
    subtitle: "En stund för avkoppling och återhämtning.",
    icon: Heart,
    services: [
      { name: "Skalp + ansiktsmassage", price: "600 kr", time: "45 min", description: "Massage av hårbotten med händer och redskap som stimulerar blodcirkulationen och löser upp spänningar. Avslutas med en lätt ansiktsmassage med olja." },
    ],
  },
];

type Service = {
  name: string;
  price: string;
  oldPrice?: string;
  time: string;
  description?: string;
  campaign?: boolean;
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-[#D4AF37]/30 bg-white p-4 shadow-sm transition duration-300 hover:border-[#B18B38] hover:shadow-md">
      <div className="flex-1">
        {service.campaign && (
          <span className="mb-3 inline-block rounded-full bg-[#B18B38]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#96732D]">
            Kampanj till 30 november 2026
          </span>
        )}

        <div className="flex items-start gap-2">
          <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#B18B38]" />
          <h3 className="text-sm font-semibold leading-6 text-[#292521]">
            {service.name}
          </h3>
        </div>

        {service.description && (
          <p className="mt-2 text-xs leading-5 text-[#81786D]">
            {service.description}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-end justify-between gap-2 border-t border-[#E5DCCB] pt-3">
        <div>
          <p className="flex items-center gap-1 text-xs text-[#81786D]">
            <Clock3 className="h-3 w-3 text-[#B18B38]" />
            {service.time}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {service.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {service.oldPrice}
              </span>
            )}
            <span className="text-base font-bold text-[#A8873E]">
              {service.price}
            </span>
          </div>
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-[#B18B38] px-4 py-2 text-xs font-semibold text-[#292521] transition hover:bg-[#B18B38] hover:text-white"
        >
          Boka
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="bg-[#FAF8F3] px-4 py-10 md:px-6 md:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
  <h2 className="font-serif text-3xl text-[#292521] md:text-4xl">
    Våra behandlingar
  </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#81786D]">
            Välj en kategori för att se behandlingar, priser och behandlingstider.
          </p>

          <div className="mx-auto mt-5 h-px w-16 bg-[#B18B38]" />
        </div>

        <div className="space-y-3">
          {categories.map((category, index) => {
            const isOpen = openCategory === index;
            const CategoryIcon = category.icon;
            const panelId = `service-category-${index}`;

            return (
              <div
                key={category.title}
                id={index === 0 ? "lash-extensions" : undefined}
                className="overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#F2EBDD]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenCategory(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[#EDE3D1] md:px-6"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white">
                      <CategoryIcon className="h-5 w-5 text-[#A8873E]" />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-serif text-base text-[#96732D] md:text-lg">
                        {category.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#625B52]">
                        {category.subtitle}
                      </span>
                      <span className="mt-1 block text-[11px] text-[#81786D]">
                        {category.services.length} behandlingar
                      </span>
                    </span>
                  </span>

                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-[#A8873E] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    className="border-t border-[#D4AF37]/30 p-3 md:p-5"
                  >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {category.services.map((service) => (
                        <ServiceCard
                          key={service.name}
                          service={service}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-[#D4AF37]/30 bg-[#F2EBDD] px-5 py-8 text-center">
          <h3 className="font-serif text-xl text-[#292521]">
            Hittar du inte det du söker?
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#81786D]">
            Se hela tjänsteutbudet och lediga tider på Bokadirekt.
          </p>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-md bg-[#B18B38] px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#96732D]"
          >
            Se alla behandlingar
          </a>
        </div>
      </div>
    </section>
  );
}
