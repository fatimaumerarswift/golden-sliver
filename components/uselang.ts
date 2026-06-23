"use client";

import { useState, useEffect } from "react";
import type { Lang } from "./Navbar";

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    // Read initial value from localStorage
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLang(saved);

    // Listen for changes from Navbar
    const handler = () => {
      const updated = localStorage.getItem("lang") as Lang | null;
      if (updated) setLang(updated);
    };

    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  return lang;
}