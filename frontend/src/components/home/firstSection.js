import React from 'react'
import './firstSection.css'
import landingHome from './pictures/image 30.png'
import { FiSearch } from "react-icons/fi";

function firstSection() {
    return (
        <div className="sectionWrapper">
            <div className="navbar">
                <p id="stackText">-Stack</p>
                <div className="navLinks">
                    <ul className="navBox" id="linkText">About us</ul>
                    <ul className="navBox" id="linkText">Log In</ul>
                    <ul className="navBox" id="linkText">Register</ul>
                </div>
            </div>
            <div className="content">
                <div>
                    <p id="registerText">You can register for free!</p>
                    <div className="searchBar">
                        <p id="searchText">Search bar</p>
                        <FiSearch />
                    </div>
                </div>
                <img id="homeImage" src={landingHome} alt="Home page home"/>
            </div>
        </div>
    )
}

export default firstSection
