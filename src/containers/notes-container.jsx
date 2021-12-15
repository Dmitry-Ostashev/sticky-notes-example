import React, { useEffect, useState } from 'react';
import { Note } from './note';
import { loadNotesData } from '../data/load-notes-data';

export function NotesContainer () {
    const [notes, setNotes] = useState(loadNotesData());

    const onNodeDragStart = ev => {

    };

    const onNodeDrag = ev => {

    };

    const onNodeDragEnd = ev => {

    };

    return (
        <>
            {notes.map((noteProps) => <Note key={noteProps.id}
                                            onNodeDragStart={onNodeDragStart}
                                            onNodeDrag={onNodeDrag}
                                            onNodeDragEnd={onNodeDragEnd} 
                                            {...noteProps} />)}
        </>
    );
}