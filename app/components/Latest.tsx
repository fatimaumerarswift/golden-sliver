import Image from "next/image"

const cards = [
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
]

export default function Latest() {
  return (
    <section className="w-full py-16 px-6 bg-white">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-black">
          Latest <span className="text-[#B8860B]">Insights</span> & Updates
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Expert analysis, market movements, and emerging opportunities across
          gold, silver, and the broader economic landscape.
        </p>
      </div>
      {/* Cards*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <article
            key={i}
            className="border border-black-200 rounded-xl overflow-hidden  bg-white"
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
                            text-white text-xs px-2 py-1 rounded-md
                            transition-colors duration-200`}
              >
                {card.badge}
              </span>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h4 className="text-[#B8860B] font-bold text-xs tracking-widest uppercase">
                {card.category}
              </h4>
              <h3 className="text-black font-medium text-base leading-snug">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="text-[#B8860B] text-lg underline rounded-md px-6 py-2
                     hover:bg-[#B8860B] hover:text-black hover:no-underline
                     transition-colors duration-200"
        >
          Browse all articles
        </button>
      </div>
    </section>
  )
}