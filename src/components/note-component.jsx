import React from 'react';

export function NoteComponent ({ text }) {
    return (
        <div className="note"draggable={true}>
            <span>{text}</span>
        </div>
    );
}