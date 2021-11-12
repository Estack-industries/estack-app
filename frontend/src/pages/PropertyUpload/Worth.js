import React from "react";
import { EmailPassBox } from "../AuthModal/EmailPassBox/EmailPassBox";
import { TextField } from "./Text FIelds/TextField";
function WorthSection(){

    return(
        <div className = "Worth-Container">
           <div className = "Title-card"><h2>Worth</h2></div> 
        <div className = "worth-input">
            <TextField text="Listing Price?" />
        </div>
        </div>
    )
}

export default WorthSection;