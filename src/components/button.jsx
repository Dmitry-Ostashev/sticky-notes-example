import Reac from 'react';

export function Button ({ title, onClick }) {
    return (
        <div className="button" onClick={onClick}>
            <span>{title}</span>
        </div>
    );
}