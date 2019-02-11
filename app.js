const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const argv = yargs
  .command('add', 'Add a new note.', {
    title: titleOptions,
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'List all notes.')
  .command('read', 'Read a note.', {
    title: titleOptions
  })
  .command('remove', 'Remove a note.', {
    title: titleOptions
  })
  .help()
  .argv;

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
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) => notes.logNote(note))
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
    console.log(`Note removed.`);
  } else {
    console.log(`Note not found.`);
  }
} else {
  console.log('Command not recognized!')  
}