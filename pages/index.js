import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Header, WordInputContainer } from "../components";

import { getRandomWord, getRandomShortWord } from "../data/words";

export default function Home() {
  const [wordToSpell, setWordToSpell] = useState(null);
  const [allMatch, setAllMatch] = useState(false);

  useEffect(() => {
    const randomWord = isMobile ? getRandomShortWord() : getRandomWord();
    setWordToSpell(randomWord);
  }, []);

  return (
    <div className="w-full h-screen bg-slate-200 grid place-items-center px-10">
      {wordToSpell && (
        <div className="w-full sm:w-[510px] px-5 py-10 sm:p-15 bg-white rounded-md">
          <Header wordToSpell={wordToSpell} />
          <WordInputContainer {...{ wordToSpell, allMatch, setAllMatch }} />
        </div>
      )}
    </div>
  );
}
