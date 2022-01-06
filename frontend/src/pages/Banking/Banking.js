import React, { useState } from 'react';
import './Banking.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import BankingVector1 from './assets/BankingVector1.svg'
import BankingVector2 from './assets/BankingVector2.png'
import BankingVector3 from './assets/BankingVector3.svg'
import BankingVector4 from './assets/BankingVector4.svg'
import Head from './assets/head.png'
import House from './assets/house.png'

import Footer from '../../components/Footer/Footer';

function NavBar() {
    return (
        <div className="navbar-container">
            <img
                src={EStackLogo}
                alt="estack-logo"
                className="estack-logo"
                onClick={() => console.log('clicked')}
            />
            <div className="navbar-options">
                <a className="navbar-option white-color open-sans" href="#">
                    Buy
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    Sell
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    Rent
                </a>
                <a className="navbar-option white-color open-sans" href="#">
                    About Us
                </a>
            </div>
            <img
                src={DefaultUserIcon}
                alt="default-user-icon"
                className="user-icon"
                onClick={() => console.log('clicked')}
            />
        </div>
    
    );
};

function Background() {
	return (
		<>
        	<img src={BankingVector1} alt="banking-vector-1" className="vector-1" />
        	<img src={BankingVector2} alt="banking-vector-2" className="vector-2" />
			<img src={BankingVector3} alt="banking-vector-3" className="vector-3" />
            <img src={BankingVector4} alt="banking-vector-4" className="vector-4" />
		</>
	);
}


const Banking = () => {
    return (
        <div>
            <NavBar />
            <Background />
            <div className='heading'>
                Which mortage is Right For You?
            </div>
            <div className='images'>
                <div className='head'>
                    <img src={Head} />
                </div>
                <div className='house'>
                    <img src={House} />
                </div>
                </div>
            <div className='loan-options'>
                <div className='loan-purpose'>
                    <form>
                        <select className='select'>
                            <option>Loan Purpose</option>
                            <option value='Buying a House'>Buying a House</option>
                            <option value=''>Rental Property</option>
                            <option value=''> Refinance</option>
                            <option value='Buying a Bo'>Buying a Bo</option>
                            <option value=',000'>500,</option>
                            <option value='600,000'>600,000</option>
                            <option value='700,000'>700,000</option>
                            <option value='800,000'>800,000</option>
                            <option value='900,000'>900,000</option>
                            <option value='1,000,000'>1,000,000</option>
                        </select>
                    </form>
                </div>
                <div className='credit-score'>
                    <form>
                        <select className='select'>
                            <option>Credit Score</option>
                            <option value='300-579'>300-579</option>
                            <option value='580-669'>580-669</option>
                            <option value='670-739'>670-739</option>
                            <option value='740-799'>740-799</option>
                            <option value='800-850'>800-850</option>
                        </select>
                    </form>
                </div>
                <div className='loan-amount'>
                    <form>
                        <select className='select'>
                            <option>Loan Amount</option>
                            <option value='100,000'>$100,000</option>
                            <option value='200,000'>$200,000</option>
                            <option value='300,000'>$300,000</option>
                            <option value='400,000'>4400,000</option>
                            <option value='500,000'>$500,000</option>
                            <option value='600,000'>$600,000</option>
                            <option value='700,000'>$700,000</option>
                            <option value='800,000'>$800,000</option>
                            <option value='900,000'>$900,000</option>
                            <option value='1,000,000'>$1,000,000</option>
                        </select>
                    </form>
                </div>
                <div className='closing-soon'>
                    <form>
                        <select className='select'>
                            <option>Closing Soon</option>
                            <option value='100,000'>100,000</option>
                            <option value='200,000'>200,000</option>
                            <option value='300,000'>300,000</option>
                            <option value='400,000'>400,000</option>
                            <option value='500,000'>500,000</option>
                            <option value='600,000'>600,000</option>
                            <option value='700,000'>700,000</option>
                            <option value='800,000'>800,000</option>
                            <option value='900,000'>900,000</option>
                            <option value='1,000,000'>1,000,000</option>
                        </select>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Banking