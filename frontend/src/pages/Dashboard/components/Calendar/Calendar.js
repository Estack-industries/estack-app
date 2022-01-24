import * as React from 'react';
import { render } from 'react-dom';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import './Calendar.css';

class Calendar extends React.Component {
	constructor() {
    super();
		var today = new Date(),
			date =
				today.getFullYear() +
				'-' +
				(today.getMonth() + 1) +
				'-' +
				today.getDate();

		this.state = {
			currentDate: date,
		};
	}

	render() {
		return (
			<div>
				<DatePickerComponent
					placeholder="Calendar"
					value={this.state.currentDate}
					format="dd-MMM-yy"
					start="Year"
					depth="Year"
				></DatePickerComponent>
			</div>
		);
	}
}
export default Calendar;
