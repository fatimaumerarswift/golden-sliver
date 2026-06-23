"use client";

import Image from "next/image";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import { useLang } from "@/components/uselang";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const content = {
  en: {
    badge: "AI & Tech",
    title1: "AI, Semiconductors &",
    title2: "Tech-Industrial Demand",
    desc: "Track how AI infrastructure, semiconductor manufacturing, and advanced technologies are increasing industrial demand for precious metals.",
  },
  de: {
    badge: "KI & Tech",
    title1: "KI, Halbleiter &",
    title2: "Tech-Industrielle Nachfrage",
    desc: "Verfolgen Sie, wie KI-Infrastruktur, Halbleiterfertigung und fortschrittliche Technologien die industrielle Nachfrage nach Edelmetallen steigern.",
  },
};

const prices = [
  { label: "XAU/USD", value: "2,341.20 +0.4%", isPositive: true },
  { label: "XAG/USD", value: "28.45 -1.2%", isPositive: false },
  { label: "BTC/USD", value: "67,142.00 +2.1%", isPositive: true },
  { label: "EUR/USD", value: "1.0842", isPositive: null },
  { label: "XAU/USD", value: "2,341.20 +0.4%", isPositive: true },
  { label: "XAG/USD", value: "28.45 -1.2%", isPositive: false },
  { label: "XAG/USD", value: "28.45", isPositive: false },
];

export default function TechHero() {
  const lang = useLang();
  const t = content[lang];

  return (
    <>
      {/* Hero section */}
      <div className="bg-white py-8 max-w-full px-12 ">
        <div className="relative overflow-hidden rounded-xl h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px]">
          <Image
            src="/AI-tech.jpg"
            alt="Gold bars background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
            <span className={`${inter.className} inline-block bg-[#B8860B] text-black text-xs md:text-sm px-3 py-1 rounded-md w-fit mb-3 font-bold`}>
              {t.badge}
            </span>
            <h1 className={`${playfair.className} text-white text-xl md:text-3xl font-bold leading-snug`}>
              {t.title1}
            </h1>
            <h1 className={`${playfair.className} text-white text-xl md:text-3xl font-bold leading-snug`}>
              {t.title2}
            </h1>
            <p className={`${inter.className} text-white text-xs md:text-sm mt-2 max-w-xl`}>
              {t.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Price Bar */}
      <div className="w-full bg-black flex flex-wrap items-center gap-4 py-4 px-4">
        {prices.map((item, i) => (
          <>
            {i === 4 && (
              <div key="divider" className="hidden md:block h-6 w-[2px] bg-[#B8860B] rounded-md" />
            )}
            <div key={i} className="flex items-center gap-1">
              <span className={`${jetbrainsMono.className} text-white text-xs md:text-sm`}>
                {item.label}:
              </span>
              <span className={`${jetbrainsMono.className} text-xs md:text-sm ${
                item.isPositive === true
                  ? "text-emerald-500"
                  : item.isPositive === false
                  ? "text-red-500"
                  : "text-white"
              }`}>
                {item.value}
              </span>
            </div>
          </>
        ))}
      </div>
    </>
  );
}