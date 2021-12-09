import React from 'react';

export function Note ({ text }) {
    return (
        <div className="note"draggable={true}>
            <span>{text}</span>
        </div>
    );
}