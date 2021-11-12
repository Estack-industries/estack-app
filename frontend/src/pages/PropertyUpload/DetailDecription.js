import React from "react";
import { EmailPassBox } from "../AuthModal/EmailPassBox/EmailPassBox";
import { SignInButton } from "../AuthModal/SignInButton/SignInButton";
import {DescriptionField} from './DescriptionField/DescriptionField.js'

function DetailDescription(){

    return(
        <div className = "Detail-container">
            <div className = "Title-card"><h2> Detailed description</h2></div> 
        
        <DescriptionField />
        
        <SignInButton text = "Submit" />
        </div>
    )
}
export default DetailDescription;