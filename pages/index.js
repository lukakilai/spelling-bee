import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Header, WordInputContainer, MainContainer } from "components";

import { getRandomWord, getRandomShortWord } from "data";

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
        <title>🐝 სპელინგბი</title>
      </Head>
      <div className="w-full h-screen bg-slate-200 grid place-items-center px-10">
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
