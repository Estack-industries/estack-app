import {React} from 'react';
import {SECTION2_ADDRESS,
    SECTION2_EXTRA,
    SECTION2_PARK,
    SECTION2_GARAGE,
    SECTION2_BED,
    SECTION2_BATH,
    SECTION2_YEAR,
    SECTION2_TYPE,
    SECTION2_SQUAREFT
 }  from './constants/en';
 import './section2.css';
 import { EmailPassBox } from '../AuthModal/EmailPassBox/EmailPassBox';
 import { useState } from 'react';
 import { TextField } from './Text FIelds/TextField';
function Section2(){

    const [address, setAdress ] = useState('');
    const [yearBuilt, setYearBuilt ] = useState('');
    const [bathrooms, setBathrooms ] = useState('');
    const [bedrooms, setBedrooms ] = useState('');
    const [squareft, setSquareft ] = useState('');
    const [type, setType ] = useState('');

    return(
        <>
        <div className = "Title-card"><h2>Infromation and Details</h2></div> 
        <div className ="form-container">

        
        
        
        <TextField text = {SECTION2_ADDRESS} onChange={(e) => {
						setAdress(e.target.value);
					}} />
       

       
        <TextField text = {SECTION2_TYPE} onChange={(e) => {
						setType(e.target.value);
					}} />
      
      

        

      
        <TextField text = {SECTION2_BATH} onChange={(e) => {
						setBathrooms(e.target.value);
					}} />
     

      
        <TextField text = {SECTION2_BED} onChange={(e) => {
						setBedrooms(e.target.value);
					}} />
      
                
        
        <TextField text = {SECTION2_BATH} onChange={(e) => {
						setYearBuilt(e.target.value);
					}} />
        

     
        <TextField text = {SECTION2_SQUAREFT} onChange={(e) => {
						setSquareft(e.target.value);
					}} />
      

        </div>
        </>

    
    )
    
    
    }
    
    export default Section2;