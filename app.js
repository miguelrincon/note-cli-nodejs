console.log('starting app.js.');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];

if(command === 'add'){
  let savedNote = notes.addNote(argv.title, argv.body);
  if (!_.isUndefined(savedNote)) {
    console.log(`Note saved.`)
    notes.logNote(savedNote);
  } else {
    console.log(`Couldn't save. A note with title "${argv.title}" already there.`)
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found.');
    notes.logNote(note);
  } else {
    console.log('Note not found.')
  }
} else if (command === 'remove') {
  let noteWasDeleted = notes.removeNote(argv.title);
  if (noteWasDeleted) {
    console.log(`Note was removed.`);
  } else {
    console.log(`Note not found.`);
  }
} else {
  console.log('Command not recognized!')  
}