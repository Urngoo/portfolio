import type { Lang } from "./usePreference";

export const content: Record<Lang, any> = {
  en: {
    nav: { experience: "Experience", projects: "Projects", skills: "Skills", about: "About", contact: "Contact" },
    hero: {
      role: "CS Student · Part-time Developer",
      name: "Urangoo Ariunbaatar",
      headline: "Building clean web apps and AI-driven projects.",
      sub: "I like challenging myself across different paths in computer science—from frontend development to AI research.",
      ctaProjects: "View Projects",
      ctaContact: "Contact"
    },
    experience: {
      title: "Experience",
      items: [
        { company: "Friendly Elevatec", role: "JavaScript Developer (Intern / Part-time)", time: "Part-time", desc: "Built small web features and improvements with a clean UI focus." },
        { company: "Shinagawa IT Company", role: "Intern", time: "7 weeks", desc: "Supported development tasks and learned team workflow and delivery." },
        { company: "USPM", role: "Web Tester (Part-time)", time: "Part-time", desc: "Tested web features, reported bugs, and improved UI quality." }
      ]
    },
    projects: {
      title: "Featured Projects",
      p1: {
        name: "Thanksgiving Message Website",
        tag: "Display page + Admin panel",
        features: ["Public message display", "Admin page for managing content", "Responsive layout"],
        stack: "Next.js · TypeScript · Tailwind"
      },
      p2: {
        name: "Thesis: ST-GCN Sign Language Recognition",
        tag: "Mongolian fingerspelling recognition (35 letters)",
        features: ["Single-hand MediaPipe keypoints (21)", "ST-GCN training pipeline (PyTorch)", "Dataset balancing + experiments"],
        stack: "Python · PyTorch · MediaPipe"
      }
    },
    skills: {
      title: "Skills",
      groups: {
        Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Vue.js"],
        Services: ["Supabase", "Firebase"],
        Databases: ["MongoDB", "MySQL"],
        Other: ["Java", "Python"]
      }
    },
    about: {
      title: "About",
      text: "CS student at New Mongol College of Technology (2021–Present, Class of 2026). I enjoy UI-focused web apps and exploring AI. Outside tech, I like knitting, reading, and eating."
    },
    contact: { title: "Contact", text: "Want to collaborate? Reach out:", email: "s21c125b@nmct.edu.mn" }
  },

  mn: {
    nav: { experience: "Туршлага", projects: "Төслүүд", skills: "Чадвар", about: "Миний тухай", contact: "Холбоо барих" },
    hero: {
      role: "CS оюутан · Part-time хөгжүүлэгч",
      name: "Урангоо Ариунбаатар",
      headline: "Цэвэрхэн вэб апп болон AI төслүүд бүтээдэг.",
      sub: "CS-ийн өөр өөр чиглэлд өөрийгөө сорих дуртай — frontend хөгжүүлэлтээс AI хүртэл.",
      ctaProjects: "Төслүүдийг үзэх",
      ctaContact: "Холбогдох"
    },
    experience: {
      title: "Туршлага",
      items: [
        { company: "Friendly Elevatec", role: "JavaScript хөгжүүлэгч (Intern / Part-time)", time: "Part-time", desc: "Жижиг веб функцүүд болон сайжруулалт дээр ажилласан." },
        { company: "Shinagawa IT компани", role: "Интерн", time: "7 долоо хоног", desc: "Багийн хөгжүүлэлт, урсгал, хүргэлт дээр туршлага авсан." },
        { company: "USPM", role: "Вэб тестер (Part-time)", time: "Part-time", desc: "Функц тестлэж, алдаа мэдээлж, UI чанарыг сайжруулсан." }
      ]
    },
    projects: {
      title: "Онцлох төслүүд",
      p1: {
        name: "Thanksgiving мессежийн вэб",
        tag: "Харагдах хуудас + Админ хэсэг",
        features: ["Мессежийн public дэлгэц", "Админ хэсгээр удирдах", "Responsive зохион байгуулалт"],
        stack: "Next.js · TypeScript · Tailwind"
      },
      p2: {
        name: "Диплом: ST-GCN дохионы хэл таних",
        tag: "Монгол fingerspelling (35 үсэг) таних",
        features: ["Нэг гарын MediaPipe keypoints (21)", "PyTorch дээр ST-GCN сургалт", "Dataset balancing + туршилт"],
        stack: "Python · PyTorch · MediaPipe"
      }
    },
    skills: {
      title: "Чадвар",
      groups: {
        Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Vue.js"],
        Services: ["Supabase", "Firebase"],
        Databases: ["MongoDB", "MySQL"],
        Other: ["Java", "Python"]
      }
    },
    about: {
      title: "Миний тухай",
      text: "New Mongol College of Technology-ийн CS оюутан (2021–Одоо, 2026 төгсөнө). UI төвтэй вэб апп хийх, AI судлах дуртай. Чөлөөт цагаараа нэхэх, ном унших, хоол идэх дуртай."
    },
    contact: { title: "Холбоо барих", text: "Хамтран ажиллах уу? Холбогдоорой:", email: "s21c125b@nmct.edu.mn" }
  },

  ja: {
    nav: { experience: "経験", projects: "プロジェクト", skills: "スキル", about: "自己紹介", contact: "連絡先" },
    hero: {
      role: "CS学生 · パートタイム開発者",
      name: "ウランゴー・アリウンバートル",
      headline: "綺麗なWebアプリとAI関連プロジェクトを作ります。",
      sub: "CSの様々な分野に挑戦するのが好きです。フロントエンドからAIまで取り組んでいます。",
      ctaProjects: "プロジェクトを見る",
      ctaContact: "連絡する"
    },
    experience: {
      title: "経験",
      items: [
        { company: "フレンドリー・エレバテック", role: "JavaScript開発（インターン / パートタイム）", time: "パートタイム", desc: "小規模なWeb機能の実装・改善を担当しました。" },
        { company: "品川IT企業", role: "インターン", time: "7週間", desc: "開発タスクを支援し、チーム開発の進め方を学びました。" },
        { company: "USPM", role: "Webテスター（パートタイム）", time: "パートタイム", desc: "テストとバグ報告を行い、UI品質向上を支援しました。" }
      ]
    },
    projects: {
      title: "主なプロジェクト",
      p1: {
        name: "Thanksgiving メッセージサイト",
        tag: "表示ページ + 管理ページ",
        features: ["メッセージ表示", "管理ページで運用", "レスポンシブUI"],
        stack: "Next.js · TypeScript · Tailwind"
      },
      p2: {
        name: "卒業研究：ST-GCN 手話認識",
        tag: "モンゴル語フィンガースペリング（35文字）",
        features: ["片手のMediaPipeキーポイント（21）", "PyTorchでST-GCN学習", "データ調整と実験"],
        stack: "Python · PyTorch · MediaPipe"
      }
    },
    skills: {
      title: "スキル",
      groups: {
        Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Vue.js"],
        Services: ["Supabase", "Firebase"],
        Databases: ["MongoDB", "MySQL"],
        Other: ["Java", "Python"]
      }
    },
    about: {
      title: "自己紹介",
      text: "New Mongol College of Technology（2021〜現在、2026年卒）のCS学生です。UI中心のWebアプリ作りとAI学習が好きです。趣味は編み物、読書、食べ歩きです。"
    },
    contact: { title: "連絡先", text: "コラボやお仕事の相談はこちら：", email: "s21c125b@nmct.edu.mn" }
  }
};