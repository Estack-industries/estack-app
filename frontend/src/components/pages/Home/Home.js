import React from 'react'
import './Home.css'
import Hero from './Hero'
import SecondSection from './secondSection'
import ThirdSection from './thirdSection'
import Footer from '../../Footer/Footer';
import { Container } from '../../Container/Container';
import { WaveBG } from '../../WaveBG/WaveBG'
import landingHome from './pictures/house.png'
import SearchBar from '../../SearchBar/SearchBar'

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
      <Footer />
    </div>
  )
}

export default Home
