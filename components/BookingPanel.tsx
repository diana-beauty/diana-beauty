
import {
  CalendarDays,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

const bookingUrl =
  "https://www.bokadirekt.se/places/dianabeauty-52970#services";

const categories = [
  {
    title: "Nytt set fransförlängning",
    description: "Singel, mix, volym, mega volym och wispy.",
  },
  {
    title: "Påfyllning",
    description: "Påfyllning och Quickfix.",
  },
  {
    title: "Lash Lift & Brow Lift",
    description: "Lyft, färgning och keratinbehandlingar.",
  },
  {
    title: "Paketbehandlingar",
    description: "Kombinera fransförlängning och Brow Lift.",
  },
  {
    title: "Trådning & färgning",
    description: "Forma och framhäv bryn och fransar.",
  },
  {
    title: "Massage",
    description: "Skalp- och ansiktsmassage.",
  },
];

export default function BookingPanel() {
  return (
    <section
      id="booking"
      className="w-full rounded-2xl border border-[#D4AF37]/30 bg-[#FAF8F3] p-5 text-[#292521] shadow-lg"
    >
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A8873E]">
          Diana Beauty
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Boka din behandling
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Hitta behandlingen som passar dig och boka din tid enkelt online.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-[#E5D9C5] bg-white p-3 text-center">
          <Sparkles className="mx-auto h-5 w-5 text-[#B18B38]" />
          <p className="mt-2 text-[10px] font-semibold">
            Behandling
          </p>
        </div>

        <div className="rounded-lg border border-[#E5D9C5] bg-white p-3 text-center">
          <CalendarDays className="mx-auto h-5 w-5 text-[#B18B38]" />
          <p className="mt-2 text-[10px] font-semibold">
            Datum & tid
          </p>
        </div>

        <div className="rounded-lg border border-[#E5D9C5] bg-white p-3 text-center">
          <CheckCircle2 className="mx-auto h-5 w-5 text-[#B18B38]" />
          <p className="mt-2 text-[10px] font-semibold">
            Bekräftelse
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-[#E5D9C5] bg-white p-4">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">
          Våra behandlingar
        </h3>

        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-[#EEE9DF] bg-[#FAF8F3] p-3"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-[#B18B38]" />
                <p className="text-sm font-semibold">
                  {category.title}
                </p>
              </div>

              <p className="ml-6 mt-1 text-xs leading-5 text-gray-500">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-[#F5EEDC] p-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#96732D]" />
            <p className="text-xs font-semibold">
              Boka när det passar dig
            </p>
          </div>

          <p className="mt-2 text-xs leading-5 text-gray-600">
            Se aktuella priser, behandlingstider och lediga tider
            direkt i bokningssystemet.
          </p>
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#B18B38] px-6 py-3 font-semibold text-white transition hover:bg-[#96732D]"
        >
          Boka din tid
          <ArrowRight size={18} />
        </a>

        <p className="mt-3 text-center text-xs text-gray-500">
          Bokningen hanteras säkert via Bokadirekt.
        </p>
      </div>
    </section>
  );
}
