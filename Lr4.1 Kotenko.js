function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function convertFirstLetter(input) {
  if (!input) {
    return "Будь ласка, введіть текст.";
  }

  return `Результат: ${ucFirst(input)}`;
}