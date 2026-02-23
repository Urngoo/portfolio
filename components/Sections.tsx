"use client";

import { useTranslations } from "next-intl";

export function Sections() {
  const t = useTranslations();

  const exp = t.raw("experience.items") as Array<{
    company: string;
    role: string;
    time: string;
    desc: string;
  }>;

  return (
    <div className="relative z-10 mx-auto w-full max-w-5xl space-y-10 pb-20">
      {/* Experience */}
      <section id="experience" className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">{t("experience.title")}</h2>
        <div className="mt-6 grid gap-4">
          {exp.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-white font-medium">{item.company}</p>
                <p className="text-white/70 text-sm">{item.time}</p>
              </div>
              <p className="text-white/90 mt-1">{item.role}</p>
              <p className="text-white/75 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">{t("projects.title")}</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ProjectCard
            title={t("projects.p1.name")}
            tagline={t("projects.p1.tagline")}
            stack={t("projects.p1.stack")}
            features={t.raw("projects.p1.features") as string[]}
          />
          <ProjectCard
            title={t("projects.p2.name")}
            tagline={t("projects.p2.tagline")}
            stack={t("projects.p2.stack")}
            features={t.raw("projects.p2.features") as string[]}
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">{t("skills.title")}</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <SkillGroup title={t("skills.frontend")} items={["HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind","Vue.js"]} />
          <SkillGroup title={t("skills.backend")} items={["Supabase","Firebase"]} />
          <SkillGroup title={t("skills.db")} items={["MongoDB","MySQL"]} />
          <SkillGroup title={t("skills.other")} items={["Java","Python"]} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">{t("about.title")}</h2>
        <p className="mt-4 text-white/80 leading-relaxed">{t("about.text")}</p>
      </section>

      {/* Contact */}
      <section id="contact" className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">{t("contact.title")}</h2>
        <p className="mt-4 text-white/80">{t("contact.text")}</p>

        <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-5">
          <p className="text-white/80 text-sm">{t("contact.email")}</p>
          <p className="text-white font-medium">s21c125b@nmct.edu.mn</p>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  title,
  tagline,
  stack,
  features
}: {
  title: string;
  tagline: string;
  stack: string;
  features: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <p className="text-white font-semibold text-lg">{title}</p>
      <p className="text-white/75 mt-1 text-sm">{tagline}</p>

      <ul className="mt-4 space-y-2 text-white/80 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1">•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-white/70 text-xs">{stack}</p>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <p className="text-white font-medium">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}