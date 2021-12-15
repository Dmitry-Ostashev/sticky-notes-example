const initialData = require('./initial-data.json');

export function loadNotesData () {
    let notesData = window.localStorage.getItem('%sticky-notes-data%');

    if (!notesData)
        notesData = initialData;
    
    return notesData;
}