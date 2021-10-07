import React from 'react'
import { EmailPassBox } from '../EmailPassBox/EmailPassBox'
import './NewAccountPage.css'
import {
    AUTH_EMAIL,
    AUTH_PASSWORD,
  } from '../strings/en.js';

function NewAccountPage() {
    return (
        <>
            <div className="pageContainer">
                <hr />
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
