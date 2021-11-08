import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const BTN_MENU = 'btn--menu';
const BTN_MENUDROPDOWN = 'btn--menudropdown';
const BTN_SMALL = 'btn--small';
const BTN_MEDIUM = 'btn--medium';
const BTN_LARGE = 'btn--large';

const STYLES = [BTN_MENU, BTN_MENUDROPDOWN];
const SIZES = [BTN_SMALL, BTN_MEDIUM, BTN_LARGE];

const Button = ({
	children,
	type,
	onClick,
	buttonStyle: style,
	buttonSize: size,
	to,
}) => {
	const buttonStyle = STYLES.includes(style) ? style : BTN_MENU;
	const buttonSize = SIZES.includes(size) ? size : BTN_SMALL;

	return (
		<Link to={to} className="btn-mobile">
			<button
				className={`btn ${buttonStyle} ${buttonSize}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
};

export default Button;
