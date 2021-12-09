import React, { useEffect, useState } from 'react';
import { Note } from '../components/note';
import notesData from '../data/initial-data.json';

export function NotesContainer () {
    const [notes, setNotes] = useState(notesData);

    return (
        <>
            {notes.map(({ id, text }) => <Note key={id} text={text} />)}
        </>
    );
}