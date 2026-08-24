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
    price: "1000 kr",
    time: "120 min",
    image: "/images/service-volume.jpg",
    text: "Maximal fyllighet med en dramatisk look.",
  },
  {
    title: "Wispy / Wet Look",
    price: "1000 kr",
    time: "120 min",
    image: "/images/service-wispy.jpg",
    text: "Trendig stil med luftiga och markerade fransar.",
  },
  {
    title: "Lash Lift",
    price: "650 kr",
    time: "60 min",
    image: "/images/service-lashlift.jpg",
    text: "Naturligt lyft och böj av dina egna fransar.",
  },
  {
    title: "Brow Lift",
    price: "650 kr",
    time: "60 min",
    image: "/images/service-browlift.jpg",
    text: "Perfekt formade bryn med ett naturligt lyft.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0b0b0b] py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
            Våra behandlingar
          </p>

          <h2 className="mt-4 text-5xl font-light text-white">
            Exklusiva behandlingar
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Professionella frans- och brynbehandlingar med fokus på kvalitet,
            precision och ett naturligt elegant resultat.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-[#171717] transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-[0_25px_70px_rgba(212,175,55,0.30)]"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-[#D4AF37] px-5 py-2 font-bold text-black shadow-xl">
                  {service.price}
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-semibold text-white transition duration-300 group-hover:text-[#D4AF37]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.text}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-medium text-[#D4AF37]">
                    {service.time}
                  </span>

                  <a
                    href="#contact"
                    className="rounded-full border border-[#D4AF37] px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                  >
                    Boka
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}