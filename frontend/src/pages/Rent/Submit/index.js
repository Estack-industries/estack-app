import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import { BackendURL } from '../../../lib/constants';

const SubmitBox = () => {
	const history = useHistory();
	const [errors, setErrors] = useState([]);

	const formData = {
		property_name: null,
		street: null,
		city: null,
		state: null,
		zip: null,
		type: null,
		numBedrooms: 0,
		numBathrooms: 0,
		squareft: 0,
		leaseDuration: null,
		dateAvailable: null,
		yearBuilt: null,
		garageParking: false,
		ac: false,
		wheelChairAcces: false,
		offStreetParking: false,
		balcony: false,
		furnished: false,
		hardWood: false,
		pets: false,
		// images: [],
		description: null,
		// listingPrice: null, //..
		monthlyRent: 0,
		securityDeposit: 0,
		cleaningFee: 0,
		owner_email: null,
	}

	const fetchCurrentFormData = (localErrors) => {
		Object.keys(formData).forEach(key => {
			const element = document.getElementById('rent-' + key);
			if (!element) throw new Error('No element by the name of rent-' + key + ' was found.');

			if (element.value === undefined) {
				const element = document.querySelector('#rent-' + key + ' input');
				if (!element) throw new Error('No input element with type checkbox by the name of rent-' + key + ' was found.');
				formData[key] = element.checked
			}
			else {
				formData[key] = element.value;
				const nonZeroNumberKeys = ['monthlyRent', 'squareft'];

				if (element.value === '') {
					const elementLabel = document.getElementById('rent-' + key + '-label');
					localErrors.push('You did not fill out the ' + elementLabel.innerText + ' field.');
				}
				else if (nonZeroNumberKeys.includes(key) && element.value === '0') {
					const elementLabel = document.getElementById('rent-' + key + '-label');
					localErrors.push('You did not fill out the ' + elementLabel.innerText + ' field.');
				}
			}
		})

		return formData;
	};

	const submitClick = () => {
		let localErrors = [];
		setErrors([]);
		fetchCurrentFormData(localErrors);

		if (localErrors.length > 0) {
			setErrors(localErrors);
			return;
		}

		fetch(BackendURL + '/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		}).then(res => {
			return res.json()
		}).then(body => {
			history.push('/rent/' + body.id);
		}).catch(err => {
			setErrors(['Fetching Error: ' + err.message]);
		});
	}

	return (
		<>
			{errors.map((error, i) => (
				<p className={styles.error} key={i}>{error}</p>
			))}
			<div className={styles.uploadRentBox}>
				<h1>Ready to Publish?</h1>
				<div className={styles.inputContainer}>
					<label id='rent-owner_email-label'>Email</label>
					<input
						id='rent-owner_email'
						type='email'
					/>
				</div>
				<div className={styles.inputContainer}>
					<label id='rent-owner_email-label'>Password</label>
					<input
						id='password'
						type='password'
					/>
				</div>
				<div className={styles.submitButton}>
					<input type='submit' onClick={submitClick} placeholder='submit'/>
				</div>
			</div>
		</>
	)
}

export default SubmitBox;