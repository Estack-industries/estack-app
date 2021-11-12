import React from 'react';

import './DescriptionField.css';

export const DescriptionField = ({ text, onChange }) => {
	return (
		< >
			<textarea
				className="text-box"
				value={text}
				onChange={onChange}
			/>
		</>
	);
};
