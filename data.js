// Bilingual content for site
window.SITE_COPY = {
  ru: {
    nav: { status: "Принимаю коллабы", lang: "EN", theme: { light: "Светлая", dark: "Тёмная" } },
    hero: {
      meta: ["Москва · GMT+3", "С 2020", "Сейчас — фитнес и код"],
      // h1 will be assembled in JSX
      lines: [
        ["Я ", "Данил", ". Управляю фитнес-клубом и вайб-кожу приложения, которых мне самому не хватает."],
      ],
      sub: [
        { kind: "lead", text: "Между утренним обходом зала и поздним `git push` — пытаюсь сделать так, чтобы фитнес был чуть менее душным, а его инструменты — чуть менее уродливыми." },
        { kind: "lead", text: "Этот сайт — место, куда я складываю то, что довёл хотя бы до бета-версии." },
      ],
      aside: [
        { label: "Сейчас", value: "Готовлю v2 AI-дневника", pulse: true },
        { label: "Роль", value: "Директор · Вайб-кодер" },
        { label: "Стек", value: "Голова, Claude Code, ChatGPT" },
      ],
    },
    projects: {
      title: "Проекты",
      index: "01 — Index",
      hint: "Кликни любой — расскажу подробнее",
    },
    footer: {
      title: ["Напишите. ", "Серьёзно."],
      sub: "Открыт к коллабам по фитнес-продуктам, AI-инструментам и всему, что находится на их пересечении. Резюме не высылаю, обучения не провожу, рекламу не делаю. ONLY партнёрство в интересном проекте.",
      links: [
        { label: "Email",    value: "info@eatlyy.ru", href: "mailto:info@eatlyy.ru" },
        { label: "YouTube",  value: "Канал про спорт и код", href: "#" },
      ],
      colophon: ["© 2026 — Данил Д.", "Сделано вручную. И с любовью к деталям."],
    },
  },
  en: {
    nav: { status: "Open for collabs", lang: "RU", theme: { light: "Light", dark: "Dark" } },
    hero: {
      meta: ["Moscow · GMT+3", "Since 2020", "Currently — fitness & code"],
      lines: [
        ["I'm ", "Danil", ". I run a fitness club and vibe-code the apps I personally couldn't find."],
      ],
      sub: [
        { kind: "lead", text: "Between morning gym rounds and late-night `git push` — I try to make fitness a little less stuffy, and its tools a little less ugly." },
        { kind: "lead", text: "This site is where I put things I've taken at least to a beta." },
      ],
      aside: [
        { label: "Now", value: "Shipping v2 of the AI diary", pulse: true },
        { label: "Role", value: "Director · Vibe-coder" },
        { label: "Stack", value: "Brain, Claude Code, ChatGPT" },
      ],
    },
    projects: {
      title: "Projects",
      index: "01 — Index",
      hint: "Click any — I'll tell you more",
    },
    footer: {
      title: ["Write me. ", "Seriously."],
      sub: "Open to collabs around fitness products, AI tools, and the intersection of the two. No resumes, no courses, no ads. ONLY partnership on an interesting project.",
      links: [
        { label: "Email",    value: "info@eatlyy.ru", href: "mailto:info@eatlyy.ru" },
        { label: "YouTube",  value: "Channel about sport & code", href: "#" },
      ],
      colophon: ["© 2026 — Danil D.", "Handmade. With care for the details."],
    },
  },
};

window.PROJECTS = [
  {
    id: "ai-diary",
    year: "2025 — now",
    status: { ru: "В работе · бета", en: "Live · beta" },
    title: {
      ru: ["AI-дневник ", "питания"],
      en: ["AI nutrition ", "diary"],
    },
    tagline: {
      ru: "Дневник питания, который не превращается в Excel.",
      en: "A food diary that doesn't turn into Excel.",
    },
    short: {
      ru: "Telegram- и MAX-бот: фотографируешь тарелку — получаешь КБЖУ и трезвый комментарий. Без баллов, очков и стрел вверх.",
      en: "A Telegram & MAX bot: snap your plate — get macros and a sober comment. No points, no streaks, no upward arrows.",
    },
    body: {
      ru: [
        "Идея простая: 90% людей бросают дневники питания через неделю, потому что заносить каждый огурец вручную — занятие для святых. Тут весь ввод сводится к одному действию — отправил фото, получил разбор.",
        "Под капотом — Vision-модель для распознавания состава, расчёт КБЖУ по локализованной базе продуктов и небольшой LLM-слой, который отвечает по-человечески, без `воды попей и всё будет хорошо`.",
      ],
      en: [
        "The idea is simple: 90% of people quit food diaries within a week because logging every cucumber by hand is a job for saints. Here, the whole input boils down to one action — send a photo, get a breakdown.",
        "Under the hood — a vision model for composition, macro calc against a localized food database, and a small LLM layer that talks like a human, without `just drink water and you'll be fine`.",
      ],
    },
    tags: ["TG Bot", "MAX", "Vision", "GPT-4o", "Supabase"],
    meta: {
      role: { ru: "Идея, код, дизайн", en: "Idea, code, design" },
      year: { ru: "2025 → сейчас", en: "2025 → now" },
    },
    cta: [
      { label: { ru: "Открыть бота", en: "Open the bot" }, primary: true, href: "https://t.me/EATLYY_bot" },
      { label: { ru: "TG · @EATLYY_bot", en: "TG · @EATLYY_bot" }, href: "https://t.me/EATLYY_bot", platform: "tg" },
      { label: { ru: "MAX · id222516043000_bot", en: "MAX · id222516043000_bot" }, href: "https://max.ru/id222516043000_bot", platform: "max" },
    ],
    screenshots: [
      { src: "eatly-dashboard.png", alt: { ru: "Главный экран дневника", en: "Diary home screen" } },
      { src: "eatly-analysis.png", alt: { ru: "AI-анализ фото блюда", en: "AI photo analysis" } },
      { src: "eatly-stats.png", alt: { ru: "Статистика и вес", en: "Stats and weight" } },
    ],
    cover: { kind: "diary" },
  },
  {
    id: "trainer-agg",
    year: "2026",
    status: { ru: "Прототип · в поиске партнёра", en: "Prototype · seeking partner" },
    title: {
      ru: ["Агрегатор ", "тренеров"],
      en: ["Trainer ", "aggregator"],
    },
    tagline: {
      ru: "Тиндер для фитнес-тренеров. Но без свайпов.",
      en: "Tinder for fitness trainers. But without the swipes.",
    },
    short: {
      ru: "Прототип маркетплейса: тренеры заводят аккуратные карточки, клиент находит подходящего по цели, бюджету и району — без созвонов с менеджером.",
      en: "A marketplace prototype: trainers get tidy profiles, the client finds the right one by goal, budget and district — no manager calls.",
    },
    body: {
      ru: [
        "В индустрии есть две крайности — `позвоните и мы что-нибудь придумаем` и громоздкие площадки с отзывами 2014 года. Идея — собрать ровно ту прослойку между, без которой тренеры теряют клиентов, а клиенты ищут тренера три недели.",
        "Фокус прототипа: карточка тренера (которая не стыдно показывать), фильтры под реальные сценарии (`похудение к лету`, `восстановление после спины`) и оплата за лиды, а не за пустые показы.",
      ],
      en: [
        "The industry has two extremes — `give us a call and we'll figure something out` and clunky platforms still living in 2014 reviews. The idea: build exactly the middle layer that's missing, the one without which trainers lose clients and clients search for a trainer for three weeks.",
        "Prototype focus: a trainer card you wouldn't be embarrassed to share, filters built around real scenarios (`summer cut`, `post-back-injury return`), and pay-per-lead instead of empty impressions.",
      ],
    },
    tags: ["Marketplace", "Figma", "Next.js", "Stripe", "Prototype"],
    meta: {
      role: { ru: "Продукт, UX, прототип", en: "Product, UX, prototype" },
      year: { ru: "2026", en: "2026" },
      stage: { ru: "Pre-MVP", en: "Pre-MVP" },
    },
    cta: [
      { label: { ru: "Открыть прототип", en: "Open the prototype" }, primary: true, href: "https://prostoepitanie-production.up.railway.app/experts" },
    ],
    screenshots: [
      { src: "trainer-experts.png", format: "desktop", alt: { ru: "Кабинет эксперта", en: "Expert dashboard" } },
      { src: "trainer-landing.png", format: "desktop", alt: { ru: "Лендинг для тренеров", en: "Landing for trainers" } },
      { src: "trainer-howto.png",   format: "desktop", alt: { ru: "Как это работает", en: "How it works" } },
    ],
    cover: { kind: "trainers" },
  },
  {
    id: "youtube",
    year: "2026",
    status: { ru: "Скоро будет доступно", en: "Coming soon" },
    title: {
      ru: ["YouTube-", "канал"],
      en: ["YouTube ", "channel"],
    },
    tagline: {
      ru: "Спорт и код в одном плейлисте.",
      en: "Sport and code in one playlist.",
    },
    short: {
      ru: "Раз в неделю — короткое видео: от разбора тренажёрки до того, как я за вечер собрал MVP. Без `шок-контента` и кричащих превью.",
      en: "One short video a week: from gym walkthroughs to me building an MVP in an evening. No `shock content`, no screaming thumbnails.",
    },
    body: {
      ru: [
        "Канал начался как способ не объяснять клиентам одно и то же десятый раз. Сейчас это плейлист, который я бы сам хотел смотреть: про тело, про инструменты, про то, как одно помогает другому.",
        "Стиль — спокойный голос, аккуратные титры, никаких `подпишись и поставь лайк` в первые 5 секунд.",
      ],
      en: [
        "The channel started as a way to stop explaining the same things to clients for the tenth time. Now it's the playlist I'd want to watch myself: about the body, the tools, and how one helps the other.",
        "Style — calm voice, tidy titles, no `like and subscribe` in the first 5 seconds.",
      ],
    },
    tags: ["YouTube", "Video", "Editing", "Weekly"],
    meta: {
      role: { ru: "Сценарий, монтаж, голос", en: "Script, edit, voice" },
      year: { ru: "2026", en: "2026" },
      cadence: { ru: "1 видео / неделю", en: "1 video / week" },
    },
    cta: [
      { label: { ru: "Скоро будет доступно", en: "Coming soon" }, disabled: true, href: "#" },
    ],
    cover: { kind: "youtube" },
  },
];
