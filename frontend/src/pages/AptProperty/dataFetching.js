import sampleMainHouse1 from './assets/temp/sampleMainHouse1.jpg';
import sampleMainApt1 from './assets/temp/sampleMainApt1.png'
import sampleMainApt2 from './assets/temp/sampleMainApt2.png'
import sampleMainHouse2 from './assets/temp/sampleMainHouse2.png';
import sampleMainHouse3 from './assets/temp/sampleMainHouse3.png';
import sampleMainHouse4 from './assets/temp/sampleMainHouse4.png';
import sampleMainHouse5 from './assets/temp/sampleMainHouse5.png';
import sampleMainHouse6 from './assets/temp/sampleMainHouse6.png';
import sampleMainHouse7 from './assets/temp/sampleMainHouse7.png';
import sampleMainHouse8 from './assets/temp/sampleMainHouse8.png';
import sampleSimilarHouse1 from './assets/temp/sampleSimilarHouse1.jpg';
import sampleSimilarHouse2 from './assets/temp/sampleSimilarHouse2.jpg';
import sampleSimilarHouse3 from './assets/temp/sampleSimilarHouse3.jpg';
import { BackendURL } from '../../lib/constants';


const FetchMainProperty = async (id) => {
	await new Promise((resolve) => {setTimeout(resolve, 2000)});

	if (id === 'example') return {
		id: 'example',
		numBedrooms: 2,
		numBathrooms: 1,
		state: 'NY',
		city: 'Newy York',
		street: '77 Sparkles Road',
		Rent: 1400,
        Deposit: 2000,
		Rating: 5,
		images: [
			sampleMainApt1,
			sampleMainApt2,
			sampleMainHouse3,
			sampleMainHouse4,
			sampleMainHouse5,
			sampleMainHouse6,
			sampleMainHouse7,
			sampleMainHouse8,
		],
		description: 'The 1 level Apartment that has a modern design, has a large pool and a garage that fits up to four cars.'
	}
}

const FetchSimilarProperties = async (propertyData) => {
	await new Promise((resolve) => {setTimeout(resolve, 2000)});

	if (propertyData.id === 'example') return [
		{
			id: 'example',
			image: sampleSimilarHouse1,
			address: '26 Young Avenue East Elmhurst, NY 11369',
			price: 600000000000000000000000000,
			beds: 3,
			baths: 2.5,
			sqft: 2000,
			new: true,
		},
		{
			id: 'example',
			image: sampleSimilarHouse2,
			address: '8952 Glenholme Avenue Saugus, MA 01906',
			price: 900000,
			beds: 4,
			baths: 3,
			sqft: 3400,
			new: true,
		},
		{
			id: 'example',
			image: sampleSimilarHouse3,
			address: '56 Oak Valley Street Aberdeen, SD 57401',
			price: 500000,
			beds: 2,
			baths: 1.5,
			sqft: 1200,
			new: false,
		}
	]
	else {
		for (let i = 0; i < 5; i++) {
			const res = await fetch(BackendURL + '/filterProperties', {
				body: JSON.stringify({
					city: propertyData.city,
					squareft: [propertyData.squareft - ((2 ** i) * 100), propertyData.squareft + ((2 ** i) * 100)],
				}),
			});

			if (res.json().list.length > 3 || i === 4) {
				return res.json().list.slice(0, 3);
			}
		}
	}
}

export { FetchMainProperty, FetchSimilarProperties };