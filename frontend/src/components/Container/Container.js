import React from 'react';
import './Container.css';

const DIRECTION = ['container--column', 'container--row'];
const PADDINGBOT = ['container--nopb'];

export const Container = ({ d, pb, children }) => {
  const wrapper_name = 'container-wrapper'
  const prop = DIRECTION.includes(d)
    ? d
    : DIRECTION[0];
  const paddingbot = PADDINGBOT.includes(pb)
    ? pb
    : '';

  return (
    <div className={wrapper_name + ' ' + prop + ' ' + paddingbot}>
      {children}
    </div >
  );
};