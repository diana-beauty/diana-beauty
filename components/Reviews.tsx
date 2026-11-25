
const reviews = [
  {
    name: "Emma",
    text: "Fantastiskt resultat! Diana är otroligt noggrann och professionell. Jag kommer definitivt tillbaka.",
  },
  {
    name: "Sara",
    text: "Mina fransar blev precis som jag önskade. Lugn miljö och ett perfekt bemötande.",
  },
  {
    name: "Linda",
    text: "Bästa salongen i Linköping! Jag är supernöjd med både lash lift och brow lift.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="h-full min-w-0 bg-[#080808] px-3 py-6"
    >
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
          Kundernas ord
        </p>

        <h2 className="mt-3 font-serif text-xl text-white">
          Vad våra kunder säger
        </h2>

        <div className="mt-3 h-px w-10 bg-[#B18B38]" />

        <div className="mt-5 space-y-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-md border border-[#D4AF37]/20 bg-[#141414] p-3 transition hover:border-[#D4AF37]/50"
            >
              <div
                className="text-sm tracking-wider text-[#D4AF37]"
                aria-label="5 av 5 stjärnor"
              >
                ★★★★★
              </div>

              <p className="mt-2 text-[11px] leading-5 text-gray-300">
                ”{review.text}”
              </p>

              <div className="mt-3 border-t border-white/10 pt-2">
                <p className="text-[11px] font-semibold text-white">
                  {review.name}
                </p>
                <p className="text-[9px] text-gray-500">
                  Kund hos Diana Beauty
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
