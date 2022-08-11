import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Header, MainContainer, ConfettiRain } from "@/main-components";
import { WordInputContainer } from "@/word-entry";

import { getRandomWord, getRandomShortWord } from "@/data";

export default function Home() {
  const [wordToSpell, setWordToSpell] = useState(null);
  const [allMatch, setAllMatch] = useState(false);

  useEffect(() => {
    const randomWord = isMobile ? getRandomShortWord() : getRandomWord();
    setWordToSpell(randomWord);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>🐝 ხ-ვ-ი-ჩ-ა, ხვიჩა!</title>
      </Head>
      {allMatch && <ConfettiRain />}
      <div
        className={`w-full h-screen grid place-items-center px-10
        ${
          !allMatch
            ? "bg-gradient-to-tr from-sky-500 to-red-500"
            : "bg-gradient-to-r from-teal-500 to-violet-500"
        }
      `}
      >
        {wordToSpell && (
          <MainContainer>
            <Header {...{ wordToSpell, allMatch }} />
            <WordInputContainer {...{ wordToSpell, allMatch, setAllMatch }} />
          </MainContainer>
        )}
      </div>
    </Fragment>
  );
}
