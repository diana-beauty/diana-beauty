import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Emma",
    role: "Verifierad kund",
    text: "Fantastiskt resultat! Diana är otroligt noggrann och professionell. Jag kommer definitivt tillbaka.",
  },
  {
    name: "Sara",
    role: "Verifierad kund",
    text: "Mina fransar blev precis som jag önskade. Lugn miljö och ett perfekt bemötande.",
  },
  {
    name: "Linda",
    role: "Verifierad kund",
    text: "Bästa salongen i Linköping! Jag är supernöjd med både lash lift och brow lift.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#111111] py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Rubrik */}
        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
            Omdömen
          </p>

          <h2 className="mt-5 text-5xl font-extralight text-white lg:text-6xl">
            Vad våra
            <span className="italic text-[#D4AF37]">
              {" "}kunder säger
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Vi är stolta över våra kunders förtroende och strävar alltid efter
            att leverera ett resultat som överträffar förväntningarna.
          </p>

        </div>

        {/* Kort */}
        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="group rounded-3xl border border-[#D4AF37]/20 bg-[#171717] p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
            >

              <Quote className="mb-6 h-10 w-10 text-[#D4AF37]" />

              <div className="mb-6 text-2xl tracking-wider text-[#D4AF37]">
                ★★★★★
              </div>

              <p className="leading-8 text-gray-300">
                "{review.text}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <h3 className="font-semibold text-white">
                  {review.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {review.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}