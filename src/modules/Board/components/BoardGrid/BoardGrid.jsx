import React, { PureComponent } from 'react';
import classes from './BoardGrid.module.css';
import BoardColumn from '../BoardColumn';
import { DragDropContext } from 'react-beautiful-dnd';

export class BoardGrid extends PureComponent {
    get columnWidth () {
        return `calc(${100 / this.props.board.length}% - 5px)`
    }

    handleDragEnd = result => {
        const { destination, source, draggableId } = result; 
        console.log(result);

        // this.props.onDragEnd(destination, source, draggableId);
    }

    render () {
        const { board } = this.props;
         
        return (
            <DragDropContext
                onDragEnd={this.handleDragEnd}
            >
                <div className={classes.board}>
                    {board.map(column => (
                        <BoardColumn
                            key={column.id}
                            name={column.name}
                            items={column.items}
                            width={this.columnWidth}
                            id={column.id}
                        />
                    ))}
                </div>
            </DragDropContext>
        );
    }
}
