"use client";

import { useState, useEffect } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem("language") as "tr" | "en" | null;
    if (saved) setLanguage(saved);

    // Listen for changes
    const handleChange = (e: CustomEvent<"tr" | "en">) => {
      setLanguage(e.detail);
    };

    window.addEventListener("languageChange" as any, handleChange);
    return () => window.removeEventListener("languageChange" as any, handleChange);
  }, []);

  return language;
}