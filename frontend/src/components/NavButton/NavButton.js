import React from 'react';

import './NavButton.css';

const BTN_PRIMARY = 'btn--primary';
const BTN_DROPDOWN = 'btn--dropdown';
const BTN_SMALL = 'btn--small';
const BTN_MEDIUM = 'btn--medium';
const BTN_LARGE = 'btn--large';

const MENUSTYLES = [BTN_PRIMARY, BTN_DROPDOWN];
const SIZES = [BTN_SMALL, BTN_MEDIUM, BTN_LARGE];

export const NavButton = ({
	children,
	buttonStyle: style,
	buttonSize: size,
	onModalToggle,
	onSignInToggle,
	onRegisterToggle,
}) => {
	const buttonStyle = MENUSTYLES.includes(style) ? style : BTN_PRIMARY;
	const buttonSize = SIZES.includes(size) ? size : BTN_LARGE;

	return (
		<li>
			<button
				onClick={() => onModalToggle(true)}
				className={`btn ${buttonStyle} ${buttonSize}`}
			>
				{children}
			</button>
		</li>
	);
};
