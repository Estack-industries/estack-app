import React from 'react'
import './Home.css'
import Hero from './Hero'
import SecondSection from './secondSection'

function Home() {
    return (
        <div className="homeContainer">
            <Hero />
            <SecondSection />
        </div>
    )
}

export default Home
