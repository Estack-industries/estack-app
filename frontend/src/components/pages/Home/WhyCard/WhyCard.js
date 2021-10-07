import React from 'react';
import './WhyCard.css';

export const WhyCard = ({
    src,
    text,
}) => {
    return (
        <>
            <div className="chooseBox">
                <p className="boxImg"><img src={src} alt="Agent Pic" /></p>
                <p className="boxText">{text}</p>
            </div>
        </>
    )
}