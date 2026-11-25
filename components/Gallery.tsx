
"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      id="gallery"
      className="bg-[#080808] px-4 py-8 md:px-5"
    >
      <div className="mx-auto max-w-7xl">

        {/* Rubrik */}
        <div className="mb-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Galleri
          </p>

          <h2 className="mt-2 font-serif text-2xl text-white">
            Våra arbeten
          </h2>

          <div className="mx-auto mt-2 h-px w-10 bg-[#B18B38]" />
        </div>

        {/* Bildrutnät */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Visa bild ${i + 1} större`}
              className="group relative aspect-square overflow-hidden rounded-md border border-[#D4AF37]/20 bg-[#141414] transition hover:border-[#D4AF37]"
            >
              <Image
                src={src}
                alt={`Frans- och brynbehandling ${i + 1} – Diana Beauty`}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
            </button>
          ))}
        </div>

        {/* Visa fler bilder */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setIndex(0)}
            className="rounded-sm border border-[#B18B38] px-5 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#B18B38] hover:text-black"
          >
            Se fler bilder
          </button>
        </div>

      </div>

      {/* Förstorad bild */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
}
