
import { Check } from "lucide-react";

const features = [
  "Certifierad fransstylist sedan 2018",
  "Hög kvalitet på produkter",
  "Personlig service",
  "Trygghet och omsorg",
];

export default function About() {
  return (
    <section
      id="about"
      className="h-full min-w-0 bg-[#080808] px-4 py-6"
    >
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
          Om Diana Beauty
        </p>

        <h2 className="mt-3 font-serif text-xl leading-snug text-white">
          Skönhet med känsla för detaljer
        </h2>

        <p className="mt-3 text-xs leading-6 text-gray-300">
          Jag heter Diana och är certifierad fransstylist sedan 2018.
          Mitt mål är att du ska känna dig trygg, väl omhändertagen
          och nöjd med resultatet vid varje behandling.
        </p>

        <div className="mt-4 space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
              <span className="text-[11px] leading-5 text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <a
          href="https://www.bokadirekt.se/places/dianabeauty-52970"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center rounded-sm border border-[#B18B38] px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-[#D4AF37] transition hover:bg-[#B18B38] hover:text-black"
        >
          Boka behandling
        </a>

        <p className="mt-4 text-[10px] italic text-[#D4AF37]/80">
          Diana Beauty · Linköping
        </p>
      </div>
    </section>
  );
}
