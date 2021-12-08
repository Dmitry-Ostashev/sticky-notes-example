import React from 'react';

export function Note ({ text }) {
    return (
        <div className="note">
            <span>{text}</span>
        </div>
    );
}