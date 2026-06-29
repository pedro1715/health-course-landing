const BASE = import.meta.env.VITE_API_URL || '';

export async function submitLead(data) {
  const res = await fetch(`${BASE}/api/lead`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Помилка при відправці форми');
  }
  return res.json();
}

export async function initiatePayment() {
  const res = await fetch(`${BASE}/api/payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  if (!res.ok) throw new Error('Помилка при ініціалізації оплати');
  const data = await res.json();

  // Build and submit WayForPay form
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://secure.wayforpay.com/pay';
  form.style.display = 'none';

  const fields = {
    merchantAccount: data.merchantAccount,
    merchantDomainName: data.merchantDomainName,
    orderReference: data.orderReference,
    orderDate: data.orderDate,
    amount: data.amount,
    currency: data.currency,
    merchantSignature: data.merchantSignature,
    returnUrl: data.returnUrl,
    serviceUrl: data.serviceUrl,
    language: 'UA',
    paymentSystems: 'card;googlePay;applePay',
  };

  // Array fields
  data.productName.forEach((v, i) => appendHidden(form, `productName[${i}]`, v));
  data.productCount.forEach((v, i) => appendHidden(form, `productCount[${i}]`, v));
  data.productPrice.forEach((v, i) => appendHidden(form, `productPrice[${i}]`, v));

  Object.entries(fields).forEach(([k, v]) => appendHidden(form, k, v));

  document.body.appendChild(form);
  form.submit();
}

function appendHidden(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.appendChild(input);
}
