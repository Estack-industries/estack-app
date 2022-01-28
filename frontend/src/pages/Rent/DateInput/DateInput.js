import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function DateInput() {
	const [value, setValue] = React.useState(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				fullWidth
				label="Date Available "
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}
