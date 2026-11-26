
import { Check } from "lucide-react";

const features = [
  "Certifierad fransstylist sedan 2018",
  "Behandlingar anpassade efter dig",
  "Noggrannhet och kvalitetsprodukter",
  "Personligt bemötande och omtanke",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-w-0 bg-[#FAF8F3] px-4 py-8 md:px-5 md:py-10"
    >
      <div className="min-w-0">

        {/* Introduktion */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#96732D]">
          Personlig omtanke
        </p>

        {/* Rubrik */}
        <h2 className="mt-3 font-serif text-2xl leading-snug text-[#292521] md:text-3xl">
          Skönhet med omtanke och precision
        </h2>

        {/* Presentation */}
        <p className="mt-4 text-[15px] leading-7 text-[#625B52] md:text-base md:leading-8">
          Jag heter Diana och har varit certifierad fransstylist
          sedan 2018. För mig handlar varje behandling om mer
          än bara ett vackert resultat. Jag vill att du ska känna
          dig trygg, uppskattad och väl omhändertagen.
          Med noggrannhet och ett personligt bemötande anpassar
          jag varje behandling efter dina önskemål och din
          naturliga skönhet.
        </p>

        {/* Fördelar */}
        <div className="mt-6 space-y-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B18B38]/10">
                <Check className="h-4 w-4 text-[#B18B38]" />
              </span>

              <span className="text-sm leading-6 text-[#625B52] md:text-base">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Bokningsknapp */}
        <a
          href="https://www.bokadirekt.se/places/dianabeauty-52970"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md border border-[#B18B38] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#96732D] transition duration-300 hover:bg-[#B18B38] hover:text-white"
        >
          Boka behandling
        </a>

      </div>
    </section>
  );
}
