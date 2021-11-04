import React from 'react'
import { EmailPassBox } from '../EmailPassBox/EmailPassBox'
import { SignInButton } from '../SignInButton/SignInButton';
import './NewAccountPage.css'
import {
  AUTH_EMAIL,
  AUTH_PASSWORD,
  AUTH_SOCIAL,
  AUTH_GOOGLE,
  AUTH_REGISTER_PASSWORD1,
  AUTH_REGISTER_PASSWORD2,
  AUTH_REGISTER_PASSWORD3,
  AUTH_REGISTER_PASSWORD4,
  AUTH_REGISTER_TERMS_ACCEPT,
  AUTH_REGISTER_TERMS_OF_USE,

} from '../strings/en.js';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../GoogleButton/GoogleButton';
import {useState} from 'react';
import Axios from "axios";


function NewAccountPage({ isOpen }) {

  const [email,setEmail] = useState ('');
  const [password,setPassword] = useState('');
  const [loginStatus,setLoginStatus] = useState('')
  
  //submit to the api
  const submitData = () =>{
    
    Axios.post('http://localhost:3001/users/register' ,
     {email : email , password : password}).then(() => {
       
     });
  };

  //check the api for user
  const checkData = () =>{
    
    Axios.post('http://localhost:3001/users/Auth' ,
     {email : email}).then((response) => {
       if(response.data.message){
         setLoginStatus(response.data.message)
         console.log(loginStatus)
       }else{
         submitData();
       }
     });
  }


  return (
    <>
      <div className="contentContainer"
        style={{
          display: isOpen ? 'none' : 'block',
        }}
      >
        {/* Emaill & Password */}
        <h3 className="authEmail">Email</h3>
        <EmailPassBox text={AUTH_EMAIL} onChange = {(e) => {
        setEmail(e.target.value);
      }} />
        <h3 className="authPassword">Password</h3>
        <EmailPassBox text={AUTH_PASSWORD} onChange = {(e) => {
        setPassword(e.target.value);
      }} />
        <h3 className="authConfirmPassword">Confirm Password</h3>
        <EmailPassBox text={AUTH_PASSWORD} />
        <div className="authPasswordRequirements">
          <p>{AUTH_REGISTER_PASSWORD1}</p>
          <p>{AUTH_REGISTER_PASSWORD2}</p>
          <p>{AUTH_REGISTER_PASSWORD3}</p>
          <div style={{ display: 'flex' }}>
            <hr className="registerPassword4Box" />
            <p className="registerPassword4Container">{AUTH_REGISTER_PASSWORD4}</p>
          </div>
        </div>
        <div className="newAccountSignInButton">
          <SignInButton text="Submit" onClick = {checkData} />
        </div>
        <div className="terms">
          <p>
            {AUTH_REGISTER_TERMS_ACCEPT}
            <Link to="#" className="termsOfUse">{AUTH_REGISTER_TERMS_OF_USE}</Link>
          </p>
        </div>
        {/* Social Authentication */}
        <hr className="hrLineTwo" />
        <div className="authSocialText">{AUTH_SOCIAL}</div>
        <GoogleButton text={AUTH_GOOGLE} />
      </div>
    </>
  )
}

export default NewAccountPage