"use client";

import { useLang } from "@/components/uselang";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const content = {
  en: {
    categories: [
      { label: "Macro Tracking",    img: "/img1.jpg" },
      { label: "Green Energy",      img: "/img2.jpg" },
      { label: "Scrap Metal",       img: "/img3.jpg" },
      { label: "Goldsmith",         img: "/img4.jpg" },
      { label: "AI & Tech",         img: "/img5.jpg" },
      { label: "Numismatics",       img: "/img6.jpg" },
      { label: "Home Storage",      img: "/img7.jpg" },
      { label: "Coins & Bars",      img: "/img11.jpg" },
      { label: "Estate",            img: "/img10.jpg" },
      { label: "Off-Grid Security", img: "/img12.jpg" },
      { label: "Jewelry Resale",    img: "/img8.jpg" },
      { label: "Metal Detecting",   img: "/img9.jpg" },
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
      { label: "Makro-Tracking",        img: "/img1.jpg" },
      { label: "Grüne Energie",         img: "/img2.jpg" },
      { label: "Schrottmetall",         img: "/img3.jpg" },
      { label: "Goldschmied",           img: "/img4.jpg" },
      { label: "KI & Technologie",      img: "/img5.jpg" },
      { label: "Numismatik",            img: "/img6.jpg" },
      { label: "Heimlagerung",          img: "/img7.jpg" },
      { label: "Münzen & Barren",       img: "/img11.jpg" },
      { label: "Nachlass",              img: "/img10.jpg" },
      { label: "Autarke Sicherheit",    img: "/img2.jpg" },
      { label: "Schmuck-Weiterverkauf", img: "/img8.jpg" },
      { label: "Metallsuche",           img: "/img9.jpg" },
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
  return (
    <div style={{ position: "relative", borderRadius: 6, overflow: "hidden", height: 110, cursor: "pointer", flexShrink: 0 }}>
      <img
        src={img}
        alt={label}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <span
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "6px 10px",
          background: "linear-gradient(transparent, rgba(0,0,0,.65))",
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const lang = useLang();
  const t = content[lang];

  const topRow    = t.categories.slice(0, 4);
  const leftCol   = t.categories.slice(4, 7);
  const rightCol  = t.categories.slice(7, 10);
  const bottomRow = t.categories.slice(10, 12);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px", background: "#fff", fontFamily: "system-ui, sans-serif" }}>

      {/* ── Row 1: 4 equal cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 10 }}>
        {topRow.map((c) => <CategoryCard key={c.label} {...c} />)}
      </div>

      {/* ── Row 2: left col | featured | right col ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 10, marginBottom: 10 }}>

        {/* Left col */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {leftCol.map((c) => <CategoryCard key={c.label} {...c} />)}
        </div>

        {/* Featured */}
        <div  style={{ position: "relative", borderRadius: 6, overflow: "hidden", height: 340, cursor: "pointer", border: "2px solid #B8860B", transition: "border-color 0.25s ease", boxSizing: "border-box" }}>
          <img
            src={t.featured.img}
            alt={t.featured.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,.8) 0%, rgba(0,0,0,.2) 60%, transparent 100%)",
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <span
              style={{
                display: "inline-block", background: "#C9A227", color: "#0000000" ,
                fontSize: 12, fontWeight: 700, letterSpacing: ".6px", textTransform: "uppercase",
                padding: "3px 10px", borderRadius: 3, marginBottom: 10, width: "fit-content",
              }}
            >
              {t.featured.tag}
            </span>
            <h2 className={`${playfair.className}`} style={{ color: "#fff", fontSize: 22, fontWeight: 800, lineHeight: 1.25, margin: "0 0 10px", textShadow: "0 1px 4px rgba(0,0,0,.5)" }}>
              {t.featured.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,.88)", fontSize: 13, lineHeight: 1.5, margin: "0 0 14px" }}>
              {t.featured.excerpt}
            </p>
            <a
              href="#"
              style={{
                display: "inline-block", border: "1.5px solid #B8860B",
                color: "#B8860B", fontSize: 12, fontWeight: 600,
                padding: "6px 18px", borderRadius: 4, textDecoration: "none", width: "fit-content",
              }}
            >
              {t.featured.cta}
            </a>
          </div>
        </div>

        {/* Right col */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {rightCol.map((c) => <CategoryCard key={c.label} {...c} />)}
        </div>
      </div>

      {/* ── Row 3: 2 cards centred under featured ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 10 }}>
        <div />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {bottomRow.map((c) => <CategoryCard key={c.label} {...c} />)}
        </div>
        <div />
      </div>

    </div>
  );
}