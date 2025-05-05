function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}

function truncateText(text, maxLength) {
  if (!text || isNaN(maxLength) || maxLength <= 0) {
    return "Будь ласка, введіть текст і коректну довжину.";
  }

  return `Результат: ${truncate(text, maxLength)}`;
}