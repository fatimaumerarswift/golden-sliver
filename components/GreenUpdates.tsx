import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import Image from "next/image";
const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });


const cards = [
  {
    name: "PHYSICAL MARKET",
    date: "JUNE 01, 2026",
    button: "Bullion",
    badgeColor: "bg-green-500 hover:bg-green-700",
    title: "Global Solar Expansion Drives Industrial Silver Consumption",
    desc: "Renewable energy projects continue increasing demand for silver across major markets.",
    image: "/green-energy.png"
  },
  {
    name: "PHYSICAL MARKET",
    date: "JUNE 01, 2026",
    button: "Bullion",
    badgeColor: "bg-green-500 hover:bg-green-700",
    title: "Global Solar Expansion Drives Industrial Silver Consumption",
    desc: "Renewable energy projects continue increasing demand for silver across major markets.",
    image: "/green-energy.png"
  },
  {
    name: "PHYSICAL MARKET",
    date: "JUNE 01, 2026",
    button: "Bullion",
    badgeColor: "bg-green-500 hover:bg-green-700",
    title: "Global Solar Expansion Drives Industrial Silver Consumption",
    desc: "Renewable energy projects continue increasing demand for silver across major markets.",
    image: "/green-energy.png"
  },
]

const prices = [
  { label: "GOLD / USD (OZ)", value: "$2,342.12", change: "+0.42%", up: true },
  { label: "SILVER / USD (OZ)", value: "$28.15", change: "-0.11%", up: false },
  { label: "GOLD / USD (OZ)", value: "$2,342.12", change: "+0.42%", up: true },
  { label: "SILVER / USD (OZ)", value: "$28.15", change: "-0.11%", up: false },
  { label: "EU INFLATION (CPI)", value: "2.4%", change: "STABLE", up: null },
]

export default function GreenUpdates() {
  return (
    <>
      <section className="max-w-full bg-white">
        <div className="py-10 px-6 md:px-12">
          <h1 className={`${playfair.className} text-3xl font-bold mb-6`}>
            Today&apos;s Update
          </h1>

          {/* main layout: left news column + right sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

            {/* left side */}
            <div className="flex flex-col my-4 divide-y divide-gray-200">
              {cards.map((card, i) => (
                <div key={i} className="flex flex-col gap-3 px-2 sm:px-6 py-4">

                  {/* Meta row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[#B8860B] text-sm">{card.name}</span>
                    <span className="text-black text-sm">• {card.date}</span>
                    <span className={`${card.badgeColor} text-white text-sm rounded-xs px-2`}>
                      {card.button} ▲
                    </span>
                  </div>

                  {/* Content row — image beside text, stacks on mobile */}
                  <div className="flex flex-col sm:flex-row items-start gap-8">
                    {/* Text */}
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <h2 className={`${playfair.className} font-bold leading-snug text-xl sm:text-2xl whitespace-pre-line`}>
                        {card.title}
                      </h2>
                      <p className={`${inter.className} text-gray-500 text-sm`}>
                        {card.desc}
                      </p>
                    </div>
                    {/* Image — increased width */}
                    <div className="">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={200}
                        height={200}
                        className="rounded-md md:w-[200px] sm:w-[100px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* right side - Live Prices */}
            <div className="w-full max-w-[320px] my-8">
              <div className="bg-[#eeeeee] border border-[#E8DEC8] rounded-md p-5 lg:sticky lg:top-6">
                <h3 className={`${playfair.className} flex items-center gap-2 text-lg font-bold mb-4`}>
                  <span className="text-[#B8860B]">▣</span> Live Prices
                </h3>

                <div className="flex flex-col divide-y divide-[#E8DEC8]">
                  {prices.map((p, i) => (
                    <div key={i} className="flex items-center justify-between py-3">
                      <span className={`${inter.className} text-xs sm:text-sm text-gray-600`}>
                        {p.label}
                      </span>
                      <div className="text-right">
                        <p className={`${jetbrainsMono.className} text-[#B8860B] text-sm sm:text-base font-semibold`}>
                          {p.value}
                        </p>
                        <p
                          className={`${jetbrainsMono.className} text-xs ${p.up === true
                              ? "text-green-600"
                              : p.up === false
                                ? "text-red-500"
                                : "text-gray-500"
                            }`}
                        >
                          {p.up === true ? "▲ " : p.up === false ? "▼ " : ""}
                          {p.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}