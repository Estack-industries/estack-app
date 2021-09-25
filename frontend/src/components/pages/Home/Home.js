import React from 'react'
import './Home.css'
import Hero from './Hero'
import SecondSection from './secondSection'
import ThirdSection from './thirdSection'

function Home() {
    return (
        <div className="homeContainer">
            <Hero />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default Home
