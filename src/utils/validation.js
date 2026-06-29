export function validateName(value) {
  if (!value || value.trim().length < 2) return "Введіть ім'я (мін. 2 символи)";
  if (value.trim().length > 60) return "Ім'я занадто довге";
  return null;
}

export function validateEmail(value) {
  if (!value || !value.trim()) return 'Введіть email';
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value.trim())) return 'Невірний формат email';
  return null;
}

export function validatePhone(value) {
  if (!value || !value.trim()) return 'Введіть номер телефону';
  const digits = value.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return 'Невірний номер телефону';
  return null;
}

export function validateForm(fields) {
  const errors = {};
  const nameErr = validateName(fields.name);
  if (nameErr) errors.name = nameErr;
  const emailErr = validateEmail(fields.email);
  if (emailErr) errors.email = emailErr;
  const phoneErr = validatePhone(fields.phone);
  if (phoneErr) errors.phone = phoneErr;
  return errors;
}
