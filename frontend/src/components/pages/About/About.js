import React from 'react';
import { WaveBG } from '../../WaveBG/WaveBG';
import image136 from './assets/image 136.svg';
import Section1 from '../About/Section1';
import Section2 from '../About/Section2';
import './About.css';

function About() {
  return (
    <>
      <WaveBG src={image136} title="About Us"></WaveBG>
      <Section1 />
      <Section2 />
    </>
  )
}

export default About
