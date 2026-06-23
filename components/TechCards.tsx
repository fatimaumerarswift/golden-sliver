"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { useLang } from "@/components/uselang";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"] });

const content = {
  en: {
    heading: "Trusted",
    headingHighlight: "Precious Metals Partners",
    subtext: "Explore carefully selected platforms for buying, storing, and investing in precious metals.",
    button: "Discover More",
    cards: [
      {
        image: "/AI.png",
        title: "Tech Newsletters",
        desc: "Advanced AI computing and accelerated infrastructure solutions.",
        offer: "Up to 6% commission",
      },
      {
        image: "/AD.png",
        title: "Micro-Investing Apps",
        desc: "High-performance processors powering next-generation computing.",
        offer: "8–10% revenue share",
      },
      {
        image: "/TC.png",
        title: "Trading Platforms",
        desc: "High-performance processors powering next-generation computing.",
        offer: "25% recurring commission",
      },
    ],
  },
  de: {
    heading: "Vertrauenswürdige",
    headingHighlight: "Edelmetall-Partner",
    subtext: "Entdecken Sie sorgfältig ausgewählte Plattformen zum Kauf, zur Lagerung und zur Investition in Edelmetalle.",
    button: "Mehr entdecken",
    cards: [
      {
        image: "/AI.png",
        title: "Tech-Newsletter",
        desc: "Fortschrittliche KI-Computing- und beschleunigte Infrastrukturlösungen.",
        offer: "Bis zu 6% Provision",
      },
      {
        image: "/AD.png",
        title: "Mikro-Investitions-Apps",
        desc: "Hochleistungsprozessoren für das Computing der nächsten Generation.",
        offer: "8–10% Umsatzbeteiligung",
      },
      {
        image: "/TC.png",
        title: "Handelsplattformen",
        desc: "Hochleistungsprozessoren für das Computing der nächsten Generation.",
        offer: "25% wiederkehrende Provision",
      },
    ],
  },
};

export default function TechCards() {
  const lang = useLang();
  const t = content[lang];

  return (
    <section className="max-w-full bg-white py-16">

      {/* Text Content */}
      <div className="flex flex-col my-6 px-10 md:px-20">
        <h1 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl text-center`}>
          {t.heading}{" "}
          <span className="text-[#B8860B]">{t.headingHighlight}</span>
        </h1>
        <p className="leading-relaxed text-center text-sm py-4">{t.subtext}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12 py-4">
        {t.cards.map((card, i) => (
          <article key={i} className="border border-[#6E5006] rounded-xl overflow-hidden bg-white">

            <div className="relative my-8 flex justify-center">
              <Image src={card.image} alt={card.title} width={50} height={300} />
            </div>

            <div className="py-1 flex flex-col gap-3 px-4">
              <h3 className={`${playfair.className} text-center text-2xl font-bold`}>
                {card.title}
              </h3>
              <p className={`${inter.className} text-center text-sm`}>
                {card.desc}
              </p>
              <p className={`${inter.className} text-center text-sm italic text-[#B8860B]`}>
                {card.offer}
              </p>
            </div>

            <div className="flex justify-center my-6">
              <button className="text-[#B8860B] border-2 border-[#B8860B] rounded-xl px-12 py-2 text-sm font-semibold hover:bg-[#B8860B] hover:text-black transition-colors duration-200 w-fit">
                {t.button}
              </button>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}