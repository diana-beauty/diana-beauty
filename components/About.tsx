import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111111] py-28 px-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Bild */}
        <div className="group relative h-[650px] overflow-hidden rounded-3xl border border-[#D4AF37]/20 shadow-2xl">

          <Image
            src="/images/about.jpg"
            alt="Diana Beauty"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        </div>

        {/* Text */}
        <div>

          <p className="text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
            Om Diana Beauty
          </p>

          <h2 className="mt-5 text-5xl font-extralight leading-tight text-white lg:text-6xl">
            Skönhet handlar om
            <br />
            <span className="italic text-[#D4AF37]">
              detaljer.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            På Diana Beauty står kvalitet, precision och personlig service i fokus.
            Varje behandling anpassas efter dina önskemål för att framhäva din
            naturliga skönhet med ett hållbart och elegant resultat.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-10">

            <div>
              <h3 className="text-4xl font-bold text-[#D4AF37]">
                2018
              </h3>

              <p className="mt-2 text-gray-400">
                Certifierad sedan
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#D4AF37]">
                300+
              </h3>

              <p className="mt-2 text-gray-400">
                Nöjda kunder
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#D4AF37]">
                Premium
              </h3>

              <p className="mt-2 text-gray-400">
                Produkter
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#D4AF37]">
                Linköping
              </h3>

              <p className="mt-2 text-gray-400">
                Salong
              </p>
            </div>

          </div>

          <a
            href="https://www.bokadirekt.se/places/dianabeauty-52970"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-flex rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#e7c85b] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          >
            Boka din tid
          </a>

          <p className="mt-10 text-sm italic tracking-[0.2em] text-[#D4AF37]/80">
            Diana Beauty • Lash & Brow Artist • Linköping
          </p>

        </div>

      </div>
    </section>
  );
}