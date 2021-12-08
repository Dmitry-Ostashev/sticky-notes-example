import React from 'react';
import './styles.css';
import { Board } from './board';
import { TrashZone } from './trash-zone';
import { Note } from './note';

export function MainView () {
    return (
        <div>
            <div className="header">
                <h1>Sticky Notes</h1>
            </div>
            <div className="content">
                <Board>
                    <Note text="Write code tomorrow"/>
                </Board>
                <TrashZone/>
            </div>
        </div>
    );
}