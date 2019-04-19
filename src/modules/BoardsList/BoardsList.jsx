import React, { PureComponent } from 'react';
import AddBoard from '../AddBoard';
import classes from './BoardsList.module.css';

export class BoardsList extends PureComponent {

  render () {
    return (
      <div className={classes.boardsList}>
        <h1 className={classes.boardsList_title}>
          Select a board or create new
        </h1>
        <div>Boards list</div>
        <AddBoard />
      </div>  
    );
  }
}