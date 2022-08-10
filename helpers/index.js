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

export default function focusAndSelectHandler({ event, index, wordToSpell }) {
  if (doNothing.includes(event.code)) return;

  if (event.code === "Backspace") {
    if (event.target.value === "") {
      if (index !== 0) {
        focusAndSelect(index - 1);
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  }

  if (index + 1 === wordToSpell.length) {
    return;
  } else {
    focusAndSelect(index + 1);
  }
}
