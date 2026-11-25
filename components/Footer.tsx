
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

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/25 bg-black px-4 py-7">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-[1.2fr_1fr_1.2fr]">

          {/* Diana Beauty */}
          <div>
            <Image
              src="/images/diana-logo-test.png"
              alt="Diana Beauty"
              width={130}
              height={55}
              className="h-auto w-[115px]"
            />

            <p className="mt-3 max-w-[230px] text-[11px] leading-5 text-gray-400">
              Professionella frans- och brynbehandlingar i Linköping
              med fokus på kvalitet och naturlig skönhet.
            </p>
          </div>

          {/* Meny */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Meny
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
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

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Kontakt
            </h3>

            <div className="space-y-3">
              <a
                href="tel:+46700475204"
                className="flex items-center gap-2 text-[11px] text-gray-300 hover:text-[#D4AF37]"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                070-047 52 04
              </a>

              <a
                href="mailto:dianabeauty.db@gmail.com"
                className="flex items-center gap-2 break-all text-[11px] text-gray-300 hover:text-[#D4AF37]"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                dianabeauty.db@gmail.com
              </a>

              <div className="flex items-center gap-2 text-[11px] text-gray-300">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                Linköping
              </div>

              <a
                href="https://www.instagram.com/dianabeauty.db"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] text-gray-300 hover:text-[#D4AF37]"
              >
                <AtSign className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                @dianabeauty.db
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-7 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center sm:flex-row">
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} Diana Beauty. Alla rättigheter förbehållna.
          </p>

          <div className="flex gap-4 text-[10px] text-gray-500">
            <a href="#contact" className="hover:text-[#D4AF37]">
              Integritetspolicy
            </a>
            <a href="#contact" className="hover:text-[#D4AF37]">
              Användarvillkor
            </a>
          </div>

          <p className="text-[10px] text-gray-500">
            Webbplatsen är byggd med omsorg ♥
          </p>
        </div>

      </div>
    </footer>
  );
}
