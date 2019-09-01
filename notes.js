const fs = require("fs");

const addNote = (title, body) => {
  const notes = listNotes();

  // Checking to see if there are any duplicates
  const duplicates = notes.filter(note => note.title === title);
  if (duplicates.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New note added!")
  } else {
    console.log("Note title cannot be a duplicate.")
  };
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  };
};

const deleteNote = title => {
  const notes = listNotes();
  const note = notes.filter(note => note.title === title);
  if (note.length !== 0) {
    notes.pop(note);
    saveNotes(notes);
    console.log("Note deleted: " + title);
  } else {
    console.log("Note not found.");
  }
};

module.exports = {
  addNote: addNote,
  listNotes: listNotes,
  deleteNote: deleteNote
};
