import React from "react";

const errorClasses = "outline outline-offset-0 outline-red-400";
const successClasses = "outline outline-offset-0 outline-lime-400";

export default function LetterInput({
  index,
  isDirty,
  wordToSpell,
  attempt,
  handleKeyUp,
  allMatch,
}) {
  return (
    <input
      disabled={allMatch}
      type="text"
      name={index}
      id={index}
      maxLength={1}
      className={`border bg-slate-50 w-[45px] aspect-square rounded-md text-center text-xl focus:outline focus:outline-offset-0 focus:outline-sky-400 disabled:opacity-40
                  ${
                    isDirty &&
                    attempt[index] !== wordToSpell[index] &&
                    errorClasses
                  }
                  ${
                    isDirty &&
                    attempt[index] === wordToSpell[index] &&
                    successClasses
                  }
                `}
      onKeyUp={(event) => handleKeyUp(event, index)}
    />
  );
}
