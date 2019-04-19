import React, {PureComponent} from 'react';
import Button from '../../../../baseComponents/Button';
import Popup from '../../../../baseComponents/Popup';
import classes from './BoardHeader.module.css';


export class BoardHeader extends PureComponent {
    state = {
        isPopupOpened: false
    }

    handleAddTaskClick = () => {
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
        const { title } = this.props;

        return (
            <header className={classes.header}>
                <h1 className={classes.title}>{title}</h1>
                <Button
                    primary
                    onClick={this.handleAddTaskClick}
                >
                    Add task
                </Button>
                <Popup
                    isOpened={this.state.isPopupOpened}
                    onClose={this.handlePopupClose}
                    title="Add new task"
                    okBtnTitle="Add"
                    onOkBtnClick={this.handlePopupOk}
                >
                    Here you will be able to add task!
                </Popup>
            </header>
        );
    }
}