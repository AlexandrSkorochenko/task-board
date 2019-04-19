import React, { PureComponent } from 'react';
import BoardHeader from './components/BoardHeader';
import BoardGrid from './components/BoardGrid';

export class Board extends PureComponent {
    state = {
        board: [
            {
                id: 'column-1',
                name: 'First column',
                items: [
                    {
                        id: 'task-1',
                        name: 'first tast',
                        text: 'make task movable'
                    },
                    {
                        id: 'task-2',
                        name: 'second tast',
                        text: 'make task movable'
                    }
                ]
            },
            {
                id: 'column-2',
                name: '2nd column',
                items: []
            },
            {
                id: 'column-3',
                name: '3rd column',
                items: []
            }
        ]
    }

    handleDnd = (destination, source, draggableId) => {
        // if (!destination) return;
        // if (
        //     destination.droppableId === source.droppableId &&
        //     destination.index === source.index    
        // ) {
        //     return;
        // }

        // this.setState(state => ({
        //     board: state.board.map(column => {
        //         let { items } = column;
        //         if (column.id === source.id) {
                    
        //         }

        //     })
        // }))

        console.log({destination, source, draggableId})
    }

    render () {
        return (
            <div>
                <BoardHeader
                    title="Test board"
                />
                <BoardGrid
                    board={this.state.board}
                    onDragEnd={this.handleDnd}
                />
            </div>
        )
    }
}