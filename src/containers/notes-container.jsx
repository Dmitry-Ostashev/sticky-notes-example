import React, { useEffect, useState, useCallback } from 'react';
import { Note } from './note';
import { loadNotesData } from '../data/load-notes-data';

export function NotesContainer () {
    const [notes, setNotes] = useState(loadNotesData());

    const onLayoutChange = useCallback((id, top, left) => {
        
    }, []);

    return (
        <>
            {notes.map((noteProps) => <Note key={noteProps.id} {...noteProps} />)}
        </>
    );
}