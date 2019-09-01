const fs = require("fs");

const addNote = (title, body) => {
  const notes = listNotes();

  notes.push({
    title: title,
    body: body
  });
  saveNotes(notes);
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

module.exports = {
  addNote: addNote,
  listNotes: listNotes
};
