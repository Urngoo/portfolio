"use client";

import { useEffect, useState } from "react";

export type Lang = "en" | "mn" | "ja";

export function usePreferences() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedLang = (localStorage.getItem("lang") as Lang) || "en";
    const savedTheme = localStorage.getItem("theme") || "light";
    setLang(savedLang);
    setDark(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  function changeLang(next: Lang) {
    setLang(next);
    localStorage.setItem("lang", next);
  }

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return { lang, changeLang, dark, toggleTheme };
}