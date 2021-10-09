import React from 'react';
import './WhyCard.css';

export const WhyCard = ({
  src,
  text,
}) => {
  return (
    <>
      <div className="chooseBox">
        <img src={src} alt="Agent Pic" />
        <p className="boxText">{text}</p>
      </div>
    </>
  )
}