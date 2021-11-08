import React from 'react';

import './SignInButton.css';

export const SignInButton = ({ text, onClick }) => {
	return (
		<>
			<div className="container">
				<div className="signInButtonContainer">
					<h3 className="buttonText" onClick={onClick}>
						{text}
					</h3>
				</div>
			</div>
		</>
	);
};
