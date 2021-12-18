import React from 'react';

export function NoteComponent ({ text, id, top, left, zIndex, noteRef, onDragStart, onDrag, onDragEnd }) {
    const style = {
        position: top && left ? 'fixed' : '',
        top,
        left,
        zIndex
    };

    return (
        <div key={id} className="note" style={style} ref={noteRef} draggable={true} onDragStart={onDragStart} onDrag={onDrag} onDragEnd={onDragEnd}>
            <span>{text}</span>
        </div>
    );
}