import React from 'react';
import './Container.css';

const DIRECTION = ['container--column', 'container--row'];

export const Container = ({ d, children }) => {
  const wrapper_name = 'container-wrapper'
  const prop = DIRECTION.includes(d)
    ? wrapper_name + ' ' + d
    : wrapper_name + ' ' + DIRECTION[0];

  return (
    <div className={prop}>
      {children}
    </div >
  );
};