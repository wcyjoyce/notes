const fs = require("fs");

const addNote = (title, body) => {
  const notes = listNotes();
};

const listNotes = () => {
  const dataJSON = fs.readFileSync("notes.json").toString();
  return JSON.parse(dataJSON);
};

module.exports = {
  addNote: addNote,
  listNotes: listNotes
};
