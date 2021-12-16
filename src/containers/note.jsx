import React, { useEffect, useState, useRef } from 'react';
import { NoteComponent } from '../components/note-component';

export function Note (props) {
    const { 
        id,
        text,
        top,
        left,
        zIndex,
        onLayoutChange
    } = props;
    
    const [state, setState] = useState({ top, left, zIndex });
    const nodeRef           = useRef();

    const onDragStart = ev => {    
        window.setTimeout(() => ev.target.style.visibility = 'hidden', 10);
    };

    const onDragEnd = ev =>  {
        ev.target.style.visibility = '';

        const newTop  = ev.clientY;
        const newLeft = ev.clientX;

        const newState = { ...state };

        setState({ ...newState, top: newTop, left: newLeft });
    };

    useEffect(() => {
        const newState = { ...state };

        const nodeElement = nodeRef.current;

        if (state.top && state.left || !nodeElement)
            return;

        const { top, left } = nodeElement.getBoundingClientRect();

        newState.top  = top;
        newState.left = left;
        
        setState(newState);
    }, [nodeRef]);

    return (
        <NoteComponent text={text}
                       top={state.top}
                       left={state.left}
                       nodeRef={nodeRef}
                       onDragStart={onDragStart}
                       nodeRef={nodeRef}
                       onDragEnd={onDragEnd}/>
    );
}
