"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";

const playfair    = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter       = Inter({ subsets: ["latin"] });

// ── Ticker symbols to fetch ──────────────────────────────────────────────────
const SYMBOLS = [
  { label: "ETH/USD",  id: "ethereum",      vsCurrency: "usd" },
  { label: "EUR/USD",  id: "euro",           vsCurrency: "usd" },
  { label: "XAU/USD",  id: "gold",           vsCurrency: "usd" },
  { label: "XAG/USD",  id: "silver",         vsCurrency: "usd" },
  { label: "BTC/USD",  id: "bitcoin",        vsCurrency: "usd" },
];

type TickerItem = {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
};

// ── Scrolling Ticker Strip ───────────────────────────────────────────────────
function TickerStrip({ tickers }: { tickers: TickerItem[] }) {
  // Duplicate items so the strip loops seamlessly
  const items = [...tickers, ...tickers];

  return (
    <div
      className="overflow-hidden w-full"
      style={{ maskImage: "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "ticker-scroll 30s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1 px-5">
            <span className={`${jetbrainsMono.className} text-gray-400 text-[11px]`}>
              {item.label}:
            </span>
            <span
              className={`${jetbrainsMono.className} text-[11px] font-semibold ${
                item.isPositive ? "text-gray-400" : "text-red-400"
              }`}
            >
              {item.value}
            </span>
            <span
              className={`${jetbrainsMono.className} text-[10px] ${
                item.isPositive ? "text-gray-400" : "text-red-400"
              }`}
            >
              {item.change}
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


// ── Main Component ────────────────────────────────────────────────────────────
export default function Loadingbar() {
  const [searchOpen,      setSearchOpen]      = useState(false);  
  const [tickers,         setTickers]         = useState<TickerItem[]>(
    SYMBOLS.map((s) => ({ label: s.label, value: "Loading…", change: "—", isPositive: true }))
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const pathname  = usePathname();
//   const t             = ui[lang];
//   const navCategories = categories[lang];

  // ── Fetch live prices from CoinGecko (free, no key needed) ──
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // CoinGecko simple price endpoint
        const ids = "bitcoin,ethereum,gold,silver";
        const res  = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`,
          { next: { revalidate: 60 } }
        );
        const data = await res.json();

        // EUR/USD from ECB free endpoint
        let eurUsd = { value: "—", change: "—", isPositive: true };
        try {
          const ecbRes  = await fetch("https://open.er-api.com/v6/latest/EUR");
          const ecbData = await ecbRes.json();
          const rate     = ecbData?.rates?.USD as number | undefined;
          if (rate) {
            eurUsd = { value: rate.toFixed(4), change: "", isPositive: true };
          }
        } catch (_) {}

        const map: Record<string, { usd: number; usd_24h_change: number }> = data;

        const fmt = (n: number) =>
          n >= 1000
            ? n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : n.toFixed(n < 1 ? 4 : 2);

        const updated: TickerItem[] = [
          {
            label: "ETH/USD",
            value: map.ethereum ? fmt(map.ethereum.usd) : "—",
            change: map.ethereum ? `${map.ethereum.usd_24h_change >= 0 ? "+" : ""}${map.ethereum.usd_24h_change.toFixed(2)}%` : "—",
            isPositive: map.ethereum ? map.ethereum.usd_24h_change >= 0 : true,
          },
          {
            label: "EUR/USD",
            value: eurUsd.value,
            change: eurUsd.change,
            isPositive: eurUsd.isPositive,
          },
          {
            label: "XAU/USD",
            value: map.gold ? fmt(map.gold.usd) : "—",
            change: map.gold ? `${map.gold.usd_24h_change >= 0 ? "+" : ""}${map.gold.usd_24h_change.toFixed(2)}%` : "—",
            isPositive: map.gold ? map.gold.usd_24h_change >= 0 : true,
          },
          {
            label: "XAG/USD",
            value: map.silver ? fmt(map.silver.usd) : "—",
            change: map.silver ? `${map.silver.usd_24h_change >= 0 ? "+" : ""}${map.silver.usd_24h_change.toFixed(2)}%` : "—",
            isPositive: map.silver ? map.silver.usd_24h_change >= 0 : true,
          },
          {
            label: "BTC/USD",
            value: map.bitcoin ? fmt(map.bitcoin.usd) : "—",
            change: map.bitcoin ? `${map.bitcoin.usd_24h_change >= 0 ? "+" : ""}${map.bitcoin.usd_24h_change.toFixed(2)}%` : "—",
            isPositive: map.bitcoin ? map.bitcoin.usd_24h_change >= 0 : true,
          },
        ];

        setTickers(updated);
      } catch (err) {
        console.error("Ticker fetch failed:", err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60_000); // refresh every 60 s
    return () => clearInterval(interval);
  }, []);

  // ── Keyboard / route effects ─────────────────────────────────────────────
  useEffect(() => { if (searchOpen) searchRef.current?.focus(); }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
    //   if (e.key === "Escape") { setSearchOpen(false); setSearchQuery(""); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    // setMenuOpen(false);
    // setCategoriesOpen(false);
  }, [pathname]);


  return (
    <header className="w-full bg-black sticky top-0 z-50">

      {/* ── Scrolling ticker strip ── */}
      <div className="border-b border-gray-800 py-1 bg-black">
        <TickerStrip tickers={tickers} />
      </div>

      

    </header>
  );
}