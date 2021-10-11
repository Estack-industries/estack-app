import React from 'react';
import { Container } from '../../Container/Container';
import Rectangle427 from '../../../assets/Rectangle 427.png';
import NewAccountPage from './NewAccountPage/NewAccountPage';
import { AuthWaveBackground } from '../../AuthWaveBackground/AuthWaveBackground';
import {
  AUTH_BG_TITLE,
  AUTH_SIGNIN_TITLE,
  AUTH_REGISTER_TITLE,
  AUTH_EMAIL,
  AUTH_PASSWORD,
  AUTH_SIGNIN_RESET,
} from './strings/en.js';
import './AuthModal.css';

function AuthModal({ isModalOpen, onModalToggle }) {
  function closeAuthModal() {
    onModalToggle(false);
  }

  return (
    <div
      id="auth-modal"
      className="auth-container"
      style={{
        display: isModalOpen ? 'flex' : 'none',
      }}
    >
      <Container>
        <div className="auth-content">
          <div className="auth-bg">
            <AuthWaveBackground />
          </div>
          <div className="auth-panel">
            <button className="auth-close" onClick={closeAuthModal}>&times;</button>
            <NewAccountPage />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AuthModal
