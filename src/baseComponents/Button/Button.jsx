import React from 'react';
import classNames from 'classnames';
import classes from './Button.module.css';

export const Button = ({ children, onClick, className, primary, danger }) => {
  const buttonClasses = classNames(
    {
      [classes.button]: !className,
      [classes.button__primary]: !className && primary,
      [classes.button__danger]: !className && danger
    },
    className
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
    >
      { children }
    </button>
  )
}