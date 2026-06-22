import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className={`${inter.className} w-full px-6 py-6 max-w-7xl mx-auto`}>
      {/* 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3 mb-3">
        <div className="relative rounded-lg overflow-hidden h-[151px]">
          <Image src="/card1.png" alt="card1" fill className="object-cover" />
        </div>
        <div className="relative rounded-lg overflow-hidden h-[151px]">
          <Image src="/card5.png" alt="card5" fill className="object-cover" />
        </div>
        <div className="relative rounded-lg overflow-hidden h-[151px]">
          <Image src="/card6.png" alt="card6" fill className="object-cover" />
        </div>
        <div className="relative rounded-lg overflow-hidden h-[151px]">
          <Image src="/card7.png" alt="card7" fill className="object-cover" />
        </div>
      </div>
      {/* next row*/}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 mb-3">
        {/* 3 cards at left side  */}
        <div className="grid gap-3">
          <div className="relative rounded-lg overflow-hidden h-[151px]">
            <Image src="/card2.png" alt="card 10" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden h-[151px]">
            <Image src="/card3.png" alt="card 8" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden h-[151px]">
            <Image src="/card9.png" alt="card 9" fill className="object-cover" />
          </div>
        </div>
        {/* main image  */}
        <div className="relative rounded-lg overflow-hidden h-[479px]">
          <Image src="/main33.png" alt="Main Feature" fill className="object-cover" />
          {/* Dark */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Text */}
          <div className="absolute bottom-8 left-6 right-6">
            <span className="bg-[#B8860B] text-black text-xs font-semibold px-2 py-1 rounded-md">
              Marco Tracking
            </span>
            <h3 className="text-white text-xl font-bold mt-3 leading-snug">
              Gold Surges as Central Banks<br />Increase Strategic Reserves
            </h3>
            <p className="text-white text-sm mt-2 leading-relaxed">
              As central banks accelerate their shift back to physical reserves,
              we explore why gold remains the ultimate hedge against systemic volatility.
            </p>
            <button className="mt-4 text-[#B8860B] border-2 border-[#B8860B] rounded-xl px-5 py-1 text-sm hover:bg-[#B8860B] hover:text-black transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
        {/* Right Column  */}
        <div className="grid gap-3">
         <div className="relative rounded-lg overflow-hidden h-[151px]">
            <Image src="/card10.png" alt="frame 1" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden h-[151px]">
            <Image src="/card11.png" alt="card 8" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden h-[151px]">
            <Image src="/card12.png" alt="card 9" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Bottom Row  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[600px] mx-auto">
        <div className="relative rounded-lg overflow-hidden h-[151px]">
          <Image src="/card13.png" alt="frame 2" fill className="object-cover" />
        </div>
        <div className="relative rounded-lg overflow-hidden h-[151px]">
          <Image src="/card14.png" alt="card 1" fill className="object-cover" />
        </div>

      </div>

    </section>
  );
}
