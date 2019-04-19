import React from 'react';
import classes from './BoardColumn.module.css';
import BoardTask from '../BoardTask';
import { Droppable } from 'react-beautiful-dnd';

export const BoardColumn = ({ id, name, items, width }) => {
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div
                    className={classes.column}
                    style={{ width }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <h3>{name}</h3>
                    {items.map((task, index) => (
                        <BoardTask
                            key={task.id}
                            name={task.name}
                            text={task.text}
                            id={task.id}
                            index={index}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}