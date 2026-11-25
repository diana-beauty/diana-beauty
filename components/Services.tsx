
"use client";

const bookingUrl =
  "https://www.bokadirekt.se/places/dianabeauty-52970#services";

const categories = [
  {
    title: "Nytt set fransförlängning",
    subtitle: "Framhäv dina ögon med fransar anpassade efter din stil.",
    services: [
      {
        name: "Mega volymfransar – nytt set",
        price: "935 kr",
        oldPrice: "1 100 kr",
        time: "125 min",
        description: "Flera tunna fransar appliceras på varje naturlig frans för en extra fyllig och dramatisk look.",
        campaign: true,
      },
      {
        name: "Volymfransar – nytt set",
        price: "850 kr",
        oldPrice: "1 000 kr",
        time: "120 min",
        description: "Volym, längd och en intensivare blick. Anpassas efter önskad längd, tjocklek och böjning.",
        campaign: true,
      },
      {
        name: "Mixfransar – nytt set",
        price: "765 kr",
        oldPrice: "900 kr",
        time: "120 min",
        description: "En kombination av singel- och volymfransar för en naturlig men fyllig look.",
        campaign: true,
      },
      {
        name: "Singelfransar – nytt set",
        price: "680 kr",
        oldPrice: "800 kr",
        time: "90 min",
        description: "En syntetisk frans appliceras på varje naturlig frans för ett elegant och naturligt resultat.",
        campaign: true,
      },
      {
        name: "Wispy Lashes / Wet Look – nytt set",
        price: "893 kr",
        oldPrice: "1 050 kr",
        time: "120 min",
        description: "Markerad Wispy-effekt med volym- och singelfransar.",
        campaign: true,
      },
      {
        name: "Borttagning + nytt set volymfransar",
        price: "935 kr",
        oldPrice: "1 100 kr",
        time: "145 min",
        campaign: true,
      },
      {
        name: "Borttagning + nytt set mixfransar",
        price: "850 kr",
        oldPrice: "1 000 kr",
        time: "145 min",
        campaign: true,
      },
      {
        name: "Borttagning + nytt set singelfransar",
        price: "765 kr",
        oldPrice: "900 kr",
        time: "130 min",
        campaign: true,
      },
      {
        name: "Borttagning + Wispy Lashes",
        price: "978 kr",
        oldPrice: "1 150 kr",
        time: "145 min",
        campaign: true,
      },
      {
        name: "Borttagning + Mega volymfransar",
        price: "1 020 kr",
        oldPrice: "1 200 kr",
        time: "150 min",
        campaign: true,
      },
      {
        name: "Borttagning av fransar",
        price: "250 kr",
        time: "30 min",
      },
    ],
  },
  {
    title: "Paket – Fransförlängning + Brow Lift",
    subtitle: "Kombinera vackra fransar med välformade bryn.",
    services: [
      {
        name: "Brow Lift + volymfransar",
        price: "1 275 kr",
        oldPrice: "1 500 kr",
        time: "145 min",
        campaign: true,
      },
      {
        name: "Brow Lift + nytt set mixfransar",
        price: "1 190 kr",
        oldPrice: "1 400 kr",
        time: "145 min",
        campaign: true,
      },
      {
        name: "Brow Lift + nytt set singelfransar",
        price: "1 105 kr",
        oldPrice: "1 300 kr",
        time: "125 min",
        campaign: true,
      },
    ],
  },
  {
    title: "Påfyllning av fransförlängning",
    subtitle: "Behåll dina fransar fina och fylliga mellan behandlingarna.",
    services: [
      {
        name: "Påfyllning inom 3 veckor – Mega volym",
        price: "800 kr",
        time: "75 min",
        description: "Stor påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set.",
      },
      {
        name: "Quickfix – fransförlängning",
        price: "450 kr",
        time: "30 min",
        description: "För mindre luckor inom max 10 dagar från senaste behandlingen. Ingen rensning av gamla fransar ingår.",
      },
      {
        name: "Påfyllning inom 3 veckor – Volymfransar",
        price: "700 kr",
        time: "60 min",
        description: "Stor påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set.",
      },
      {
        name: "Påfyllning inom 3 veckor – Mixfransar",
        price: "600 kr",
        time: "60 min",
        description: "Påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set.",
      },
      {
        name: "Wispy Lashes / Wet Look – påfyllning",
        price: "650 kr",
        time: "60 min",
        description: "Påfyllning inom 3 veckor.",
      },
      {
        name: "Påfyllning inom 3 veckor – Singelfransar",
        price: "550 kr",
        time: "50 min",
        description: "Stor påfyllning inom 3 veckor. Om du har tappat en större mängd räknas det som ett nytt set.",
      },
    ],
  },
  {
    title: "Lash Lift & Brow Lift",
    subtitle: "Lyft fram dina naturliga fransar och bryn.",
    services: [
      {
        name: "Kombobehandling Lash & Brow Lift",
        price: "1 250 kr",
        time: "80 min",
        description: "Brow Lift och Lash Lift inklusive keratinbehandling, trådning av bryn och fransfärg.",
      },
      {
        name: "Lash Lift borttagning / avslappning",
        price: "200 kr",
        time: "15 min",
        description: "Korrigering av ett tidigare Lash Lift. Böjen kan tas bort helt eller mjukas upp efter bedömning.",
      },
      {
        name: "Korean Lash Lift inkl. färg av fransar",
        price: "723 kr",
        oldPrice: "850 kr",
        time: "80 min",
        description: "Definierat lyft, vacker böj och noggrann separation. Fransfärgning och vårdande avslutning ingår.",
        campaign: true,
      },
      {
        name: "Korean Lash Lift",
        price: "680 kr",
        oldPrice: "800 kr",
        time: "70 min",
        description: "Koreanskt Lash Lift med definierat lyft, vacker böj och vårdande avslutning.",
        campaign: true,
      },
      {
        name: "Korean Lash & Brow Lift inkl. färg och mask",
        price: "1 148 kr",
        oldPrice: "1 350 kr",
        time: "90 min",
        description: "Lash Lift och Brow Lift med färgning, brynformning och återfuktande mask.",
        campaign: true,
      },
      {
        name: "Brow Lift inkl. keratin och trådning",
        price: "595 kr",
        oldPrice: "700 kr",
        time: "45 min",
        description: "Brow Lift med keratinbehandling och trådning.",
        campaign: true,
      },
      {
        name: "Brow Lift inkl. trådning och färg av bryn",
        price: "638 kr",
        oldPrice: "750 kr",
        time: "60 min",
        description: "Brow Lift med trådning, färgning och keratinbehandling.",
        campaign: true,
      },
      {
        name: "Lash Lift inkl. keratin och fransfärg",
        price: "750 kr",
        time: "60 min",
        description: "Lash Lift med keratinbehandling och fransfärg.",
      },
      {
        name: "Lash Lift inkl. keratinbehandling",
        price: "700 kr",
        time: "60 min",
        description: "Ger ögonfransarna en naturlig böjning och ett lyft som vanligtvis håller i 6–8 veckor.",
      },
      {
        name: "Trådning av bryn inkl. färgning av bryn/fransar",
        price: "450 kr",
        time: "45 min",
      },
    ],
  },
  {
    title: "Trådning & färgning",
    subtitle: "Forma och framhäv dina bryn och fransar.",
    services: [
      {
        name: "Trådning av bryn och färgning",
        price: "400 kr",
        time: "25 min",
      },
      {
        name: "Trådning av hela ansiktet",
        price: "350 kr",
        time: "30 min",
      },
      {
        name: "Trådning av bryn",
        price: "300 kr",
        time: "30 min",
      },
      {
        name: "Färgning av fransar",
        price: "200 kr",
        time: "20 min",
      },
      {
        name: "Kombobehandling – trådning och färgning",
        price: "400 kr",
        time: "40 min",
        description: "Trådning av hela ansiktet inklusive färgning av fransar och bryn.",
      },
      {
        name: "Trådning överläpp",
        price: "100 kr",
        time: "10 min",
      },
    ],
  },
  {
    title: "Massage",
    subtitle: "En stund för avkoppling och återhämtning.",
    services: [
      {
        name: "Skalp + ansiktsmassage",
        price: "600 kr",
        time: "45 min",
        description: "Massage av hårbotten med händer och redskap som stimulerar blodcirkulationen och löser upp spänningar. Avslutas med en lätt ansiktsmassage med olja.",
      },
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
    <article className="flex h-full flex-col rounded-xl border border-[#D4AF37]/25 bg-[#141414] p-5 transition duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]">
      <div className="flex-1">
        {service.campaign && (
          <span className="mb-4 inline-block rounded-full bg-[#D4AF37]/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
            Kampanj till 30 november 2026
          </span>
        )}

        <h3 className="text-base font-semibold leading-6 text-white">
          {service.name}
        </h3>

        {service.description && (
          <p className="mt-3 text-sm leading-6 text-gray-300">
            {service.description}
          </p>
        )}
      </div>

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-gray-400">
            {service.time}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {service.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                {service.oldPrice}
              </span>
            )}

            <span className="text-lg font-bold text-[#D4AF37]">
              {service.price}
            </span>
          </div>
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-[#B18B38] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-black"
        >
          Boka
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#080808] px-4 py-10 md:px-6 md:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Diana Beauty • Linköping
          </p>

          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            Våra behandlingar
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Upptäck våra behandlingar inom fransar, bryn och avkoppling.
            Välj den behandling som passar dig bäst.
          </p>

          <div className="mx-auto mt-5 h-px w-16 bg-[#B18B38]" />
        </div>

        <div className="space-y-10">
          {categories.map((category, index) => (
            <div
              key={category.title}
              id={index === 0 ? "lash-extensions" : undefined}
            >
              <div className="mb-5 border-b border-[#D4AF37]/20 pb-4">
                <h3 className="font-serif text-xl text-[#D4AF37] md:text-2xl">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {category.services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#D4AF37]/25 bg-[#141414] px-5 py-8 text-center">
          <h3 className="font-serif text-xl text-white">
            Hittar du inte det du söker?
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Se hela tjänsteutbudet och lediga tider på Bokadirekt.
          </p>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-md bg-[#D4AF37] px-7 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#e7c85b]"
          >
            Se alla behandlingar
          </a>
        </div>
      </div>
    </section>
  );
}
