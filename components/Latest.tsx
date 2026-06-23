"use client"
import Image from "next/image";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import { useLang } from "@/components/uselang";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const content = {
  en: {
    heading: "Latest",
    headingAccent: "Insights",
    headingRest: "& Updates",
    subheading:
      "Expert analysis, market movements, and emerging opportunities across gold, silver, and the broader economic landscape.",
    browseAll: "Browse all articles",
    cards: [
      {
        image: "/image.png",
        badge: "BEARISH ▼",
        badgeColor: "bg-red-500 hover:bg-red-700",
        category: "MACRO INSIGHT",
        title: "Central Banks Continue Gold Buying Trend",
        desc: "Reserve accumulation remains strong as global institutions seek stability amid economic uncertainty.",
      },
      {
        image: "/image1.png",
        badge: "BULLISH ▲",
        badgeColor: "bg-green-500 hover:bg-green-700",
        category: "ENERGY",
        title: "Solar Expansion Drives Silver Demand Higher",
        desc: "Growing renewable energy projects continue to increase industrial silver consumption worldwide.",
      },
      {
        image: "/image1.png",
        badge: "BULLISH ▲",
        badgeColor: "bg-green-500 hover:bg-green-700",
        category: "SCRAP METAL",
        title: "German Bullion Sales Reach New Monthly High",
        desc: "Investor interest in physical gold and silver remains elevated across retail markets.",
      },
    ],
  },
  de: {
    heading: "Aktuelle",
    headingAccent: "Einblicke",
    headingRest: "& Updates",
    subheading:
      "Expertenanalysen, Marktbewegungen und neue Chancen rund um Gold, Silber und die globale Wirtschaftslandschaft.",
    browseAll: "Alle Artikel ansehen",
    cards: [
      {
        image: "/image.png",
        badge: "BÄRISCH ▼",
        badgeColor: "bg-red-500 hover:bg-red-700",
        category: "MAKRO-EINBLICK",
        title: "Zentralbanken setzen Goldkäufe fort",
        desc: "Der Reserveaufbau bleibt stark, da globale Institutionen angesichts wirtschaftlicher Unsicherheit Stabilität suchen.",
      },
      {
        image: "/image1.png",
        badge: "BULLISCH ▲",
        badgeColor: "bg-green-500 hover:bg-green-700",
        category: "ENERGIE",
        title: "Solarausbau treibt Silbernachfrage weiter an",
        desc: "Wachsende Projekte im Bereich erneuerbare Energien erhöhen weltweit den industriellen Silberverbrauch.",
      },
      {
        image: "/image1.png",
        badge: "BULLISCH ▲",
        badgeColor: "bg-green-500 hover:bg-green-700",
        category: "SCHROTTMETALL",
        title: "Deutsche Edelmetallverkäufe erreichen neuen Monatshöchststand",
        desc: "Das Anlegerinteresse an physischem Gold und Silber bleibt auf den Privatkundenmärkten erhöht.",
      },
    ],
  },
} as const;

type Lang = keyof typeof content;

export default function Latest() {
  const lang = useLang()
  const t = content[lang];

  return (
    <section className="w-full py-16 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-black">
          {t.heading} <span className="text-[#B8860B]">{t.headingAccent}</span> {t.headingRest}
        </h2>
        <p className="text-black text-sm md:text-base mt-4 max-w-2xl mx-auto">
          {t.subheading}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {t.cards.map((card, i) => (
          <article
            key={i}
            className="border border-black-200 rounded-xl overflow-hidden bg-white"
          >
            <div className="relative">
              <Image
                src={card.image}
                alt={card.title}
                width={380}
                height={220}
                className="w-full h-[220px] object-cover"
              />
              <span
                className={`absolute top-3 left-3 ${card.badgeColor}
                            text-white text-xs px-2 py-1 rounded
                            transition-colors duration-200`}
              >
                {card.badge}
              </span>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h4 className="text-[#B8860B] font-bold text-xs tracking-widest uppercase">
                {card.category}
              </h4>
              <h3 className={`${playfair.className} text-lg text-black font-medium w-xl leading-snug`}>
                {card.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="text-[#B8860B] text-2xl underline  rounded-md px-6 py-2
                     hover:bg-[#B8860B] hover:text-black hover:no-underline
                     transition-colors duration-200"
        >
          {t.browseAll}
        </button>
      </div>
    </section>
  );
}