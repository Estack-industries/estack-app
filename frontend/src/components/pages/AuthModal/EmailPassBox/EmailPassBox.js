import React from 'react';
import './EmailPassBox.css';




export const EmailPassBox = ({
  
  text,
  onChange,
}) => {

 
  

  return (
    <>
      <input className="authText" placeholder={text} onChange = {onChange} />
    </>
  )
}