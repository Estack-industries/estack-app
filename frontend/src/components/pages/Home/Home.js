import React from 'react'
import './Home.css'
import Hero from './Hero'
import SecondSection from './secondSection'
import ThirdSection from './thirdSection'
import Footer from '../../Footer/Footer';

function Home() {
  return (
    <div className="homeContainer">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  )
}

export default Home
