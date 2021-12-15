import React from 'react';
import { NoteComponent } from '../components/note-component';

export function Note (props) {
    const { 
        id,
        text,
        top,
        left,
        zIndex,
        onNodeDragStart,
        onNodeDrag,
        onNodeDragEnd
    } = props;
    
    onDragStart = ev => onNodeDragStart(id);

    onDrag = ev => onNodeDrag(id);

    onDragEnd = ev => onNodeDragEnd(id);

    return (
        <NoteComponent text={text} 
                       onDragStart={onDragStart}
                       onDrag={onDrag}
                       onDragEnd={onDragEnd}/>
    );
}
