const fs = require('fs');

const fileName = 'notes-data.json'

var fetchNotes = () => {
  try {
    let fileContents = fs.readFileSync(fileName);
    return JSON.parse(fileContents);
  } catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync(fileName, JSON.stringify(notes));
};

var addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => title === note.title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}
var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  let note = fetchNotes().filter((note) => title === note.title);
  if (note[0]) {
    return note[0];
  }
  return null;
}

var removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note => title !== note.title));
  if (filteredNotes.length != notes.length) {
    saveNotes(filteredNotes);
    return true;
  } else {
    return false;
  }
}

var logNote = (note) => {
  // debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};