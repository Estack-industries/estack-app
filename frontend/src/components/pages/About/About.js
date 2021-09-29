import React from 'react'
import { WaveBG } from '../../WaveBG/WaveBG'
import landingHome from './assets/image 136.svg'
import ThirdSection from '../Home/thirdSection'
import './About.css'

function About() {
  return (
    <>
      <WaveBG src={landingHome} title="About Us"></WaveBG>
      <ThirdSection />
    </>
  )
}

export default About
