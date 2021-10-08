import React from 'react';
import './GoogleButton.css';
import Google from '../assets/google.png'

export const GoogleButton = ({
    text,
}) => {
    return (
        <>
            <div className="googleAuthBoxContainer">
                <img className="googleLogo" src={Google} alt="Google"/>
                <h3 className="googleAuthText">{text}</h3>
                <div></div>
            </div>
        </>
    )
}