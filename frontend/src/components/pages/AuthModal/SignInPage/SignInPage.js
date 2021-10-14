import React from 'react'
import { EmailPassBox } from '../EmailPassBox/EmailPassBox'
import { SignInButton } from '../SignInButton/SignInButton';
import './SignInPage.css'
import {
  AUTH_EMAIL,
  AUTH_PASSWORD,
  AUTH_SIGNIN_RESET,
  AUTH_SOCIAL,
  AUTH_GOOGLE,
} from '../strings/en.js';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../GoogleButton/GoogleButton';

function SignInPage({ isOpen }) {
  return (
    <>
      <div className="contentContainer"
        style={{
          display: isOpen ? 'block' : 'none',
        }}
      >
        <h3 className="authEmail">Email</h3>
        <EmailPassBox text={AUTH_EMAIL} />
        <h3 className="authPassword">Password</h3>
        <EmailPassBox text={AUTH_PASSWORD} />
        <div className="signInButton">
          <SignInButton text="Sign in" />
        </div>
        <div className="forgotPassword">
          <Link to="#"><p className="forgotPasswordText">{AUTH_SIGNIN_RESET}</p></Link>
        </div>
        {/* Social Authentication */}
        <hr className="hrLineTwo" />
        <div className="authSocialText">{AUTH_SOCIAL}</div>
        <GoogleButton text={AUTH_GOOGLE} />
      </div>
    </>
  )
}

export default SignInPage