import React from 'react';
import { Container } from '../../Container/Container';
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
        display: isModalOpen ? 'block' : 'none'
      }}
    >
      <Container>
        <button className="auth-close" onClick={closeAuthModal}>&times;</button>
        <p>Modal is Opened!</p>
      </Container>
    </div>
  )
}

export default AuthModal
