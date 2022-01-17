import React, {useState} from 'react';
import './AccountSettings.css';

import EStackLogo from './assets/e-stack-logo.svg';
import DefaultUserIcon from './assets/default-user-icon.svg';
import AccountVecotr1 from './assets/accountVector1.svg'
import AccountVecotr3 from './assets/accountVector3.svg'
import AccountVecotr4 from './assets/accountVector4.svg'
import GearsBig from './assets/2gearsBig.png'

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
        	<img src={AccountVecotr1} alt="account-vector-1" className="vector-1" />
			<img src={AccountVecotr3} alt="account-vector-3" className="vector-3" />
            <img src={AccountVecotr4} alt="account-vector-4" className="vector-4" />
		</>
	);
}

const AccountSetting = () => {
    return (
        <div>
            <NavBar />
            <Background />
            <div className='heading'>
                Account Settings
            </div>
            <div className='profile-picture'>
                
            </div>
            <div className='info-container'>
                <div className='personal-information'>
                    <div className='info-heading'>
                        Personal Information
                    </div>
                </div>
                <div className='sign-in-security'>
                    <div className='info-heading'>
                        Sign-in & Security
                    </div>
                </div>
                <div className='manage-account'>
                    <div className='info-heading'>
                        Manage Account
                    </div>
                </div>
                <div className='notifications'>
                    <div className='info-heading'>
                        Notifications
                    </div>
                </div>
                <div className='deleted-searches'>
                    <div className='info-heading'>
                        Deleted Searches
                    </div>
                </div>
                <div className='bidded-properties'>
                <div className='info-heading'>
                        Bidded Properties
                    </div>
                </div>
                <div className='loans-financing'>
                <div className='info-heading'>
                        Loans & Financing
                    </div>
                </div>
                <img src={GearsBig} className='gears-big' />
            </div>
            
            <Footer />
        </div>
    );
};

export default AccountSetting