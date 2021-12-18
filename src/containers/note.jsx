import React, { useEffect, useRef } from 'react';
import { NoteComponent } from '../components/note-component';

export function Note (props) {
    const { 
        id,
        text,
        top,
        left,
        zIndex,
        onLayoutChange
    } = props;

    const noteRef           = useRef();
    const notePosition      = useRef({});

    const onDragStart = ev => { 
        const { top, left } = noteRef.current.getBoundingClientRect();
        
        notePosition.current.top = ev.clientY - top;
        notePosition.current.left = ev.clientX - left;
        
        window.setTimeout(() => ev.target.style.visibility = 'hidden', 10);
    };

    const onDragEnd = ev =>  {
        ev.preventDefault();
        ev.target.style.visibility = '';

        const newTop  = ev.clientY - notePosition.current.top;
        const newLeft = ev.clientX - notePosition.current.left;

        onLayoutChange(id, newTop, newLeft, true);
    };

    useEffect(() => {
        const noteElement = noteRef.current;

        const { x, y } = noteElement.getBoundingClientRect();
        
        onLayoutChange(id, y, x);
    }, []);

    console.log(top, left);

    return (
        <NoteComponent text={text}
                       id={id}
                       top={top}
                       left={left}
                       zIndex={zIndex}
                       noteRef={noteRef}
                       onDragStart={onDragStart}
                       onDragEnd={onDragEnd}/>
    );
}
