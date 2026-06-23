"use client"
import Image from "next/image";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import { useLang } from "@/components/uselang";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"] });

const content = {
  en: {
    heading: "Trusted",
    headingAccent: "Precious Metals",
    headingRest: "Partners",
    subheading:
      "Explore carefully selected platforms for buying, storing, and investing in precious metals.",
    discoverMore: "Discover More",
    cards: [
      {
        image: "/GS.png",
        title: "Seeking Alpha",
        desc: "Buy investment-grade gold and silver products from one of Germany's established bullion retailers.",
        offer: "Up to 6% commission",
      },
      {
        image: "/AP.png",
        title: "Motley Fool",
        desc: "Precious metals investment solutions designed to help investors diversify and protect wealth.",
        offer: "Up to 6% commission",
      },
      {
        image: "/BV.png",
        title: "Research Newsletters",
        desc: "Purchase, store, and manage physical gold and silver through a globally trusted platform.",
        offer: "Up to 6% commission",
      },
    ],
  },
  de: {
    heading: "Vertrauenswürdige",
    headingAccent: "Edelmetall",
    headingRest: "Partner",
    subheading:
      "Entdecken Sie sorgfältig ausgewählte Plattformen zum Kauf, zur Lagerung und zur Anlage in Edelmetalle.",
    discoverMore: "Mehr erfahren",
    cards: [
      {
        image: "/GS.png",
        title: "Seeking Alpha",
        desc: "Kaufen Sie anlagewürdige Gold- und Silberprodukte von einem der etablierten deutschen Edelmetallhändler.",
        offer: "Bis zu 6 % Provision",
      },
      {
        image: "/AP.png",
        title: "Motley Fool",
        desc: "Anlagelösungen für Edelmetalle, die Anlegern helfen, ihr Vermögen zu diversifizieren und zu schützen.",
        offer: "Bis zu 6 % Provision",
      },
      {
        image: "/BV.png",
        title: "Research Newsletters",
        desc: "Kaufen, lagern und verwalten Sie physisches Gold und Silber über eine weltweit vertrauenswürdige Plattform.",
        offer: "Bis zu 6 % Provision",
      },
    ],
  },
} as const;

type Lang = keyof typeof content;

export default function MarcoCards() {
  const lang = useLang();
  const t = content[lang];

  return (
    <>
      <section className="max-w-full bg-white py-16">
        {/* text-Content */}
        <div className="flex flex-col my-6 px-10 md:px-20">
          <h1 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl text-center`}>
            {t.heading} <span className="text-[#B8860B]">{t.headingAccent}</span> {t.headingRest}
          </h1>
          <p className="leading-relaxed text-center text-sm py-4">{t.subheading}</p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12 py-4">
          {t.cards.map((card, i) => (
            <article
              key={i}
              className="border border-[#6E5006] rounded-xl overflow-hidden bg-white"
            >
              <div className="relative my-8 flex justify-center">
                <Image src={card.image} alt={card.title} width={50} height={300} />
              </div>
              <div className="py-1 flex flex-col gap-3 px-4">
                <h3 className={`${playfair.className} text-center text-2xl font-bold`}>
                  {card.title}
                </h3>
                <p className={`${inter.className} text-center text-sm`}>{card.desc}</p>
                <p className={`${inter.className} text-center text-sm italic text-[#B8860B]`}>
                  {card.offer}
                </p>
              </div>
              <div className="flex justify-center my-6">
                <button className="text-[#B8860B] border-2 border-[#B8860B] rounded-xl px-12 py-2 text-sm font-semibold hover:bg-[#B8860B] hover:text-black transition-colors duration-200 w-fit">
                  {t.discoverMore}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}