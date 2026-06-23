"use client"
import Image from "next/image";
import { useLang } from "@/components/uselang";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import Loadingbar from "@/components/Loadingbar";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const content = {
  en: {
    badge: "Marco Tracing",
    title1: "Central Bank Macro-Tracking",
    title2: " & Geopolitical Forecasting",
    desc: "Analyze central bank buying trends, geopolitical shifts, and currency developments impacting the global precious metals market.",
  },
  de: {
    badge: "Makroverfolgung",
    title1: "Makro-Tracking der Zentralbanken",
    title2: " & Geopolitische Prognosen",
    desc: "Analysieren Sie Kauftrends von Zentralbanken, geopolitische Veränderungen und Währungsentwicklungen, die den globalen Edelmetallmarkt beeinflussen."
  },
};

export default function MacroHero() {
  const lang = useLang();
  const t = content[lang];
  return (
    <>
      {/* Hero section with background image */}
      <div className="bg-white py-8 max-w-full px-12">
        <div className="relative overflow-hidden rounded-xl h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px]">
          <Image
            src="/Rectangle 1.png"
            alt="Gold bars background"
            fill
            className="object-cover sm:w-2xl"
          />
          {/* black */}
          <div className="absolute inset-0 bg-black/40" />
          {/* text content */}
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
      {/* bar */}
     <Loadingbar/>
    </>
  );
}
