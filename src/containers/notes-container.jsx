import React, { useState, useEffect } from 'react';
import { Note } from './note';
import { loadNotesData } from '../data/load-notes-data';

function findTopNote (notes) {
    let maxZIndex = 0;
    let noteId    = '';

    Object.entries(notes).forEach(([id, note]) => {
        if (note.zIndex && note.zIndex > maxZIndex) {
            maxZIndex = note.zIndex;
            noteId    = id;
        }
    });

    return noteId;
}

export function NotesContainer ({ boardRef }) {
    const [notes, setNotes] = useState(loadNotesData());

    const onLayoutChange = (id, noteTop, noteLeft, bringToFront = false) => {
        Promise.resolve()
            .then(() => {
                const updatedNotes  = { ...notes };
                const modifiedNote  = updatedNotes[id];
        
                modifiedNote.top  = noteTop;
                modifiedNote.left = noteLeft;
                
                if (bringToFront) {
                    const topNoteId = findTopNote(updatedNotes);
                    const topNote   = updatedNotes[topNoteId];
                    const topZIndex = topNote?.zIndex || 0;

                    if (topZIndex && topZIndex > modifiedNote.zIndex) {
                        topNote.zIndex      = modifiedNote.zIndex || 0;
                        modifiedNote.zIndex = topZIndex;
                    }
                    else
                        modifiedNote.zIndex = 1;
                }
                setNotes(updatedNotes);
            });
        
    };

    return (
        <>
            {Object.entries(notes).map(([id, noteProps], index) => <Note key={id} 
                                                                         id={id}
                                                                         onLayoutChange={onLayoutChange} 
                                                                         {...noteProps} />)}
        </>
    );
}