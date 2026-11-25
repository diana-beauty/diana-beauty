
"use client";

import Image from "next/image";

const services = [
  {
    title: "Singelfransar",
    price: "800 kr",
    time: "90 min",
    image: "/images/service-single.jpg",
    text: "Naturlig elegans som framhäver dina ögon.",
  },
  {
    title: "Mixfransar",
    price: "900 kr",
    time: "105 min",
    image: "/images/service-mix.jpg",
    text: "Perfekt balans mellan naturligt och fylligt.",
  },
  {
    title: "Mega Volym",
    price: "1 000 kr",
    time: "120 min",
    image: "/images/service-volume.jpg",
    text: "Maximal fyllighet med en dramatisk look.",
  },
  {
    title: "Påfyllning",
    price: "600 kr",
    time: "60 min",
    image: "/images/service-single.jpg",
    text: "Förläng livslängden på dina fransar.",
  },
  {
    title: "Wispy / Wet Look",
    price: "1 000 kr",
    time: "120 min",
    image: "/images/service-wispy.jpg",
    text: "Luftiga och markerade fransar.",
  },
  {
    title: "Lash Lift",
    price: "650 kr",
    time: "60 min",
    image: "/images/service-lashlift.jpg",
    text: "Naturligt lyft av dina egna fransar.",
  },
  {
    title: "Brow Lift",
    price: "650 kr",
    time: "60 min",
    image: "/images/service-browlift.jpg",
    text: "Formade bryn med ett naturligt lyft.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#080808] px-4 py-8 md:px-5 md:py-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Rubrik */}
        <div className="mb-7 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Våra populära behandlingar
          </p>

          <h2 className="mt-2 font-serif text-2xl text-white md:text-3xl">
            Exklusiva behandlingar
          </h2>

          <div className="mx-auto mt-2 h-px w-12 bg-[#B18B38]" />
        </div>

        {/* Behandlingskort */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">

          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-lg border border-[#D4AF37]/20 bg-[#141414] transition duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.12)]"
            >
              {/* Bild */}
              <div className="relative h-24 overflow-hidden sm:h-28">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 15vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute right-1.5 top-1.5 rounded-full bg-[#D4AF37] px-2 py-1 text-[9px] font-bold text-black">
                  {service.price}
                </div>
              </div>

              {/* Information */}
              <div className="p-2 sm:p-3">
                <h3 className="text-xs font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-1 min-h-8 text-[9px] leading-4 text-gray-400">
                  {service.text}
                </p>

                <div className="mt-2 flex items-center justify-between gap-1 border-t border-white/10 pt-2">
                  <span className="text-[9px] text-[#D4AF37]">
                    {service.time}
                  </span>

                  <a
                    href="#booking"
                    className="rounded-full border border-[#B18B38] px-3 py-1 text-[9px] font-semibold text-white transition hover:bg-[#B18B38] hover:text-black"
                  >
                    Boka
                  </a>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Visa alla */}
        <div className="mt-5 text-center">
          <a
            href="#contact"
            className="inline-block rounded-sm border border-[#B18B38] px-5 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#B18B38] hover:text-black"
          >
            Fråga om behandlingar
          </a>
        </div>

      </div>
    </section>
  );
}
