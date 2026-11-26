
import {
  Phone,
  Mail,
  AtSign,
  MapPin,
  Clock,
  CalendarDays,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "070-047 52 04",
    href: "tel:+46700475204",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "dianabeauty.db@gmail.com",
    href: "mailto:dianabeauty.db@gmail.com",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@dianabeauty.db",
    href: "https://www.instagram.com/dianabeauty.db",
  },
];

const address = "Engelbrektsgatan 11, 582 21 Linköping";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-full min-w-0 bg-[#FAF8F3] px-4 py-6"
    >
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#96732D]">
          Kontakt
        </p>

        <h2 className="mt-3 font-serif text-xl text-[#292521]">
          Kontakta oss
        </h2>

        <div className="mt-3 h-px w-10 bg-[#B18B38]" />

        <p className="mt-4 text-xs leading-5 text-[#625B52]">
          Har du frågor om våra behandlingar?
          Välkommen att kontakta Diana Beauty.
        </p>

        <div className="mt-5 space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0 text-[#B18B38]" />

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-[#96732D]">
                    {item.label}
                  </p>

                  <a
                    href={item.href}
                    target={item.label === "Instagram" ? "_blank" : undefined}
                    rel={
                      item.label === "Instagram"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="break-all text-xs text-[#292521] transition hover:text-[#B18B38]"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            );
          })}

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B18B38]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#96732D]">
                Besöksadress
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Engelbrektsgatan+11%2C+582+21+Link%C3%B6ping"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs leading-5 text-[#292521] transition hover:text-[#B18B38]"
              >
                Engelbrektsgatan 11
                <br />
                582 21 Linköping
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-[#B18B38]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#96732D]">
                Öppettider
              </p>
              <p className="text-xs text-[#292521]">Enligt bokning</p>
            </div>
          </div>
        </div>

        <a
          href="https://www.bokadirekt.se/places/dianabeauty-52970"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#B18B38] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#96732D]"
        >
          <CalendarDays className="h-4 w-4" />
          Boka en tid
        </a>
      </div>
    </section>
  );
}
