# danil.site

Личный сайт-портфолио. Минималистичный editorial-вайб, ru/en, светлая/тёмная темы.

## Проекты на сайте
- **AI-дневник питания (EATLYY)** — Telegram & MAX боты
- **Агрегатор фитнес-тренеров** — прототип маркетплейса
- **YouTube канал** — скоро

## Структура

```
index.html         — HTML-каркас, шрифты, мета-теги, счётчик Метрики
styles.css         — все стили (CSS variables, темы, адаптив)
data.js            — двуязычный контент: ru/en копирайт + данные проектов
app.jsx            — React-приложение (Nav, Hero, Projects, Modal, Footer)
tweaks-panel.jsx   — встроенная панель твиков (акцент, плотность)
assets/            — скриншоты проектов
```

## Стек
- Чистый HTML + CSS (без сборщика)
- React 18 через UMD
- JSX компилируется в браузере через `@babel/standalone`
- Шрифты — Google Fonts: Instrument Serif, Geist, JetBrains Mono
- Аналитика — Яндекс.Метрика

## Запуск локально

Любым статическим сервером, например:

```bash
python3 -m http.server 8000
# или
npx serve .
```

Открыть `http://localhost:8000`.

## Деплой

Это статичный сайт — можно положить на GitHub Pages, Vercel, Netlify, Cloudflare Pages — куда угодно. Никакой сборки не требуется.

### GitHub Pages
1. Запушить репозиторий
2. Settings → Pages → Source: `Deploy from a branch`, ветка `main`, папка `/ (root)`
3. Сайт будет доступен по адресу `https://<username>.github.io/<repo>/`

### Vercel / Netlify
Просто подключить репозиторий — фреймворк определяется как «static», build command пустой, output directory — корень.

## Редактирование контента

Весь текст и список проектов — в `data.js`. Структура каждого проекта:

```js
{
  id: "ai-diary",
  year: "2025 — now",
  status: { ru: "...", en: "..." },
  title: { ru: ["Часть 1 ", "акцент"], en: [...] },
  tagline: { ru: "...", en: "..." },
  short: { ru: "...", en: "..." },
  body: { ru: ["абзац 1", "абзац 2"], en: [...] },
  tags: ["TG Bot", "MAX", ...],
  meta: { role: {ru, en}, year: {ru, en} },
  cta: [
    { label: {ru, en}, primary: true, href: "..." },
    { label: {ru, en}, href: "...", platform: "tg" }, // platform-чип
    { label: {ru, en}, disabled: true, href: "#" },   // disabled-бейдж
  ],
  screenshots: [
    { src: "assets/...", format: "phone" | "desktop", alt: {ru, en} },
  ],
  cover: { kind: "diary" | "trainers" | "youtube" }, // SVG-фолбэк, если нет screenshots
}
```

## Лицензия
MIT — см. LICENSE.
