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
  handler() {
    console.log("Listing all notes")
  }
});

// Command #4: Read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note")
  }
});

// Parse all arguments with yarg command calls
yargs.parse();
