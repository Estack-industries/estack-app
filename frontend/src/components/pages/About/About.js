import React from 'react'
import { HeroBG } from '../../HeroBG/HeroBG'
import landingHome from './assets/image 136.svg'
import ThirdSection from '../Home/thirdSection'
import './About.css'

function About() {
  return (
    <>
      <HeroBG src={landingHome} title="About Us"></HeroBG>
      <ThirdSection />
    </>
  )
}

export default About
