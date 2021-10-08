import React from 'react';
import './Container.css';

const DIRECTION = ['container--column', 'container--row'];

export const Container = ({ d, children }) => {
  const wrapper_name = 'container-wrapper'
  const prop = DIRECTION.includes(d)
    ? d
    : DIRECTION[0];

  return (
    <div className={wrapper_name + ' ' + prop}>
      {children}
    </div >
  );
};