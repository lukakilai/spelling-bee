const words = [
  "მაპი",
  "ნატო",
  "ეროვნულიუსაფრთხოება",
  "ევროინტეგრაცია",
  "დემოკრატია",
  "თანასწორობა",
  "თავისუფლება",
  "ტოლერანტობა",
  "სეკულარიზმი",
  "გამჭირვალობა",
  "თავისუფალისასამართლო",
  "ადამიანისუფლებები",
  "ძლიერიეკონომიკა",
];

export function getRandomShortWord() {
  const shortWords = words.filter((word) => word.length <= 4);
  const index = Math.floor(Math.random() * shortWords.length);
  return shortWords[index];
}

export function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
