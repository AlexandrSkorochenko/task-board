import React, { PureComponent } from 'react';
import Button from '../../baseComponents/Button';
import Popup from '../../baseComponents/Popup';
import TextBox from '../../baseComponents/TextBox';
import classes from './AddBoard.module.css';

export class AddBoard extends PureComponent {
  state = {
    isPopupOpened: false
  }

  handleAddBoardClick = () => {
    this.setState(() => ({
      isPopupOpened: true
    }))
  }

  handlePopupClose = () => {
    this.setState(() => ({
      isPopupOpened: false
    }))
  }

  handlePopupOk = () => {
    console.log('add')
  }

  render () {
    return (
      <>
        <Button
          className={classes.addBoardBtn}
          onClick={this.handleAddBoardClick}
        >
          Add new board
        </Button>
        <Popup
          isOpened={this.state.isPopupOpened}
          onClose={this.handlePopupClose}
          title="Add new board"
          okBtnTitle="Add"
          onOkBtnClick={this.handlePopupOk}
        >
          <TextBox />
        </Popup>
      </>
    );
  }
}