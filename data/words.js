const words = [
  "ხაშური",
  "ნაზუქი",
  "თბილისი",
  "წიქარა",
  "ბიძინა",
  "ირაკლი",
  "მიშა",
  "ჩაი",
  "ყავა",
];

export function getRandomShortWord() {
  const shortWords = words.filter((word) => word.length <= 5);
  const index = Math.floor(Math.random() * shortWords.length);
  return shortWords[index];
}

export function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
