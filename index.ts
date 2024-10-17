#!/usr/bin/env bun

function isBrowser() {
    return typeof window !== "undefined" &&
        typeof window.document !== "undefined";
}

const transpositionMap: { [key: string]: string } = {
    "C": "F",
    "C#": "F#",
    "D♭": "G♭",
    "D": "G",
    "D#": "G#",
    "E♭": "A♭",
    "E": "A",
    "F": "B♭",
    "F#": "B",
    "G♭": "B",
    "G": "C",
    "G#": "C#",
    "A♭": "D♭",
    "A": "D",
    "A#": "D#",
    "B♭": "E♭",
    "B": "E",
    "C'": "F'",
    "C#'": "F#'",
    "D♭'": "G♭'",
    "D'": "G'",
    "D#'": "G#'",
    "E♭'": "A♭'",
    "E'": "A'",
    "F'": "B♭'",
    "F#'": "B'",
    "G♭'": "B'",
    "G'": "C'",
};
let notes = prompt("🎼 ");
//if(!notes) process.exit(1)
if (!notes) throw new Error("Input is empty");

notes = notes.trim();
notes = notes.toUpperCase();
notes = notes.replace("’", "'");

const notesArray = notes.split(" ");

for (let i = 0; i < notesArray.length; i++) {
    const note = notesArray[i];
    if (note.length > 1 && note[1] === "B") {
        notesArray[i] = note[0] + "♭" + note.slice(2);
    }
}

const transposedNotesArray: string[] = [];
for (let i = 0; i < notesArray.length; i++) {
    const note = notesArray[i];
    let transposedNote = transpositionMap[note];
    if (transposedNote) {
        if (transposedNote.length > note.length) {
            notesArray[i] += " ";
        } else if (transposedNote.length < note.length) {
            transposedNote += " ";
        }
        transposedNotesArray.push(transposedNote);
    } else {
        transposedNotesArray.push(note);
    }
}

const notesNormalized = notesArray.join(" ");
const newNotes = transposedNotesArray.join(" ");

if (isBrowser()) {
    alert(`1: ${notesNormalized}\n2: ${newNotes}`);
} else {
    console.log(`\n1: ${notesNormalized}\n2: ${newNotes}`);
}
