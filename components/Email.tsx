"use client"
import Image from "next/image";
import { useLang } from "@/components/uselang";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const content = {
  en: {
    title1a: "Discover the ",
    title1b: "Finest Investments",
    title1c: " Inspired",
    title2: "by the Strength of Gold & Silver",
    desc1: "Daily market intelligence delivered with editorial precision. Join 45,000+",
    desc2: "elite investors.",
    placeholder: "name@email.com",
    button: "Subscribe",
  },
  de: {
    title1a: "Entdecken Sie die ",
    title1b: "Besten Investments",
    title1c: " Inspiriert",
    title2: "von der Stärke von Gold & Silber",
    desc1: "Tägliche Marktanalysen mit redaktioneller Präzision. Schließen Sie sich 45.000+",
    desc2: "Elite-Investoren an.",
    placeholder: "name@email.com",
    button: "Abonnieren",
  },
};

export default function Email() {
  const lang = useLang();
  const t = content[lang];
  return (
    <section className=" max-w-full bg-[#1A1A1A] text-white overflow-hidden"
    style={{
        backgroundColor: "#1A1A1A",
        backgroundImage:
            "linear-gradient(to bottom, rgba(184,134,11,0.15), transparent 35%), radial-gradient(circle at bottom right, rgba(184,134,11,0.15), transparent 40%)",
      }}
    >

      {/* sliver */}
      <div className="my-4 py-8 flex justify-end mr-50 ">
        <Image
          src="/sliverbar.png"
          alt="Decorative"
          width={130}
          height={130}
          className=""
        />
      </div>

      {/* Heading */}
      <div className="-mt-18">   
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className={`${playfair.className} text-2xl md:text-4xl font-bold leading-snug `}>
          {t.title1a}<span className="text-[#B8860B]">{t.title1b}</span>{t.title1c}
        </h1>
        <h1 className={`${playfair.className} text-2xl md:text-4xl font-bold leading-snug mb-4`}>
          {t.title2}
        </h1>
        <p className={`${inter.className} text-sm text-gray-300 leading-relaxed`}>
          {t.desc1}
          <br />
          {t.desc2}
        </p>
      </div>
      </div>

      {/* Input + Subscribe */}
      <div className="flex flex-wrap gap-3 justify-center mt-6 mb-4">
        <input
          type="email"
          placeholder={t.placeholder}
          className={`${inter.className} bg-white text-black text-sm rounded-md px-4 py-2 w-60 outline-none`}
        />
        <button
          className={`${inter.className} border border-[#B8860B] rounded-lg text-[#B8860B] text-sm font-semibold px-6 py-2 hover:bg-[#a07608] transition-colors duration-200`}
        >
          {t.button}
        </button>
      </div> 

      {/* Bottom image */}
      <div className="flex w-full justify-start pb-10 px-12 md:pl-16 lg:pl-46 ml-7 ">
        <Image
          src="/goldenbar.png"
          alt="Decorative"
          width={130}
          height={130}
          className=""
        />
      </div>

    </section>
  );
}