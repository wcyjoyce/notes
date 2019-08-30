// Packages
const yargs = require("yargs");

// Command #1: Add
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note")
  }
});

// Command #2: Delete
yargs.command({
  command: "delete",
  describe: "Delete a new note",
  handler: function() {
    console.log("Deleting a new note")
  }
});

// Command #3: List
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function() {
    console.log("Listing all notes")
  }
});

// Command #4: Read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note")
  }
});

// Parse all arguments with yarg command calls
yargs.parse();

