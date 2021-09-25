import React from 'react';
import './NavButton.css';
import { Link } from 'react-router-dom';

const MENUSTYLES = ['btn--primary', 'btn--dropdown'];
const SIZES = ['btn--large', 'btn--medium', 'btn--small'];

export const NavButton = ({
  children,
  buttonStyle,
  buttonSize,
  to,
}) => {
  const checkButtonStyle = MENUSTYLES.includes(buttonStyle)
    ? buttonStyle
    : MENUSTYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  return (
    <li>
      <Link to={to} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </Link>
    </li>
  );
};