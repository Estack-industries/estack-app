import React from 'react';
import './EmailPassBox.css';

export const EmailPassBox = ({
  text,
}) => {
  return (
    <>
      <input className="authText" placeholder={text} />
    </>
  )
}