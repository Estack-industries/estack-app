import React from 'react';

import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

import './ApprovedAlert.css';

const ApprovedAlert = () => {
	return (
		<div className="approve-cont">
			<div className="approve-alert">
				<h1>Please Check Your Email</h1>
				<MarkEmailReadIcon style={{ fontSize: 80 }} />
				<h3>We look forward to speaking with you soon!</h3>
				<h3>
					Your documents will be checked. If you qualify, we will
					reach out with further instruction
				</h3>
				<h3>It is our pleasure that you selected us!</h3>
			</div>
		</div>
	);
};

export default ApprovedAlert;
