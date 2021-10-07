import React from 'react';
import './EmailPassBox.css';

export const EmailPassBox = ({
    text,
}) => {
    return (
        <>
            <div className="container">
                <div className="authBoxContainer">
                    <h3 className="authText">{text}</h3>
                </div>
            </div>
        </>
    )
}