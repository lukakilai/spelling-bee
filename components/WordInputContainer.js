import { useState } from "react";

import focusAndSelectHandler from "../helpers";

import CheckButton from "./Buttons/CheckButton";
import RefreshButton from "./Buttons/RefreshButton";

import LetterInput from "./LetterInput";

export default function WordInputContainer({
  wordToSpell,
  setAllMatch,
  allMatch,
}) {
  const [wipAttempt, setWipAttempt] = useState([]);
  const [attempt, setAttempt] = useState([]);
  const [isDirty, setIsDirty] = useState(false);

  function handleKeyUp(event, index) {
    const updatedAttempt = [...wipAttempt];
    updatedAttempt[event.target.name] = event.target.value;
    setWipAttempt(updatedAttempt);
    setIsDirty(false);

    focusAndSelectHandler({ event, index, wordToSpell });
  }

  function checkWord() {
    setAttempt(wipAttempt);
    setIsDirty(true);

    const lettersMatch = wordToSpell
      .split("")
      .map((letter, index) => letter === wipAttempt[index]);

    if (lettersMatch.every((match) => match === true)) {
      setAllMatch(true);
    }
  }

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <div className="flex flex-col justify-start items-center space-y-8">
      <div className="flex flex-row justify-start items-center space-x-4">
        {wordToSpell.split("").map((letter, index) => (
          <LetterInput
            key={`${letter}-${index}`}
            {...{ index, isDirty, wordToSpell, attempt, handleKeyUp, allMatch }}
          />
        ))}
      </div>
      {!allMatch && <CheckButton onClick={checkWord} />}
      {allMatch && <RefreshButton onClick={handleRefresh} />}
    </div>
  );
}
