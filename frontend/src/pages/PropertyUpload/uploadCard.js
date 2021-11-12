import {React} from 'react';
import {CARD_TITLE ,CARD_PARAGRATH} from './constants/en'


function UploadCard(){

    return(
        <div className = "Card-Container">
            <div className = "Card">
                <h2>{CARD_TITLE}</h2>
                <p>{CARD_PARAGRATH}</p>
            </div>
        </div>
    
    )
    
    
    }
    
    export default UploadCard;