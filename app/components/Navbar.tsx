"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const prices = [
  { label: "XAU/USD", value: "2,341.20", change: "+0.4%", isPositive: true },
  { label: "XAG/USD", value: "28.45", change: "-1.2%", isPositive: false },
  { label: "BTC/USD", value: "67,142.00", change: "+2.1%", isPositive: true },
];

const categories = [
  { name: "Macro", href: "/macro" },
  { name: "AI & Tech", href: "/ai-tech" },
  { name: "Storage", href: "/storage" },
  { name: "Estate", href: "/estate" },
  { name: "Green Energy", href: "/green-energy" },
  { name: "Scrap Metal", href: "/scrap-metal" },
  { name: "Off Grid", href: "/off-grid" },
  { name: "Numismatics", href: "/numismatics" },
  { name: "Coins & Bars", href: "/coins-bars" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-black sticky top-0 z-50">

      {/* Top Bar */}
      <nav className="px-7 py-3 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="w-[140px]">
            <Link
              href="/"
              className={`${playfair.className} text-[#FDE99A] font-bold text-base lg:text-lg whitespace-nowrap`}
            >
              GoldSilver.de
            </Link>
          </div>
          {/* Price Tickers */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {prices.map((item) => (
              <div key={item.label} className="flex items-center gap-1 whitespace-nowrap">
                <span className={`${jetbrainsMono.className} text-white text-xs lg:text-sm`}>
                  {item.label}:
                </span>
                <span
                  className={`${jetbrainsMono.className} text-xs lg:text-sm ${
                    item.isPositive ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {item.value} {item.change}
                </span>
              </div>
            ))}
          </div>
          <div className="w-[140px] flex items-center justify-end gap-3">
            <button
              aria-label="Search"
              className="text-white hover:text-[#FDE99A] transition-colors"
            >
              <Search size={18} />
            </button>
            <button
              className={`${inter.className} hidden md:block text-[#B8860B] border border-[#B8860B] rounded-lg px-3 py-1 text-xs lg:text-sm hover:bg-[#B8860B] hover:text-black transition-colors duration-200`}
            >
              Subscribe
            </button>
            <button
              aria-label="Toggle menu"
              className="md:hidden text-white hover:text-[#FDE99A] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Category Nav */}
      <nav className="hidden md:block border-b border-gray-800 px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 lg:gap-8 flex-wrap">
          {categories.map((category) => {
            const isActive = pathname === category.href;
            return (
              <Link
                key={category.name}
                href={category.href}
                className={`${inter.className} text-xs lg:text-sm whitespace-nowrap transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-[#B8860B] border-b-2 border-[#B8860B]"
                    : "text-[#B8860B]"
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-black border-b border-gray-800 px-6 py-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {prices.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={`${jetbrainsMono.className} text-white text-sm`}>
                  {item.label}:
                </span>
                <span
                  className={`${jetbrainsMono.className} text-sm ${
                    item.isPositive ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {item.value} {item.change}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800" />
          <div className="flex flex-col gap-3">
            {categories.map((category) => {
              const isActive = pathname === category.href;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${inter.className} text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-[#FDE99A] border-b border-[#B8860B] pb-0.5 w-fit"
                      : "text-[#B8860B] hover:text-[#FDE99A]"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className="border-t border-gray-800" />
          <button
            className={`${inter.className} w-full text-[#B8860B] border border-[#B8860B] rounded-lg px-3 py-2 text-sm hover:bg-[#B8860B] hover:text-black transition-colors duration-200`}
          >
            Subscribe
          </button>

        </div>
      )}

    </header>
  );
}