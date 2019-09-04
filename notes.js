const fs = require("fs");
const chalk = require("chalk");

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length !== 0) {
    console.log(chalk.inverse(" You have " + notes.length + " notes: "));
    notes.forEach(note => console.log("- " + note.title + ": " + note.body));
  } else {
    console.log("You have no notes.")
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find(note => note.title === title); // checking to see if there are any duplicates
  if (!duplicate) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green("New note added!"));
  } else {
    console.log(chalk.red("Note title cannot be a duplicate."));
  };
};

const deleteNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    notes.pop(note);
    saveNotes(notes);
    console.log(chalk.green("Note deleted: " + title));
  } else {
    console.log(chalk.red("Note not found."));
  };
};

// Helper Functions

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  };
};

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  deleteNote: deleteNote
};
