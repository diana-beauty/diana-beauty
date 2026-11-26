
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
      className="min-w-0 bg-[#FAF8F3] px-5 py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Sektionsrubrik */}
        <div className="mb-10 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#96732D]">
            Kundernas ord
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#292521] sm:text-4xl">
            Vad våra kunder säger
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#B18B38]" />
        </div>

        {/* Recensionskort */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-[#D4AF37]/25 bg-white p-7 shadow-[0_4px_20px_rgba(41,37,33,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B18B38]/60 hover:shadow-[0_10px_30px_rgba(41,37,33,0.08)] md:p-8"
            >
              <div
                className="text-xl tracking-[0.16em] text-[#B18B38]"
                aria-label="5 av 5 stjärnor"
              >
                ★★★★★
              </div>

              <p className="mt-6 flex-1 text-[16px] leading-8 text-[#625B52]">
                ”{review.text}”
              </p>

              <div className="mt-7 border-t border-[#EAE2D5] pt-5">
                <p className="font-serif text-xl text-[#292521]">
                  {review.name}
                </p>

                <p className="mt-2 text-[13px] font-medium tracking-wide text-[#96732D]">
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
