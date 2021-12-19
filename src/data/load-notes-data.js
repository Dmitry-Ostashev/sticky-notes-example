const initialData = require('./initial-data.json');

export function loadNotesData () {
    let notesData = window.localStorage.getItem('%sticky-notes-data%');

    if (!notesData)
        notesData = initialData;

    Object.entries(notesData).forEach(([id, note], index) => {
        if (note.zIndex === void 0)
            note.zIndex = index;
    });
    
    return notesData;
}