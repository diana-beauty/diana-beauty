import {
  Phone,
  Mail,
  AtSign,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B0B0B] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Rubrik */}

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
            Kontakt
          </p>

          <h2 className="mt-5 text-5xl font-extralight text-white lg:text-6xl">
            Boka din{" "}
            <span className="italic text-[#D4AF37]">
              behandling
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Har du frågor eller vill boka en tid? Kontakta Diana Beauty
            eller boka enkelt online via Bokadirekt.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Kontaktkort */}

          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#171717] p-10 shadow-2xl">

            <h3 className="mb-10 text-3xl font-light text-white">
              Kontaktuppgifter
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <Phone className="h-6 w-6 text-[#D4AF37]" />

                <div>

                  <p className="text-sm uppercase tracking-wider text-[#D4AF37]">
                    Telefon
                  </p>

                  <a
                    href="tel:+46700475204"
                    className="text-lg text-white transition hover:text-[#D4AF37]"
                  >
                    070-047 52 04
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <Mail className="h-6 w-6 text-[#D4AF37]" />

                <div>

                  <p className="text-sm uppercase tracking-wider text-[#D4AF37]">
                    E-post
                  </p>

                  <a
                    href="mailto:dianabeauty.db@gmail.com"
                    className="text-lg text-white transition hover:text-[#D4AF37]"
                  >
                    dianabeauty.db@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <AtSign className="h-6 w-6 text-[#D4AF37]" />

                <div>

                  <p className="text-sm uppercase tracking-wider text-[#D4AF37]">
                    Instagram
                  </p>

                  <a
                    href="https://www.instagram.com/dianabeauty.db"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white transition hover:text-[#D4AF37]"
                  >
                    @dianabeauty.db
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <MapPin className="h-6 w-6 text-[#D4AF37]" />

                <div>

                  <p className="text-sm uppercase tracking-wider text-[#D4AF37]">
                    Plats
                  </p>

                  <p className="text-lg text-white">
                    Linköping
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <Clock className="h-6 w-6 text-[#D4AF37]" />

                <div>

                  <p className="text-sm uppercase tracking-wider text-[#D4AF37]">
                    Öppettider
                  </p>

                  <p className="text-lg text-white">
                    Enligt bokning
                  </p>

                </div>

              </div>

            </div>

            <a
              href="https://www.bokadirekt.se/places/dianabeauty-52970"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#e7c85b] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              Boka tid
            </a>

          </div>

          {/* Google Maps */}

          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20 shadow-2xl">

            <iframe
              title="Diana Beauty Linköping"
              src="https://www.google.com/maps?q=Link%C3%B6ping&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[550px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>
    </section>
  );
}