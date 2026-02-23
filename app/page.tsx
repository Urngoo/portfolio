"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import me from "./me.jpg"; // keep your image here
import { usePreferences, type Lang } from "@/components/usePreference";
import { content } from "@/components/translations";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  const { lang, changeLang, dark, toggleTheme } = usePreferences();
  const t = content[lang];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#140a10] px-6 py-10">
      <Particles />

      {/* Top bar */}
      <div className="relative z-10 mx-auto w-full max-w-5xl flex items-center justify-between">
        <div className="text-white font-medium">{t.hero.name}</div>

        <div className="flex items-center gap-2">
          <LangButton current={lang} onChange={changeLang} />
          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition"
          >
            {dark ? "Dark" : "Light"}
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 flex min-h-[90vh] items-center justify-center">
        <motion.main
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-full max-w-5xl h-[75vh]
            rounded-3xl
            bg-[#FB9B8F]/70 dark:bg-white/10
            backdrop-blur-md
            shadow-2xl
            border border-white/20
            p-8 md:p-12
            flex flex-col md:flex-row gap-10
          "
        >
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-white/80 text-sm tracking-wide">{t.hero.role}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-white leading-tight">
              {t.hero.name}
            </h1>

            <p className="mt-4 text-white/95 text-lg">{t.hero.headline}</p>
            <p className="mt-3 text-white/80 max-w-xl">{t.hero.sub}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium shadow hover:scale-[1.02] transition"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/60 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                {t.hero.ctaContact}
              </a>
            </div>

            <div className="mt-7 grid gap-2 text-white/75 text-sm">
              <p>📍 UB</p>
              <p>🎓 New Mongol College of Technology (2021–Present, Class of 2026)</p>
              <p>🧠 Learning now: AI training</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative h-64 w-64 md:h-80 md:w-80 rounded-3xl overflow-hidden border border-white/25 shadow-xl"
            >
              <Image src={me} alt="Profile" fill className="object-cover" priority />
            </motion.div>
          </div>
        </motion.main>
      </div>

      {/* Sections */}
      <div className="relative z-10 mx-auto w-full max-w-5xl space-y-10 pb-20">
        <Section id="experience" title={t.experience.title}>
          <div className="grid gap-4">
            {t.experience.items.map((item: any, idx: number) => (
              <div key={idx} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-white font-medium">{item.company}</p>
                  <p className="text-white/70 text-sm">{item.time}</p>
                </div>
                <p className="text-white/90 mt-1">{item.role}</p>
                <p className="text-white/75 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title={t.projects.title}>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard p={t.projects.p1} />
            <ProjectCard p={t.projects.p2} />
          </div>
        </Section>

        <Section id="skills" title={t.skills.title}>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(t.skills.groups).map(([group, items]: any) => (
              <div key={group} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-white font-medium">{group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s: string) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" title={t.about.title}>
          <p className="text-white/80 leading-relaxed">{t.about.text}</p>
        </Section>

        <Section id="contact" title={t.contact.title}>
          <p className="text-white/80">{t.contact.text}</p>
          <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5">
            <p className="text-white/70 text-sm">Email</p>
            <p className="text-white font-medium">{t.contact.email}</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

function LangButton({
  current,
  onChange
}: {
  current: Lang;
  onChange: (l: Lang) => void;
}) {
  const langs: Lang[] = ["en", "mn", "ja"];
  return (
    <div className="flex items-center gap-2">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={[
            "rounded-full border px-3 py-1 text-xs transition",
            current === l
              ? "border-white/60 bg-white/25 text-white"
              : "border-white/35 bg-white/10 text-white hover:bg-white/20"
          ].join(" ")}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 md:p-10"
    >
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ProjectCard({ p }: { p: any }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
      <p className="text-white font-semibold text-lg">{p.name}</p>
      <p className="text-white/75 mt-1 text-sm">{p.tag}</p>

      <ul className="mt-4 space-y-2 text-white/80 text-sm">
        {p.features.map((f: string, i: number) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1">•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-white/70 text-xs">{p.stack}</p>
    </div>
  );
}