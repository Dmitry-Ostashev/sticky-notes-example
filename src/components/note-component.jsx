import React from 'react';

export function NoteComponent ({ text, top, left, nodeRef, onDragStart, onDrag, onDragEnd }) {
    const style = {
        position: top && left && 'fixed' || '',
        top,
        left
    };

    return (
        <div className="note" style={style} ref={nodeRef} draggable={true} onDragStart={onDragStart} onDrag={onDrag} onDragEnd={onDragEnd}>
            <span>{text}</span>
        </div>
    );
}