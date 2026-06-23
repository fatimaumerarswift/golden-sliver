"use client";

import { useState } from "react";
import { useLang } from "@/components/uselang";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const content = {
  en: {
    categories: [
      { label: "Macro Tracking", img: "/img1.jpg" },
      { label: "Green Energy", img: "/img2.jpg" },
      { label: "Scrap Metal", img: "/img3.jpg" },
      { label: "Goldsmith", img: "/img4.jpg" },
      { label: "AI & Tech", img: "/img5.jpg" },
      { label: "Numismatics", img: "/img6.jpg" },
      { label: "Home Storage", img: "/img7.jpg" },
      { label: "Coins & Bars", img: "/img11.jpg" },
      { label: "Estate", img: "/img10.jpg" },
      { label: "Off-Grid Security", img: "/img12.jpg" },
      { label: "Jewelry Resale", img: "/img8.jpg" },
      { label: "Metal Detecting", img: "/img9.jpg" },
    ],
    featured: {
      tag: "Macro Tracing",
      title: "Gold Surges as Central Banks Increase Strategic Reserves",
      excerpt:
        "As central banks accelerate their shift back to physical reserves, we explore why gold remains the ultimate hedge against systemic volatility.",
      cta: "Read More",
      img: "/img1.jpg",
    },
  },
  de: {
    categories: [
      { label: "Makro-Tracking", img: "/img1.jpg" },
      { label: "Grüne Energie", img: "/img2.jpg" },
      { label: "Schrottmetall", img: "/img3.jpg" },
      { label: "Goldschmied", img: "/img4.jpg" },
      { label: "KI & Technologie", img: "/img5.jpg" },
      { label: "Numismatik", img: "/img6.jpg" },
      { label: "Heimlagerung", img: "/img7.jpg" },
      { label: "Münzen & Barren", img: "/img11.jpg" },
      { label: "Nachlass", img: "/img10.jpg" },
      { label: "Autarke Sicherheit", img: "/img2.jpg" },
      { label: "Schmuck-Weiterverkauf", img: "/img8.jpg" },
      { label: "Metallsuche", img: "/img9.jpg" },
    ],
    featured: {
      tag: "Makro-Verfolgung",
      title: "Gold steigt, da Zentralbanken strategische Reserven erhöhen",
      excerpt:
        "Da Zentralbanken ihre Rückkehr zu physischen Reserven beschleunigen, untersuchen wir, warum Gold die ultimative Absicherung gegen systemische Volatilität bleibt.",
      cta: "Weiterlesen",
      img: "/img1.jpg",
    },
  },
};

function CategoryCard({ label, img }: { label: string; img: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative rounded-md overflow-hidden h-24 sm:h-28 md:h-[110px] cursor-pointer shrink-0 box-border transition-colors duration-300"
      style={{ border: hover ? "2px solid #B8860B" : "2px solid transparent" }}
    >
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover block transition-transform duration-300"
        style={{ transform: hover ? "scale(1.06)" : "scale(1)" }}
      />
      <span
        className={`${inter.className} absolute bottom-0 left-0 right-0 px-2 sm:px-2.5 py-1.5 text-white text-[11px] sm:text-xs font-semibold`}
        style={{ background: "linear-gradient(transparent, rgba(0,0,0,.65))" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [hover, setHover] = useState(false);
  const lang = useLang();
  const t = content[lang];

  const topRow = t.categories.slice(0, 4);
  const leftCol = t.categories.slice(4, 7);
  const rightCol = t.categories.slice(7, 10);
  const bottomRow = t.categories.slice(10, 12);

  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 py-6 md:py-6 bg-white">

      {/* Row 1: 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2.5 mb-3 md:mb-2.5">
        {topRow.map((c) => (
          <CategoryCard key={c.label} {...c} />
        ))}
      </div>

      {/* Row 2: stacked on mobile (all cards in a 2-col grid), 3-col (left | featured | right) on desktop */}
      <div className="flex flex-col gap-3 md:grid md:grid-cols-[1fr_2fr_1fr] md:gap-2.5 mb-3 md:mb-2.5">

        {/* Left col - first 2 in a 2-col grid + full-width 3rd on mobile; single col stack on desktop */}
        <div className="flex flex-col gap-3 md:gap-2.5 order-2 md:order-1">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-2.5">
            {leftCol.slice(0, 2).map((c) => (
              <CategoryCard key={c.label} {...c} />
            ))}
          </div>
          {leftCol.slice(2).map((c) => (
            <CategoryCard key={c.label} {...c} />
          ))}
        </div>

        {/* Featured */}
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative rounded-md overflow-hidden h-[300px] sm:h-80 md:h-[340px] cursor-pointer box-border transition-colors duration-300 order-1 md:order-2"
          style={{ border: hover ? "2px solid #B8860B" : "2px solid transparent" }}
        >
          <img
            src={t.featured.img}
            alt={t.featured.title}
            className="absolute inset-0 w-full h-full object-cover block"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.3) 60%, transparent 100%)",
            }}
          >
            <span
              className={`${inter.className} inline-block text-[#000] text-[10px] sm:text-xs font-bold uppercase tracking-wide px-2 sm:px-2.5 py-1 rounded-sm mb-2 w-fit`}
              style={{ background: "#C9A227" }}
            >
              {t.featured.tag}
            </span>
            <h2
              className={`${playfair.className} text-white text-base sm:text-xl md:text-[22px] font-extrabold leading-snug mb-2 line-clamp-2`}
              style={{ textShadow: "0 1px 4px rgba(0,0,0,.5)" }}
            >
              {t.featured.title}
            </h2>
            <p className={`${inter.className} text-white/90 text-[11px] sm:text-[13px] leading-relaxed mb-3 line-clamp-3 sm:line-clamp-none`}>
              {t.featured.excerpt}
            </p>
            <a
              href="#"
              className={`${inter.className} inline-block border-2 text-[11px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 rounded w-fit`}
              style={{ borderColor: "#B8860B", color: "#B8860B" }}
            >
              {t.featured.cta}
            </a>
          </div>
        </div>

        {/* Right col - first 2 in a 2-col grid + full-width 3rd on mobile; single col stack on desktop */}
        <div className="flex flex-col gap-3 md:gap-2.5 order-3 md:order-3">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-2.5">
            {rightCol.slice(0, 2).map((c) => (
              <CategoryCard key={c.label} {...c} />
            ))}
          </div>
          {rightCol.slice(2).map((c) => (
            <CategoryCard key={c.label} {...c} />
          ))}
        </div>
      </div>

      {/* Row 3: 2-col grid on mobile, centered under featured column on desktop */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-[1fr_2fr_1fr] md:gap-2.5">
        <div className="hidden md:block" />
        <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-3 md:gap-2.5">
          {bottomRow.map((c) => (
            <CategoryCard key={c.label} {...c} />
          ))}
        </div>
        <div className="hidden md:block" />
      </div>

    </div>
  );
}