import { useState } from "react";

import { focusAndSelectHandler } from "@/helpers";
import { CheckButton, RefreshButton } from "@/buttons";
import { Warning } from "@/main-components";
import LetterInput from "./LetterInput";

export default function WordInputContainer({
  wordToSpell,
  setAllMatch,
  allMatch,
}) {
  const [wipAttempt, setWipAttempt] = useState([]);
  const [attempt, setAttempt] = useState([]);
  const [isDirty, setIsDirty] = useState(false);

  function updateAttempt(event) {
    const updatedAttempt = [...wipAttempt];
    updatedAttempt[event.target.name] = event.target.value;
    setWipAttempt(updatedAttempt);
    setIsDirty(false);
  }

  function handleKeyUp(event, index) {
    updateAttempt(event);
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
      {isDirty && !allMatch && <Warning />}
      {allMatch ? <RefreshButton /> : <CheckButton onClick={checkWord} />}
    </div>
  );
}
