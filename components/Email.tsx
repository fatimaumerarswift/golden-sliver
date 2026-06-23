import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Email() {
  return (
    <section className=" max-w-full bg-[#1A1A1A] text-white relative">

      {/* Top image */}
      <div className="relative py-8 flex w-full px-12 absolute md:left-[190px]">
        <Image
          src="/Group 1000002102.png"
          alt="Decorative"
          width={140}
          height={140}
          className="ml-auto mr-[10%] "
          
        />
      </div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className={`${playfair.className} text-2xl md:text-4xl font-bold leading-snug`}>
          Discover the Finest Investments Inspired
        </h1>
        <h1 className={`${playfair.className} text-2xl md:text-4xl font-bold leading-snug mb-4`}>
          by the Strength of Gold &amp; Silver
        </h1>
        <p className={`${inter.className} text-sm text-gray-300 leading-relaxed`}>
          Daily market intelligence delivered with editorial precision. Join 45,000+
          <br />
          elite investors.
        </p>
      </div>

      {/* Input + Subscribe */}
      <div className="flex flex-wrap gap-3 justify-center mt-6 mb-4">
        <input
          type="email"
          placeholder="name@email.com"
          className={`${inter.className} bg-white text-black text-sm rounded-md px-4 py-2 w-60 outline-none`}
        />
        <button
          className={`${inter.className} bg-[#B8860B] text-white text-sm font-semibold rounded-md px-6 py-2 hover:bg-[#a07608] transition-colors duration-200`}
        >
          Subscribe
        </button>
      </div>

      {/* Bottom image — centered */}
      <div className="flex justify-start max-w-3xl pt-4 pb-10 px-12">
        <Image
          src="/Group 1000002103.png"
          alt="Decorative"
          width={140}
          height={140}
        />
      </div>

    </section>
  );
}