// Packages
const yargs = require("yargs");

// Local Files
const notes = require("./notes.js")

// Command #1: Add
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, // required argument
      type: "string" // defines value as string
    },
    body: {
      describe: "Note Content",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Command #2: Delete
yargs.command({
  command: "delete",
  describe: "Delete a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.deleteNote(argv.title);
  }
});

// Command #3: List
yargs.command({
  command: "list",
  describe: "List all notes",
  handler(argv) {
    notes.listNotes(argv.title);
  }
});

// Command #4: Read
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.fetchNote(argv.title);
  }
});

// Command #5: Update
yargs.command({
  command: "update",
  describe: "Update a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.updateNote(argv.title, argv.body);
  }
});

// Parse all arguments with yarg command calls
yargs.parse();
