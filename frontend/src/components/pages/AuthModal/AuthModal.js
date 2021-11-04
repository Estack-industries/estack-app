import React, { useState } from 'react';
import { Container } from '../../Container/Container';
import NewAccountPage from './NewAccountPage/NewAccountPage';
import SignInPage from './SignInPage/SignInPage';
// import { AuthWaveBackground } from '../../AuthWaveBackground/AuthWaveBackground';
// import {
//   AUTH_BG_TITLE,
//   AUTH_SIGNIN_TITLE,
//   AUTH_REGISTER_TITLE,
//   AUTH_EMAIL,
//   AUTH_PASSWORD,
//   AUTH_SIGNIN_RESET,
// } from './strings/en.js';
import './AuthModal.css';

function AuthModal({ isModalOpen, onModalToggle }) {
  function closeAuthModal() {
    onModalToggle(false);
  }

  const [isSignInOpen, setIsSignInOpen] = useState(true);
  function toggleSignInPage(isSignin) {
    setIsSignInOpen(isSignin);
  }


  return (
    <div
      id="auth-modal"
      className="auth-container"
      style={{
        display: isModalOpen ? 'flex' : 'none',
      }}
    >
      <Container pb='container--nopb'>
        <div className="auth-content">
          {/* Wave Background */}

          <svg className="auth-bg" viewBox="250 0 594 1442">
            <path fill="#CBE9FF" stroke="#CBE9FF" d="M725.836 271.101C743.874 120.231 535.063 9.93701 473.563 0.937012H0.5625L0.0625 1441.94H213.562C299.459 1441.94 581.335 1389.98 533.562 1184.78C489.562 995.777 725.837 900.777 617.562 681.777C505.121 454.349 703.288 459.69 725.836 271.101Z" />
            <path fill="#98D4FF" stroke="#98D4FF" d="M521.293 442.971C608.666 331.67 653.535 204.465 618.535 114.965C618.535 114.965 599.035 68.9648 557.535 39.9648C516.035 10.9648 468.535 0.464844 468.535 0.464844H443.035H401.535H0.535156L0.535156 1441.46C34.187 1441.46 313.573 1441.46 382.035 1441.46C462.035 1441.46 574.032 1420.47 544.759 1220.15C511.807 994.653 449.897 999.953 552.747 836.134C671.587 646.845 436.419 551.086 521.293 442.971Z" />
            <path fill="url(#paint0_linear)" stroke="url(#paint0_linear)" d="M588.801 166.993C618.309 38.1626 485.801 0.162598 426.301 0.162598H207.301H0.300781L0.300781 1441.16L399.801 1441C479.822 1441 558.025 1240.64 473.375 1048.64C385.801 849.998 626.832 820.42 507.801 601.995C388.77 383.573 547.801 345.993 588.801 166.993Z" />
            <linearGradient id="paint0_linear" x1="0.663636" y1="-10" x2="1440.66" y2="511.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0193FD" />
              <stop offset="1" stopColor="#3F51F4" />
            </linearGradient>
          </svg>

          {/* Login & Register */}
          <div className="auth-panel">
            <div>
              <button className="auth-close" onClick={closeAuthModal}>&times;</button>
              <div className="auth-pageContainer">
                {/* <h3 className="auth-welcomeTitle">{AUTH_BG_TITLE}</h3> */}
                <div className="auth-tabGrid">
                  <div className="auth-signInLine"
                    style={{
                      visibility: isSignInOpen ? 'visible' : 'hidden',
                    }} />
                  <div className="auth-registerInLine"
                    style={{
                      visibility: isSignInOpen ? 'hidden' : 'visible',
                    }} />
                  <div />
                  <h3 className="auth-signInText" onClick={() => toggleSignInPage(true)}>Sign In</h3>
                  <h3 className="authregisterText" onClick={() => toggleSignInPage(false)}>New Account</h3>
                </div>
                <NewAccountPage isOpen={isSignInOpen} />
                <SignInPage isOpen={isSignInOpen} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AuthModal
