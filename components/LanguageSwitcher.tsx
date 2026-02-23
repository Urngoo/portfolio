"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  function setLocale(locale: string) {
    const parts = pathname.split("/");
    parts[1] = locale;
    router.push(parts.join("/"));
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition"
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}