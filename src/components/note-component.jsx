import React from 'react';

export function NoteComponent (props) {
    const { 
        text,
        id,
        top,
        left,
        zIndex,
        noteRef,
        onDragStart,
        onDrag,
        onDragEnd,
        onClick
    } = props;

    const style = {
        position: top && left ? 'fixed' : '',
        top,
        left,
        zIndex
    };

    return (
        <div key={id} 
             className="note" 
             style={style} 
             ref={noteRef} 
             draggable={true} 
             onDragStart={onDragStart} 
             onDrag={onDrag} 
             onDragEnd={onDragEnd}
             onClick={onClick}>
            <span>{text}</span>
        </div>
    );
}