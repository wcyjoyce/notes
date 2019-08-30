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

// Parse all arguments with yarg command calls
yargs.parse();

