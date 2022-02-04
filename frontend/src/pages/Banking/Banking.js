import React from 'react';
import './Banking.css';
import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import BankingVector1 from './assets/BankingVector1.svg'
import BankingVector2 from './assets/BankingVector2.png'
import BankingVector3 from './assets/BankingVector3.svg'
import BankingVector4 from './assets/BankingVector4.svg'
import Head from './assets/head.png'
import House from './assets/house.png'
import BankOfGeorgia from './assets/BankOfGeorgia.png'
import TBCBank from './assets/TBCBank.png'
import LibertyBank from './assets/LibertyBank.png'
import BasisBank from './assets/BasisBank.png'
import VTBBank from './assets/VTBBank.png'
import Star from './assets/GoldStar.png'

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import NavBackground from '../../components/NavBackground';

const Banking = () => {
    return (
        <div>
            <Navbar />
            <NavBackground />
            <div className='heading'>
                Which mortage is Right For You?
            </div>
            <div className='images'>
                <div className='head'>
                    <img src={Head} alt="head" />
                </div>
                <div className='house'>
                    <img src={House} alt="house"/>
                </div>
                </div>
            <div className='loan-options'>
                <div className='loan-purpose'>
                    <form>
                        <select className='select'>
                            <option>Loan Purpose</option>
                            <option value=''>Buying a House</option>
                            <option value=''>Rental Property</option>
                            <option value=''>Refinance</option>
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

            <div className='banks-container'>
                <div className='bank-of-georgia'>
                    <div className='bank-logo'>
                        <img src={BankOfGeorgia} alt="bank-of-georgia-logo"/>
                    </div>
                    <div className='rating-container'>
                        <div className='bank-name'>
                            Bank of Georgia
                        </div>
                        <div className='bank-rating'>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                        </div>
                    </div>
                    <div className='apr-container'>
                        <div className='gray-lettering'>
                            10-Year Fixed
                        </div>
                        <div className='apr-percent'>
                            2.5% APR
                        </div>
                        <div className='monthly-fees'>
                            2.5% Rate - 3,394/monthly - $0 Fees
                        </div>
                    </div>
                    <div className='bank-check'>
                        <input type="checkbox" id="bank" name="bank-of-georgia" value="bank-of-georgia" className='check-box' />
                    </div>
                </div>
                <div className='bank-tbc'>
                    <div className='bank-logo'>
                        <img src={TBCBank} alt="tbc-bank-logo"/>
                    </div>
                    <div className='rating-container'>
                        <div className='bank-name'>
                            TBC Bank
                        </div>
                        <div className='bank-rating'>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                        </div>
                    </div>
                    <div className='apr-container'>
                        <div className='gray-lettering'>
                            10-Year Fixed
                        </div>
                        <div className='apr-percent'>
                            2.5% APR
                        </div>
                        <div className='monthly-fees'>
                            2.5% Rate - 3,394/monthly - $0 Fees
                        </div>
                    </div>
                    <div className='bank-check'>
                        <input type="checkbox" id="bank" name="bank-of-georgia" value="tbc-bank" className='check-box' />
                    </div>
                </div>
                <div className='liberty-bank'>
                    <div className='bank-logo'>
                        <img src={LibertyBank} alt="liberty-bank-logo"/>
                    </div>
                    <div className='rating-container'>
                        <div className='bank-name'>
                            Liberty Bank
                        </div>
                        <div className='bank-rating'>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                        </div>
                    </div>
                    <div className='apr-container'>
                        <div className='gray-lettering'>
                            10-Year Fixed
                        </div>
                        <div className='apr-percent'>
                            2.5% APR
                        </div>
                        <div className='monthly-fees'>
                            2.5% Rate - 3,394/monthly - $0 Fees
                        </div>
                    </div>   
                    <div className='bank-check'>
                        <input type="checkbox" id="bank" name="bank-of-georgia" value="liberty-bank" className='check-box' />
                    </div>
                </div>
                <div className='basis-bank'>
                    <div className='bank-logo'>
                        <img src={BasisBank} alt="basis-bank-logo"/>
                    </div>
                    <div className='rating-container'>
                        <div className='bank-name'>
                            Basis Bank
                        </div>
                        <div className='bank-rating'>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                        </div>
                    </div>
                    <div className='apr-container'>
                        <div className='gray-lettering'>
                            10-Year Fixed
                        </div>
                        <div className='apr-percent'>
                            2.5% APR
                        </div>
                        <div className='monthly-fees'>
                            2.5% Rate - 3,394/monthly - $0 Fees
                        </div>
                    </div>
                    <div className='bank-check'>
                        <input type="checkbox" id="bank" name="bank-of-georgia" value="basis-bank" className='check-box' />
                    </div> 
                </div>
                <div className='vtb-bank'>
                    <div className='bank-logo'>
                        <img src={VTBBank} alt="vtb-bank-logo"/>
                    </div>
                    <div className='rating-container'>
                        <div className='bank-name'>
                            VTB Bank
                        </div>
                        <div className='bank-rating'>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                            <img src={Star} alt="star-rating"/>
                        </div>
                    </div>
                    <div className='apr-container'>
                        <div className='gray-lettering'>
                            10-Year Fixed
                        </div>
                        <div className='apr-percent'>
                            2.5% APR
                        </div>
                        <div className='monthly-fees'>
                            2.5% Rate - 3,394/monthly - $0 Fees
                        </div>
                    </div>
                    <div className='bank-check'>
                        <input type="checkbox" id="bank" name="bank-of-georgia" value="vtb-bank" className='check-box' />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Banking