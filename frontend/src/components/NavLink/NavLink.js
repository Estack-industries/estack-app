import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const MENUSTYLES = ['btn--primary', 'btn--dropdown'];
const SIZES = ['btn--large', 'btn--medium', 'btn--small'];
const DEFAULT_URL = ['#'];

export const NavLink = ({
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
  const checkURL = to
    ? to
    : DEFAULT_URL[0];

  return (
    <li>
      <Link
        to={`${checkURL}`}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      >
        {children}
      </Link>
    </li>
  );
};