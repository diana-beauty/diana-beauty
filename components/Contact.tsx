
import {
  Phone,
  Mail,
  AtSign,
  MapPin,
  Clock,
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-full min-w-0 bg-[#080808] px-4 py-6"
    >
      <div className="min-w-0">

        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
          Kontakt
        </p>

        <h2 className="mt-3 font-serif text-xl text-white">
          Kontakta oss
        </h2>

        <div className="mt-3 h-px w-10 bg-[#B18B38]" />

        <p className="mt-4 text-xs leading-5 text-gray-300">
          Har du frågor om våra behandlingar?
          Välkommen att kontakta Diana Beauty.
        </p>

        <div className="mt-5 space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0 text-[#D4AF37]" />

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-[#D4AF37]">
                    {item.label}
                  </p>

                  <a
                    href={item.href}
                    target={item.label === "Instagram" ? "_blank" : undefined}
                    rel={item.label === "Instagram" ? "noopener noreferrer" : undefined}
                    className="break-all text-xs text-white transition hover:text-[#D4AF37]"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            );
          })}

          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 shrink-0 text-[#D4AF37]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#D4AF37]">
                Plats
              </p>
              <p className="text-xs text-white">Linköping</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-[#D4AF37]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#D4AF37]">
                Öppettider
              </p>
              <p className="text-xs text-white">Enligt bokning</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
