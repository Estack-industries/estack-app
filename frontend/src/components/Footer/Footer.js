import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoWifi } from "react-icons/io5";

function Footer() {
  return (
    <>
      <nav className="footer">
        <div className="footerStart">
            <p><b>Support</b> teams across the world</p>
            <p><b>Safe &amp; Secure</b> online payment</p>
        </div>
        <hr className="footerBreak"/>
        <div className="footerContent">
            <div className="footerSectionContainer">
                <p className="footerSectionTitle">WHO WE ARE</p>
                <ul>
                    <Link href="/" className="sectionLinks">About</Link>
                    <Link href="/" className="sectionLinks">Team</Link>
                    <Link href="/" className="sectionLinks">Work With Us</Link>
                </ul>
            </div>
            <div className="footerSectionContainer">
                <p className="footerSectionTitle">E-STACK</p>
                <ul>
                    <Link href="/" className="sectionLinks">Features</Link>
                    <Link href="/" className="sectionLinks">Payments</Link>
                    <Link href="/" className="sectionLinks">Marketing</Link>
                    <Link href="/" className="sectionLinks">Shipping</Link>
                    <Link href="/" className="sectionLinks">Extension Store</Link>
                    <Link href="/" className="sectionLinks">E-Stack blog</Link>
                    <Link href="/" className="sectionLinks">Development blog</Link>
                    <Link href="/" className="sectionLinks">Ideas board</Link>
                    <Link href="/" className="sectionLinks">Mobile App</Link>
                    <Link href="/" className="sectionLinks">Community</Link>
                    <Link href="/" className="sectionLinks">Style Guide</Link>
                    <Link href="/" className="sectionLinks">Email Newsletter</Link>
                </ul>
            </div>
            <div className="footerSectionContainer">
                <p className="footerSectionTitle">OTHER PRODUCTS</p>
                <ul>
                    <Link href="/" className="sectionLinks">Storefront</Link>
                    <Link href="/" className="sectionLinks">Agents</Link>
                    <Link href="/" className="sectionLinks">Real-Estate Extensions</Link>
                </ul>
            </div>
            <div className="footerSectionContainer">
                <p className="footerSectionTitle">SUPPORT</p>
                <ul>
                    <Link href="/" className="sectionLinks">Documentation</Link>
                    <Link href="/" className="sectionLinks">Customizations</Link>
                    <Link href="/" className="sectionLinks">Support Policy</Link>
                    <Link href="/" className="sectionLinks">Contact</Link>
                    <Link href="/" className="sectionLinks">COVID-19 Resources</Link>
                </ul>
            </div>
            <div className="footerSectionContainer">
                <p className="footerSectionTitle">WE RECOMMEND</p>
                <ul>
                    <Link href="/" className="sectionLinks">E-Stack Experts</Link>
                    <Link href="/" className="sectionLinks">Housing Solutions</Link>
                    <Link href="/" className="sectionLinks">Pre-sales FAQ</Link>
                    <Link href="/" className="sectionLinks">Success Stories</Link>
                    <Link href="/" className="sectionLinks">Design Feedback Group</Link>
                </ul>
            </div>
        </div>
        <div className="footerBottom">
            <div className="logoContainer">
                <a className="socialLogo" href="http://twitter.com/" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
                <a className="socialLogo" href="http://facebook.com/" target="_blank" rel="noreferrer"><IoLogoFacebook /></a>
                <a className="socialLogo" href="http://instagram.com/" target="_blank" rel="noreferrer"><IoLogoInstagram /></a>
                <a className="socialLogo" href="/" target="_blank" rel="noreferrer"><IoWifi /></a>
            </div>
            <div className="terms">
                COPYRIGHT E-Stack 2021 - <a className="terms" href="/" target="_blank" rel="noreferrer"><u>TERMS &amp; CONDITIONS</u> <u>PRIVACY POLICY</u></a>
            </div>
            {/* To align social media icons and terms */}
            <div></div>
        </div>
      </nav>
    </>
  )
}

export default Footer