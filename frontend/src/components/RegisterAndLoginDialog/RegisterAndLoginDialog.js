import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

import './RegisterAndLoginDialog.css';
import RegisterWave from './assets/register-wave.png';

const RegisterAndLoginDialog = ({ isOpened, onSwitch }) => {
	return (
		<Dialog open={isOpened} onClose={() => onSwitch(false)} fullWidth>
			<div className="dialog-window">
				<h1>hello</h1>
			</div>
		</Dialog>
	);
};

export default RegisterAndLoginDialog;
