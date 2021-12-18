import React from 'react';
import './styles.css';
import { Board } from './board';
import { TrashZone } from './trash-zone';

export function MainView () {
    return (
        <div>
            <div className="header">
                <h1>Sticky Notes</h1>
            </div>
            <div className="content">
                <Board/>
                <TrashZone/>
            </div>
        </div>
    );
}