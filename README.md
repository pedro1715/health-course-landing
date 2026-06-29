# Курс про здоров'я — Landing Page

React + Tailwind CSS лендинг для онлайн-курсу Юлії Негрієнко.

## Локальна розробка

```bash
cp .env.example .env      # заповніть змінні
npm install
npm run dev               # Vite dev server :5173
# В окремому терміналі:
node server.js            # API сервер :3000
```

## Деплой на Railway

### 1. Підготовка

```bash
git init
git add .
git commit -m "initial"
gh repo create health-course-landing --public --push
```

### 2. Новий проект на Railway

1. [railway.app](https://railway.app) → New Project → Deploy from GitHub repo
2. Обрати ваш репозиторій
3. Railway автоматично знайде `railway.json` і `Dockerfile`

### 3. Змінні оточення (Variables)

У Railway Dashboard → Variables додати:

| Змінна | Опис |
|--------|------|
| `TELEGRAM_BOT_TOKEN` | Токен бота від @BotFather |
| `TELEGRAM_CHAT_ID` | ID чату куди слати заявки |
| `WAYFORPAY_MERCHANT` | Merchant account від WayForPay |
| `WAYFORPAY_SECRET_KEY` | Secret key від WayForPay |
| `COURSE_PRICE` | Ціна курсу в UAH (за замовч. 1499) |
| `APP_DOMAIN` | Домен сайту (напр. `mysite.com`) |

### 4. Кастомний домен

Railway Dashboard → Settings → Domains → Add Custom Domain

---

## Замінити placeholder-контент

| Файл | Що змінити |
|------|-----------|
| `src/components/Hero.jsx` | Фото лікаря (`/doctor-photo.jpg`) |
| `src/components/About.jsx` | Фото лікаря у секції "Про автора" |
| `index.html` | OG image URL, домен сайту |
| `src/components/Footer.jsx` | Посилання на соцмережі, телефон, email |
| `src/components/Program.jsx` | Ціна курсу у UI |
| `.env` | Всі реальні ключі |

## Структура

```
src/
├── components/    # UI компоненти (по секціях)
├── hooks/         # useScrollAnimation
├── pages/         # Сторінки (index.jsx)
├── utils/         # api.js, validation.js
└── App.jsx        # Context + LeadForm modal
server.js          # Express: статика + /api/lead + /api/payment
```
