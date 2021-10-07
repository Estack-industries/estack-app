import React from 'react'
import { EmailPassBox } from '../EmailPassBox/EmailPassBox'
import './SignInPage.css'
import {
    AUTH_EMAIL,
    AUTH_PASSWORD,
    AUTH_SIGNIN_TITLE,
    AUTH_REGISTER_TITLE,
  } from '../strings/en.js';

function SignInPage() {
    return (
        <>
            <div className="pageContainer">
                <div className="topTab">
                    <h3 className="topTabText" id="signInText">{AUTH_SIGNIN_TITLE}</h3>
                    <h3 className="topTabText" id="newAccountText">{AUTH_REGISTER_TITLE}</h3>
                </div>
                <div>
                    <h3>Email</h3>
                    <EmailPassBox text={AUTH_EMAIL}/>
                    <h3>Password</h3>
                    <EmailPassBox text={AUTH_PASSWORD}/>
                </div>
            </div>
        </>
    )
}

export default SignInPage