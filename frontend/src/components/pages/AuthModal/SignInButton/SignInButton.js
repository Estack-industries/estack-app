import React from 'react';
import './SignInButton.css';

export const SignInButton = ({
    text,
}) => {
    return (
        <>
            <div className="container">
                <div className="signInButtonContainer">
                    <h3 className="buttonText">{text}</h3>
                </div>
            </div>
        </>
    )
}