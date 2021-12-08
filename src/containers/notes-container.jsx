import React from 'react';
import { Note } from '../components/note';

export function NotesContainer ({ notes }) {
    return (
        <>
            {notes.map(({ id, text }) => <Note key={id} text={text} />)}
        </>
    );
}