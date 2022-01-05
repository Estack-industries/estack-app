import React, { useState } from 'react';
import './Banking.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';

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


const Banking = () => {
    return (
        <div>
            <NavBar />
            <div className='heading'>
                Which mortage is Right For You?
            </div>
            <div className='loan-options'>
                <div className='loan-purpose'>
                    <form>
                        <label>Loan Purpose</label>
                        <select>
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
                <div className='credit-score'>
                <form>
                        <label>Credit Score</label>
                        <select>
                            <option value='300-579'>300-579</option>
                            <option value='580-669'>580-669</option>
                            <option value='670-739'>670-739</option>
                            <option value='740-799'>740-799</option>
                            <option value='800-850'>800-850</option>
                        </select>
                    </form>
                </div>
                <div className='loan-amount'>

                </div>
                <div className='closing-soon'>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Banking