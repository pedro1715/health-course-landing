import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// ── Telegram helper ───────────────────────────────────────────────────────────

async function sendTelegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.warn('Telegram credentials not configured');
    return;
  }
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  });
  return res.json();
}

// ── Lead form ─────────────────────────────────────────────────────────────────

app.post('/api/lead', async (req, res) => {
  const { name, email, phone, question, source } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const text =
    `🌿 <b>Нова заявка на курс</b>\n\n` +
    `👤 <b>Ім'я:</b> ${name}\n` +
    `📧 <b>Email:</b> ${email}\n` +
    `📱 <b>Телефон:</b> ${phone}\n` +
    (question ? `💬 <b>Питання:</b> ${question}\n` : '') +
    `📍 <b>Джерело:</b> ${source || 'Форма на сайті'}\n` +
    `🕐 <b>Час:</b> ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}`;

  try {
    await sendTelegram(text);
    res.json({ success: true });
  } catch (err) {
    console.error('Telegram error:', err);
    res.status(500).json({ error: 'Failed to send notification' });
  }
});

// ── WayForPay payment ─────────────────────────────────────────────────────────

app.post('/api/payment', (req, res) => {
  const merchant = process.env.WAYFORPAY_MERCHANT;
  const secretKey = process.env.WAYFORPAY_SECRET_KEY;
  const domain = process.env.APP_DOMAIN || 'health-course.com.ua';

  if (!merchant || !secretKey) {
    return res.status(500).json({ error: 'Payment not configured' });
  }

  const orderRef = `ORDER_${Date.now()}`;
  const orderDate = Math.floor(Date.now() / 1000);
  const productName = "Курс про здоров'я: харчування, фізична активність, сон";
  const productCount = 1;
  const productPrice = process.env.COURSE_PRICE || '1499';
  const currency = 'UAH';
  const amount = productPrice;

  const signData = [
    merchant,
    orderRef,
    domain,
    orderDate,
    amount,
    currency,
    productName,
    productCount,
    productPrice,
  ].join(';');

  const signature = crypto.createHmac('md5', secretKey).update(signData).digest('hex');

  res.json({
    merchantAccount: merchant,
    merchantDomainName: domain,
    orderReference: orderRef,
    orderDate,
    amount,
    currency,
    productName: [productName],
    productCount: [productCount],
    productPrice: [productPrice],
    merchantSignature: signature,
    returnUrl: `https://${domain}/thank-you`,
    serviceUrl: `https://${domain}/api/payment/callback`,
  });
});

// ── WayForPay callback ────────────────────────────────────────────────────────

app.post('/api/payment/callback', async (req, res) => {
  const { orderReference, transactionStatus, amount, currency } = req.body;

  if (transactionStatus === 'Approved') {
    const text =
      `💳 <b>Успішна оплата курсу!</b>\n\n` +
      `🔖 <b>Замовлення:</b> ${orderReference}\n` +
      `💰 <b>Сума:</b> ${amount} ${currency}\n` +
      `🕐 <b>Час:</b> ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}`;
    await sendTelegram(text).catch(console.error);
  }

  const secretKey = process.env.WAYFORPAY_SECRET_KEY || '';
  const responseData = `${orderReference};accept;${Math.floor(Date.now() / 1000)}`;
  const responseSignature = crypto.createHmac('md5', secretKey).update(responseData).digest('hex');

  res.json({
    orderReference,
    status: 'accept',
    time: Math.floor(Date.now() / 1000),
    signature: responseSignature,
  });
});

// ── Catch-all → React SPA ─────────────────────────────────────────────────────

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
