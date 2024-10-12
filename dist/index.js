// index.ts
function isBrowser() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}
var transpositionMap = {
  C: "F",
  "C#": "F#",
  "D\u266D": "G\u266D",
  D: "G",
  "D#": "G#",
  "E\u266D": "A\u266D",
  E: "A",
  F: "B\u266D",
  "F#": "B",
  "G\u266D": "B",
  G: "C",
  "G#": "C#",
  "A\u266D": "D\u266D",
  A: "D",
  "A#": "D#",
  "B\u266D": "E\u266D",
  B: "E",
  "C'": "F'",
  "C#'": "F#'",
  "D\u266D'": "G\u266D'",
  "D'": "G'",
  "D#'": "G#'",
  "E\u266D'": "A\u266D'",
  "E'": "A'",
  "F'": "B\u266D'",
  "F#'": "B'",
  "G\u266D'": "B'",
  "G'": "C'"
};
var notes = prompt("\uD83C\uDFBC ");
if (!notes)
  throw new Error("Input is empty");
notes = notes.trim();
notes = notes.toUpperCase();
notes = notes.replace("\u2019", "'");
var notesArray = notes.split(" ");
for (let i = 0;i < notesArray.length; i++) {
  const note = notesArray[i];
  if (note.length > 1 && note[1] === "B") {
    notesArray[i] = note[0] + "\u266D" + note.slice(2);
  }
}
var transposedNotesArray = [];
for (let i = 0;i < notesArray.length; i++) {
  const note = notesArray[i];
  const transposedNote = transpositionMap[note];
  if (transposedNote) {
    if (transposedNote.length > note.length) {
      notesArray[i] += " ";
    }
    transposedNotesArray.push(transposedNote);
  } else {
    transposedNotesArray.push(note);
  }
}
var notesNormalized = notesArray.join(" ");
var newNotes = transposedNotesArray.join(" ");
if (isBrowser()) {
  alert(`1: ${notesNormalized}\n2: ${newNotes}`);
} else {
  console.log();
  console.log("1: ", notesNormalized);
  console.log("2: ", newNotes);
}
