import {React} from 'react';
import Form from './form';
import {SECTION1_TITLE , SECTION1_CALL_TO_ACTION} from './constants/en.js'
import { EmailPassBox } from '../AuthModal/EmailPassBox/EmailPassBox';
import Checkbox from '../../components/Checkboxes.js/checkboxes';


function Section1(){
    
    const items =["A/C", "Furnished", "Balcony or Deck" , "Hardwood floor" ,
                 "Wheelchair Acces", "Date Available" , "Of street parking" , "garage parking"];

    var selectedCheckboxes = [];

                var  componentWillMount = () => {
                    return selectedCheckboxes = new Set();
                  }
                
                var  toggleCheckbox = label => {
                }
                
                var handleFormSubmit = formSubmitEvent => {
                    formSubmitEvent.preventDefault();
                    console.log(selectedCheckboxes)
                
                   
                  }
                 
                
                var  createCheckbox = label => (
                    <Checkbox
                      label={label}
                      handleCheckboxChange={toggleCheckbox}
                      key={label}
                    />
                  )
                
                var  createCheckboxes = () => (
                    items.map(createCheckbox)
                  )
                


    return(
        <div className = "Section1">
        <div className = "Title-card"><h2>Amenities and rules</h2></div> 
        <div className = "check-box-container">
        
        <form onSubmit={handleFormSubmit}>
              {createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>


        </div>
        </div>
    
    )
    
    
    }
    
    export default Section1;