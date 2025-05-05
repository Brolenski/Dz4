function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('рос') || lowerStr.includes('xxx');
}

function checkText(input) {
  if (!input) {
    return "Будь ласка, введіть текст.";
  }

  const isSpam = checkSpam(input);
  return isSpam ? "Виявлено спам!" : "Текст не містить спам.";
}