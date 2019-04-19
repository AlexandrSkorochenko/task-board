import React from 'react';
import classes from './Popup.module.css';
import Button from '../Button';

export const Popup = props => {
  const {
    isOpened,
    onClose,
    title,
    children,
    okBtnTitle,
    cancelBtnTitle,
    onOkBtnClick
  } = props;

  return (
    isOpened ? (
      <>
        <div
          className={classes.popupBgc}
          onClick={onClose}
        />
        <div className={classes.popup}>
          <div className={classes.popup_title}>
            <span>{ title }</span>
            <button
              onClick={onClose}
              className={classes.popup_closeBtn}
            >
              X
            </button>
          </div>
          <div className={classes.popup_content}>
            { children }
          </div>
          <div className={classes.popup_footer}>
            <Button
              primary
              onClick={onOkBtnClick}
            >
              { okBtnTitle || 'OK' }
            </Button>
            <Button
              danger
              onClick={onClose}
            >
              { cancelBtnTitle || 'Cancel' }
            </Button>
          </div>
        </div>
      </>
    ) : null
  )
}