
"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const treatments = [
  { name: "Singelfransar", price: "800 kr", time: "90 min" },
  { name: "Mixfransar", price: "900 kr", time: "105 min" },
  { name: "Mega Volym", price: "1 000 kr", time: "120 min" },
  { name: "Påfyllning", price: "600 kr", time: "60 min" },
  { name: "Brow Lift", price: "650 kr", time: "60 min" },
  { name: "Lash Lift", price: "650 kr", time: "60 min" },
];

const bookingUrl =
  "https://www.bokadirekt.se/places/dianabeauty-52970";

export default function BookingPanel() {
  const [selected, setSelected] = useState("Singelfransar");

  return (
    <section
      id="booking"
      className="w-full rounded-2xl border border-[#D4AF37]/30 bg-[#FAF8F3] p-5 text-[#292521] shadow-lg"
    >
      <div className="mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A8873E]">
          Diana Beauty
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Boka din behandling
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Välj din behandling och fortsätt till bokningen.
        </p>
      </div>

      {/* Bokningssteg */}
      <div className="mb-5 grid grid-cols-4 gap-2">
        {[
          { icon: CalendarDays, title: "Behandling" },
          { icon: CalendarDays, title: "Datum" },
          { icon: Clock, title: "Tid" },
          { icon: CheckCircle2, title: "Bekräftelse" },
        ].map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="rounded-lg border border-[#E5D9C5] bg-white p-2 text-center"
            >
              <Icon className="mx-auto h-5 w-5 text-[#B18B38]" />

              <p className="mt-2 text-[10px] font-semibold">
                {index + 1}. {step.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Behandlingar */}
      <div className="rounded-xl border border-[#E5D9C5] bg-white p-4">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">
          Välj behandling
        </h3>

        <div className="space-y-2">
          {treatments.map((treatment) => (
            <button
              key={treatment.name}
              type="button"
              aria-pressed={selected === treatment.name}
              onClick={() => setSelected(treatment.name)}
              className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition ${
                selected === treatment.name
                  ? "border-[#B18B38] bg-[#F5EEDC]"
                  : "border-[#EEE9DF] bg-[#FAF8F3] hover:border-[#B18B38]"
              }`}
            >
              <div>
                <p className="text-sm font-semibold">
                  {treatment.name}
                </p>

                <p className="text-xs text-gray-500">
                  {treatment.time}
                </p>
              </div>

              <span className="text-sm font-bold text-[#96732D]">
                {treatment.price}
              </span>
            </button>
          ))}
        </div>

        {/* Vald behandling */}
        <div className="mt-4 rounded-lg bg-[#F5EEDC] p-3">
          <p className="text-xs text-gray-600">
            Din valda behandling
          </p>

          <p className="font-semibold">{selected}</p>
        </div>

        {/* Fortsätt till Bokadirekt */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#B18B38] px-6 py-3 font-semibold text-white transition hover:bg-[#96732D]"
        >
          Fortsätt till bokning
          <ArrowRight size={18} />
        </a>

        <p className="mt-3 text-center text-xs text-gray-500">
          Datum, lediga tider och bokningsbekräftelse hanteras hos Bokadirekt.
        </p>
      </div>
    </section>
  );
}
