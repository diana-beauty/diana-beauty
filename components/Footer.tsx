
import Image from "next/image";
import { Phone, Mail, MapPin, AtSign } from "lucide-react";

const links = [
  { title: "Hem", href: "#hero" },
  { title: "Om Diana", href: "#about" },
  { title: "Behandlingar", href: "#services" },
  { title: "Diana Beauty", href: "#gallery" },
  { title: "Omdömen", href: "#reviews" },
  { title: "Kontakt", href: "#contact" },
];

const addressUrl =
  "https://www.google.com/maps/search/?api=1&query=Engelbrektsgatan+11%2C+582+21+Link%C3%B6ping";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/25 bg-black px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/diana-logo-test.png"
              alt="Diana Beauty logotyp"
              width={180}
              height={75}
              className="block h-auto w-[140px] object-contain object-left"
            />

            <p className="mt-3 max-w-[230px] text-[11px] leading-5 text-gray-400">
              Professionella frans- och brynbehandlingar i Linköping
              med fokus på kvalitet, precision och naturlig skönhet.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Meny
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-[11px] text-gray-400 transition hover:text-[#D4AF37]"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Kontakt
            </h3>

            <div className="space-y-3">
              <a
                href="tel:+46700475204"
                className="flex items-center gap-2 text-[11px] text-gray-300 transition hover:text-[#D4AF37]"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                070-047 52 04
              </a>

              <a
                href="mailto:dianabeauty.db@gmail.com"
                className="flex items-center gap-2 break-all text-[11px] text-gray-300 transition hover:text-[#D4AF37]"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                dianabeauty.db@gmail.com
              </a>

              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[11px] leading-5 text-gray-300 transition hover:text-[#D4AF37]"
              >
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
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
                className="flex items-center gap-2 text-[11px] text-gray-300 transition hover:text-[#D4AF37]"
              >
                <AtSign className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                @dianabeauty.db
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center sm:flex-row">
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} Diana Beauty. Alla rättigheter förbehållna.
          </p>

          <p className="text-[10px] text-gray-500">
            Engelbrektsgatan 11 · Linköping
          </p>

          <p className="text-[10px] text-gray-500">
            Webbplatsen är byggd med omsorg ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
