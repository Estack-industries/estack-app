import React from 'react';
import { Container } from '../../Container/Container';
import { WaveBG } from '../../WaveBG/WaveBG';
import PropertySection1 from './PropertySection1';
import './Property.css';

function Property() {
  return (
    <div className="property-container">
      <WaveBG position="none" />
      <Container >
        <PropertySection1 />
      </Container>
    </div>
  )
}

export default Property
