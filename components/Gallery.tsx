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
      className="bg-[#0b0b0b] py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
            Galleri
          </p>

          <h2 className="mt-5 text-5xl font-extralight text-white lg:text-6xl">
            Våra tidigare
            <span className="italic text-[#D4AF37]">
              {" "}behandlingar
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Ett urval av behandlingar utförda med precision,
            kvalitet och fokus på ett naturligt elegant resultat.
          </p>

        </div>

        {/* Gallery */}

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">

          {images.map((src, i) => (

            <div
              key={i}
              onClick={() => setIndex(i)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-[#D4AF37]/20 shadow-xl transition-all duration-500 hover:border-[#D4AF37]/60"
            >

              <div className="relative overflow-hidden">

                <Image
                  src={src}
                  alt={`Galleri ${i + 1}`}
                  width={700}
                  height={900}
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                  <p className="text-xl font-semibold text-white">
                    Diana Beauty
                  </p>

                  <span className="text-sm tracking-[0.2em] uppercase text-[#D4AF37]">
                    Klicka för att förstora
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />

    </section>
  );
}