
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="flex items-center bg-[#080808] px-5 py-10 md:px-6"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Diana Beauty
        </p>

        <h2 className="mt-3 font-serif text-2xl text-white md:text-3xl">
          Skönhet med känsla för detaljer
        </h2>

        <div className="mx-auto mt-3 h-px w-12 bg-[#B18B38]" />

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-400">
          Varje behandling anpassas efter dina önskemål och förutsättningar.
          Vårt fokus är kvalitet, precision och ett resultat som framhäver
          din naturliga skönhet.
        </p>

        <a
          href="https://www.instagram.com/dianabeauty.db"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-sm border border-[#B18B38] px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#B18B38] hover:text-black"
        >
          Följ Diana Beauty på Instagram
        </a>
      </div>
    </section>
  );
}
