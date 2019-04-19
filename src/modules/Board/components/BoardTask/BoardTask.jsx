import React from 'react';
import classes from './BoardTask.module.css';
import { Draggable } from 'react-beautiful-dnd';

export const BoardTask = ({ id, name, text, index }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    className={classes.task}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <h4>{name}</h4>
                    <p>{text}</p>
                </div>
            )}
        </Draggable>
    );
}