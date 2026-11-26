
import Image from "next/image";
import { Phone, Mail, MapPin, AtSign } from "lucide-react";

const links = [
  { title: "Hem", href: "#hero" },
  { title: "Om Diana", href: "#about" },
  { title: "Behandlingar", href: "#services" },
  { title: "Galleri", href: "#gallery" },
  { title: "Omdömen", href: "#reviews" },
  { title: "Kontakt", href: "#contact" },
];

const addressUrl =
  "https://www.google.com/maps/search/?api=1&query=Engelbrektsgatan+11%2C+582+21+Link%C3%B6ping";

const logoPath = "/images/diana-beauty-new-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/30 bg-[#FAF8F3] px-5 py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_1fr_1.2fr] md:gap-12">

          {/* Ny logotyp och presentation */}
          <div>
            <a
              href="#hero"
              aria-label="Diana Beauty – startsida"
              className="inline-flex"
            >
              <Image
                src={logoPath}
                alt="Diana Beauty logotyp"
                width={240}
                height={110}
                className="block h-auto w-[155px] object-contain object-left md:w-[175px]"
              />
            </a>

            <p className="mt-4 max-w-[290px] text-[15px] leading-7 text-[#625B52]">
              Professionella frans- och brynbehandlingar i Linköping
              med fokus på kvalitet, precision och naturlig skönhet.
            </p>
          </div>

          {/* Meny */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#96732D]">
              Meny
            </h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-sm text-[#625B52] transition duration-300 hover:text-[#B18B38] md:text-base"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#96732D]">
              Kontakt
            </h3>

            <div className="space-y-4">
              <a
                href="tel:+46700475204"
                className="flex items-center gap-3 text-sm text-[#625B52] transition hover:text-[#B18B38] md:text-base"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#B18B38]" />
                070-047 52 04
              </a>

              <a
                href="mailto:dianabeauty.db@gmail.com"
                className="flex items-center gap-3 break-all text-sm text-[#625B52] transition hover:text-[#B18B38] md:text-base"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#B18B38]" />
                dianabeauty.db@gmail.com
              </a>

              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-[#625B52] transition hover:text-[#B18B38] md:text-base"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#B18B38]" />
                <span>
                  Engelbrektsgatan 11
                  <br />
                  582 21 Linköping
                </span>
              </a>

              <a
                href="https://www.instagram.com/dianabeauty.db"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#625B52] transition hover:text-[#B18B38] md:text-base"
              >
                <AtSign className="h-5 w-5 shrink-0 text-[#B18B38]" />
                @dianabeauty.db
              </a>
            </div>
          </div>
        </div>

        {/* Nedersta delen */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#D4AF37]/25 pt-6 text-center sm:flex-row">
          <p className="text-xs leading-6 text-[#81786D]">
            © {new Date().getFullYear()} Diana Beauty. Alla rättigheter förbehållna.
          </p>

          <p className="text-xs text-[#81786D]">
            Engelbrektsgatan 11 · Linköping
          </p>

          <p className="text-xs text-[#81786D]">
            Webbplatsen är byggd med omsorg ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
