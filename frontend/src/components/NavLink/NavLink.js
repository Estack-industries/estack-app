import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.css';

const BTN_PRIMARY = 'btn--primary';
const BTN_DROPDOWN = 'btn--dropdown';
const BTN_SMALL = 'btn--small';
const BTN_MEDIUM = 'btn--medium';
const BTN_LARGE = 'btn--large';
const DEFAULT_URL = '#';

const MENUSTYLES = [BTN_PRIMARY, BTN_DROPDOWN];
const SIZES = [BTN_SMALL, BTN_MEDIUM, BTN_LARGE];

export const NavLink = ({
	children,
	buttonStyle: style,
	buttonSize: size,
	to,
}) => {
	const buttonStyle = MENUSTYLES.includes(style) ? style : BTN_PRIMARY;
	const buttonSize = SIZES.includes(size) ? size : BTN_LARGE;
	const URL = to ? to : DEFAULT_URL;

	return (
		<li>
			<Link to={`${URL}`} className={`btn ${buttonStyle} ${buttonSize}`}>
				{children}
			</Link>
		</li>
	);
};
