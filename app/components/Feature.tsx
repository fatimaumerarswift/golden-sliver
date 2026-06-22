import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import { FaYoutube } from 'react-icons/fa'
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"], });

const cards = [
    {
        image: "/img1.png",
        title: "Pro Gold",
        desc: "Best YouTube videos covering gold investing,bullion markets,and wealth preservation"
    },
    {
        image: "/img2.png",
        title: "Pro Sliver",
        desc: "Best YouTube videos covering silver investing,industrial demand,and market opportunities."
    }
]

export default function Feature() {
    return (
        <>
            <section className="max-w-full bg-white">
                {/* text-Content */}
                <div className="flex flex-col my-12 px-10 md:px-20">
                    <h1 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl text-center `}>Featured <span className="text-[#B8860B]">Learning  </span>  Resources</h1>
                    <p className="leading-relaxed text-center text-sm py-4">Watch curated educational content covering gold, silver, market trends, and investing strategies.</p>
                </div>
                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto py-8 gap-8 max-w-4xl px-4">
                    {cards.map((card, i) => (
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
                                <a href="" target="_blank" className="absolute inset-0 flex justify-center items-center">
                                    <FaYoutube className="text-red-600 text-6xl" />
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
        </>
    )
}