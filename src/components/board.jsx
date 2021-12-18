import React, { useRef } from 'react';
import { NotesContainer } from '../containers/notes-container';

export function Board ({ children }) {
    const boardRef = useRef();

    return (
        <div className="area board" ref={boardRef}>
            <NotesContainer boardRef={boardRef}/>
        </div>
    );
}
