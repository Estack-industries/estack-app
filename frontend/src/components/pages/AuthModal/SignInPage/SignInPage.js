import React from 'react'
import { EmailPassBox } from '../EmailPassBox/EmailPassBox'
import { SignInButton } from '../SignInButton/SignInButton';
import './SignInPage.css'
import {
    AUTH_EMAIL,
    AUTH_PASSWORD,
    AUTH_SIGNIN_TITLE,
    AUTH_REGISTER_TITLE,
    AUTH_SIGNIN_RESET,
    AUTH_SOCIAL,
  } from '../strings/en.js';
import { Link } from 'react-router-dom';

function SignInPage() {
    return (
        <>
            <div className="pageContainer">
                <div className="topTab">
                    <hr className="hrLineOne"/>
                    <hr className="highlight"/>
                    <div className="topTabTextContainer">
                        <h3 className="topTabText" id="signInText">{AUTH_SIGNIN_TITLE}</h3>
                        <h3 className="topTabText" id="newAccountText">{AUTH_REGISTER_TITLE}</h3>
                    </div>
                    <div className="contentContainer">
                        <h3 className="authEmail">Email</h3>
                        <EmailPassBox text={AUTH_EMAIL}/>
                        <h3 className="authPassword">Password</h3>
                        <EmailPassBox text={AUTH_PASSWORD}/>
                        <div className="signInButton"><SignInButton text="Sign in" /></div>
                        <div className="forgotPassword"><Link><p className="forgotPasswordText">{AUTH_SIGNIN_RESET}</p></Link></div>
                    </div>
                    <hr className="hrLineTwo"/>
                    <div className="authSocialText">{AUTH_SOCIAL}</div>
                    {/* GoogleBox */}
                </div>
            </div>
        </>
    )
}

export default SignInPage