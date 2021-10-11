import React from 'react'
import './Home.css'
import Hero from './Hero'
import SecondSection from './secondSection'
import ThirdSection from './thirdSection'
import { Container } from '../../Container/Container';
import { WaveBG } from '../../WaveBG/WaveBG'
import landingHome from './pictures/house.png'

function Home() {
  return (
    <div className="home-wrapper">
      <WaveBG src={landingHome} position="end">
        <Hero />
      </WaveBG>
      <Container>
        <SecondSection />
        <ThirdSection />
      </Container>
    </div>
  )
}

export default Home
