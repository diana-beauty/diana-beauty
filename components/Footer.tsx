import {
  Mail,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/30 bg-gradient-to-b from-[#0b0b0b] to-black">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Logo */}

          <div>

            <Image
              src="/images/diana-logo-test.png"
              alt="Diana Beauty"
              width={180}
              height={70}
              style={{ height: "auto" }}
            />

            <p className="mt-6 leading-8 text-gray-400">
              Exklusiva frans- och brynbehandlingar i Linköping med fokus på
              kvalitet, precision och ett naturligt elegant resultat.
            </p>

          </div>

          {/* Meny */}

          <div>

            <h3 className="mb-6 text-xl text-white">
              Meny
            </h3>

            <div className="space-y-4">

              <a href="#hero" className="block text-gray-400 transition hover:text-[#D4AF37]">
                Hem
              </a>

              <a href="#about" className="block text-gray-400 transition hover:text-[#D4AF37]">
                Om Diana
              </a>

              <a href="#services" className="block text-gray-400 transition hover:text-[#D4AF37]">
                Behandlingar
              </a>

              <a href="#gallery" className="block text-gray-400 transition hover:text-[#D4AF37]">
                Galleri
              </a>

              <a href="#reviews" className="block text-gray-400 transition hover:text-[#D4AF37]">
                Omdömen
              </a>

              <a href="#contact" className="block text-gray-400 transition hover:text-[#D4AF37]">
                Kontakt
              </a>

            </div>

          </div>

          {/* Kontakt */}

          <div>

            <h3 className="mb-6 text-xl text-white">
              Kontakt
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 text-[#D4AF37]" />

                <a
                  href="tel:+46700475204"
                  className="text-gray-400 transition hover:text-[#D4AF37] hover:underline"
                >
                  070-047 52 04
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 text-[#D4AF37]" />

                <a
                  href="mailto:dianabeauty.db@gmail.com"
                  className="text-gray-400 transition hover:text-[#D4AF37] hover:underline"
                >
                  dianabeauty.db@gmail.com
                </a>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="h-5 w-5 text-[#D4AF37]" />

                <span className="text-gray-400">
                  Engelbrektsgatan 21
                  <br />
                  582 21 Linköping
                </span>

              </div>

              <a
                href="https://www.instagram.com/dianabeauty.db"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 text-gray-400 transition hover:text-[#D4AF37]"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @dianabeauty.db
              </a>

            </div>

          </div>

          {/* Boka */}

          <div>

            <h3 className="mb-6 text-xl text-white">
              Boka online
            </h3>

            <p className="mb-8 leading-7 text-gray-400">
              Boka din behandling snabbt och enkelt via Bokadirekt.
            </p>

            <a
              href="https://www.bokadirekt.se/places/dianabeauty-52970"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#e7c85b] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <Calendar className="h-5 w-5" />
              Boka tid
            </a>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Diana Beauty. Alla rättigheter förbehållna.
            </p>

            <p>
              Designad med ❤️ för Diana Beauty
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}