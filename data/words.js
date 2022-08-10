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

function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

export default getRandomWord;
