import React from 'react';
import './NavButton.css';

const MENUSTYLES = ['btn--primary', 'btn--dropdown'];
const SIZES = ['btn--large', 'btn--medium', 'btn--small'];

export const NavButton = ({
	children,
	buttonStyle,
	buttonSize,
	onModalToggle,
	onSignInToggle,
	onRegisterToggle,
}) => {
	const checkButtonStyle = MENUSTYLES.includes(buttonStyle)
		? buttonStyle
		: MENUSTYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	function openAuthModal() {
		onModalToggle(true);
	}

	return (
		<li>
			<button
				onClick={openAuthModal}
				className={`btn ${checkButtonStyle} ${checkButtonSize}`}
			>
				{children}
			</button>
		</li>
	);
};
