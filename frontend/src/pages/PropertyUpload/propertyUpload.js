import {React} from 'react';
import { EmailPassBox } from '../AuthModal/EmailPassBox/EmailPassBox';
import { SignInButton } from '../AuthModal/SignInButton/SignInButton';
import Footer from '../../components/Footer/Footer';
import './propertyUpload.css';
import Section1 from './section1';
import Section2 from './section2';
import Form from './form';
import FinalSection from './finalsection';
import UploadCard from './uploadCard';
import { WaveBG } from '../../components/WaveBG/WaveBG';
import {Container} from '../../components/Container/Container'
import image50 from './assets/image 50.png'
import {SECTION1_TITLE, SECTION1_CALL_TO_ACTION} from './constants/en'
import ImageUpload from './ImageUpload';
import DetailDecription from './DetailDecription';
import WorthSection from './Worth'

function PropertyUpload(){

    

return(
    <div className = "content-Container">
    <WaveBG src={image50} title={SECTION1_TITLE}/>
    <Container>
       
        <Section2 />
        <Section1 />
        <ImageUpload />
        
        <WorthSection />
        <DetailDecription />
        <UploadCard />
        
        <Form />
        <FinalSection />

    </Container>
    </div>

)


}
export default PropertyUpload;