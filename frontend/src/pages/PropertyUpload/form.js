import {React} from 'react';
import {SUBMIT_EMAIL, SUBMIT_PASSWORD, SUMBIT_TITLE} from './constants/en';
import { EmailPassBox } from '../AuthModal/EmailPassBox/EmailPassBox';
import { SignInButton } from '../AuthModal/SignInButton/SignInButton';

function Form(){

    return(
        <div className = "Form">
        <div className = "Title-card"><h2>Worth</h2></div> 
        <EmailPassBox text = {SUBMIT_EMAIL} />
        <EmailPassBox text = {SUBMIT_PASSWORD} />
        <SignInButton text = "Submit" />
        </div>
    
    )
    
    
    }
    
    export default Form;