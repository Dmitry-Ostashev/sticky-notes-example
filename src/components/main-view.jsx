import React from 'react';
import './styles.css';
import { Board } from './board';
import { TrashZone } from './trash-zone';
import { NotesContainer } from '../containers/notes-container';

export function MainView () {
    return (
        <div>
            <div className="header">
                <h1>Sticky Notes</h1>
            </div>
            <div className="content">
                <Board>
                    <NotesContainer/>
                </Board>
                <TrashZone/>
            </div>
        </div>
    );
}