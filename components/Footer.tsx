"use client";

import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useLang } from "@/components/uselang";

const content = {
  en: {
    about: "Independent insights covering precious metals, market intelligence, economic trends, and wealth preservation strategies for modern investors.",
    categoriesTitle: "Categories",
    resourcesTitle: "Resources",
    stayTitle: "Stay Connected",
    stayDesc: "Receive market insights, trend analysis, and precious metals intelligence.",
    subscribe: "Subscribe",
    copyright: "© 2026 GoldSilver.de. All rights reserved.",
    categories: [
      { label: "Macro Tracking", href: "/macro" },
      { label: "AI & Technology", href: "/ai-tech" },
      { label: "Green Energy", href: "/green-energy" },
      { label: "Estate Planning", href: "/estate" },
      { label: "Home Storage", href: "/storage" },
      { label: "Coins & Bars", href: "/coins-bars" },
    ],
    resources: [
      { label: "Market Updates", href: "/resources/market-updates" },
      { label: "Learning Resources", href: "/resources/learning" },
      { label: "Investment Guides", href: "/resources/guides" },
      { label: "Video Library", href: "/resources/videos" },
      { label: "Newsletter", href: "/resources/newsletter" },
      { label: "FAQ", href: "/resources/faq" },
    ],
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Contact", href: "/contact" },
    ],
  },
  de: {
    about: "Unabhängige Einblicke in Edelmetalle, Marktintelligenz, Wirtschaftstrends und Vermögenserhaltungsstrategien für moderne Investoren.",
    categoriesTitle: "Kategorien",
    resourcesTitle: "Ressourcen",
    stayTitle: "Verbunden bleiben",
    stayDesc: "Erhalten Sie Markteinblicke, Trendanalysen und Edelmetallinformationen.",
    subscribe: "Abonnieren",
    copyright: "© 2026 GoldSilver.de. Alle Rechte vorbehalten.",
    categories: [
      { label: "Makro-Tracking", href: "/macro" },
      { label: "KI & Technologie", href: "/ai-tech" },
      { label: "Grüne Energie", href: "/green-energy" },
      { label: "Nachlassplanung", href: "/estate" },
      { label: "Heimlagerung", href: "/storage" },
      { label: "Münzen & Barren", href: "/coins-bars" },
    ],
    resources: [
      { label: "Markt-Updates", href: "/resources/market-updates" },
      { label: "Lernressourcen", href: "/resources/learning" },
      { label: "Investmentleitfäden", href: "/resources/guides" },
      { label: "Videobibliothek", href: "/resources/videos" },
      { label: "Newsletter", href: "/resources/newsletter" },
      { label: "FAQ", href: "/resources/faq" },
    ],
    bottomLinks: [
      { label: "Datenschutzrichtlinie", href: "/privacy" },
      { label: "Nutzungsbedingungen", href: "/terms" },
      { label: "Haftungsausschluss", href: "/disclaimer" },
      { label: "Kontakt", href: "/contact" },
    ],
  },
};

export default function Footer() {
  const lang = useLang();
  const t = content[lang];

  return (
    <footer className="bg-[#0E0E0E] w-full">

      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-8 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Section 1 — About */}
        <div className="flex flex-col gap-6">
          <p className="text-white text-sm leading-relaxed">{t.about}</p>
          <div className="flex items-center gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="border border-white rounded-full p-2 text-white hover:border-[#B8860B] hover:bg-[#B8860B] hover:text-black transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Section 2 — Categories */}
        <nav className="flex flex-col gap-3">
          <p className="text-white font-semibold text-base mb-2">{t.categoriesTitle}</p>
          {t.categories.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white text-sm hover:text-[#B8860B] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Section 3 — Resources */}
        <nav className="flex flex-col gap-3">
          <p className="text-white font-semibold text-base mb-2">{t.resourcesTitle}</p>
          {t.resources.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white text-sm hover:text-[#B8860B] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Section 4 — Stay Connected */}
        <div className="flex flex-col gap-4">
          <p className="text-white font-semibold text-base">{t.stayTitle}</p>
          <p className="text-white text-sm leading-relaxed">{t.stayDesc}</p>
          <button className="text-[#B8860B] border-2 border-[#B8860B] rounded-xl px-6 py-2 text-sm font-semibold hover:bg-[#B8860B] hover:text-black transition-colors duration-200 w-fit">
            {t.subscribe}
          </button>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-gray-700 mx-6" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 flex-wrap">
        <p className="text-[#FEF7DC] text-xs">{t.copyright}</p>
        <div className="flex items-center gap-4 flex-wrap">
          {t.bottomLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#FEF7DC] text-xs hover:text-[#B8860B] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}