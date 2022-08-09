import { useState } from "react";

function focusAndSelect(id) {
  window.document.getElementById(id).focus();
  window.document.getElementById(id).select();
}

const doNothing = [
  "Tab",
  "ShiftLeft",
  "ShiftRight",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "ControlLeft",
  "ControlRight",
  "OSLeft",
  "AltLeft",
  "AltRight",
];

const errorClasses = "outline outline-offset-0 outline-red-500";
const successClasses = "outline outline-offset-0 outline-green-500";

export default function Home() {
  const wordToSpell = "ხაშური";

  const [wipAttempt, setWipAttempt] = useState([]);
  const [attempt, setAttempt] = useState([]);
  const [isDirty, setIsDirty] = useState(false);

  function handleKeyUp(event, index) {
    const updatedAttempt = [...wipAttempt];
    updatedAttempt[event.target.name] = event.target.value;
    setWipAttempt(updatedAttempt);
    setIsDirty(false);

    if (doNothing.includes(event.code)) return;

    if (event.code === "Backspace") {
      if (event.target.value === "") {
        if (index !== 0) {
          focusAndSelect(index - 1);
          return;
        } else {
          return;
        }
      }
    }

    if (index + 1 === wordToSpell.length) {
      return;
    } else {
      focusAndSelect(index + 1);
    }
  }

  function checkWord() {
    setAttempt(wipAttempt);
    setIsDirty(true);

    const lettersMatch = wordToSpell
      .split("")
      .map((letter, index) => letter === attempt[index]);
    if (lettersMatch.every((match) => match === true)) {
      alert("SG");
    }
  }

  return (
    <div className="w-full h-screen bg-green-200 grid place-items-center">
      <div className="p-20 bg-white border rounded-md">
        <div className="flex flex-col justify-start items-center space-y-8">
          <div className="flex flex-row justify-start items-center space-x-4">
            {wordToSpell.split("").map((letter, index) => (
              <input
                key={index}
                type="text"
                name={index}
                id={index}
                maxLength={1}
                className={`border bg-slate-50 w-[50px] aspect-square rounded-md text-center text-2xl
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
            ))}
          </div>
          <button
            type="button"
            className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg"
            onClick={checkWord}
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
