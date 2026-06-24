"use client";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import Image from "next/image";
import { useLang } from "@/components/uselang";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"] });

const content = {
  en: {
    heading: "Featured",
    headingHighlight: "Learning ",
    nohighlight: "Resources",
    subtext: "Watch curated educational content covering gold, silver, market trends, and investing strategies.",
    cards: [
      {
        image: "/gold.png",
        title: "Pro Gold",
        desc: "Best YouTube videos covering gold investing, bullion markets, and wealth preservation.",
        link: "https://www.youtube.com/shorts/ZDDMOpBBQZ4",
      },
      {
        image: "/silverr.png",
        title: "Pro Silver",
        desc: "Best YouTube videos covering silver investing, industrial demand, and market opportunities.",
        link: "https://www.youtube.com/shorts/ZDDMOpBBQZ4",
      },
    ],
  },
  de: {
    heading: "Ausgewählte",
    headingHighlight: "Lern",
    nohighlight: "ressourcen",
    subtext: "Schauen Sie ausgewählte Bildungsinhalte über Gold, Silber, Markttrends und Anlagestrategien.",
    cards: [
      {
        image: "/img1.png",
        title: "Pro Gold",
        desc: "Die besten YouTube-Videos über Goldinvestitionen, Barrenmärkte und Vermögenserhalt.",
        link: "https://www.youtube.com/shorts/ZDDMOpBBQZ4",
      },
      {
        image: "/img2.png",
        title: "Pro Silber",
        desc: "Die besten YouTube-Videos über Silberinvestitionen, Industrienachfrage und Marktchancen.",
        link: "https://www.youtube.com/shorts/ZDDMOpBBQZ4",
      },
    ],
  },
};

export default function Feature() {
  const lang = useLang();
  const t = content[lang];

  return (
    <section className="max-w-full bg-white">

      {/* Text Content */}
      <div className="flex flex-col my-12 px-10 md:px-20">
        <h1 className={`${playfair.className} font-bold text-2xl md:text-3xl lg:text-4xl text-center`}>
          {t.heading}{" "}
          <span className="text-[#B8860B]">{t.headingHighlight}</span>
          {t.nohighlight}
        </h1>
        <p className="leading-relaxed text-center text-xl py-4">{t.subtext}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto py-8 gap-8 max-w-4xl px-4">
        {t.cards.map((card, i) => (
          <article key={i} className="flex flex-col h-full">

            <div className="relative w-full">
              <Image
                src={card.image}
                alt={card.title}
                width={430}
                height={220}
                className="rounded-t-xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 rounded-t-xl" />
              <a href={card.link} target="_blank" className="absolute inset-0 flex justify-center items-center">
                <img src="/youtube.png" alt="" width={80} />
              </a>
            </div>

            <div className="bg-[#F7BD48CF] px-4 py-6 rounded-b-xl flex-1">
              <h1 className={`${playfair.className} font-bold text-2xl`}>
                {card.title}
              </h1>
              <p className={`${inter.className} py-4`}>
                {card.desc}
              </p>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
