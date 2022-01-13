import picture from './assets/sample/sample-profile.jpg'
import sampleHouse1 from './assets/sample/sample-house-1.jpg';
import sampleHouse2 from './assets/sample/sample-house-2.jpg';
import sampleHouse3 from './assets/sample/sample-house-3.jpg';
import sampleHouse4 from './assets/sample/sample-house-4.jpg';

async function Fetching(id) {
	await new Promise(function(resolve) {setTimeout(resolve, 2000)});

	if (id === 'example') return {
		picture: picture,
		messages: 16,
		favoritedHomes: [
			{
				image: sampleHouse1,
				address: '26 Young Avenue East Elmhurst, NY 11369',
				price: 600000000000000000000000000,
				beds: 3,
				baths: 2.5,
				sqft: 2000,
				new: true,
			},
			{
				image: sampleHouse2,
				address: '8952 Glenholme Avenue Saugus, MA 01906',
				price: 900000,
				beds: 4,
				baths: 3,
				sqft: 3400,
				new: true,
			},
			{
				image: sampleHouse3,
				address: '56 Oak Valley Street Aberdeen, SD 57401',
				price: 500000,
				beds: 2,
				baths: 1.5,
				sqft: 1200,
				new: false,
			}
		],
		schedules: [
			{
				name: 'Lease Needs to Renew',
				date: Date.now() - 1000 * 60 * 60 * 24,
			},
			{
				name: 'Private Call with the Landlord',
				date: Date.now(),
			},
			{
				name: 'Upcoming Rent',
				date: Date.now() + 1000 * 60 * 60 * 24,
				cost: 1000,
			},
			{
				name: 'Lease Needs to Renew',
				date: Date.now() + 1000 * 60 * 60 * 24 * 7,
			},
			{
				name: 'Private Call with the Landlord',
				date: Date.now() + 1000 * 60 * 60 * 24 * 7,
			},
			{
				name: 'Memoradum',
				date: Date.now() + 1000 * 60 * 60 * 24 * 14,
			},
			{
				name: 'Upcoming Rent',
				date: Date.now() + 1000 * 60 * 60 * 24 * 14,
			},
		],
		cards: [
			{
				balance: 510400,
				profit: 14225,
				payments: [
					{
						date: Date.now() - 1000 * 60 * 60 * 24 * 1,
						amount: 2500,
						address: '26 Young Avenue East Elmhurst, NY 11369',
					},
					{
						date: Date.now() - 1000 * 60 * 60 * 24 * 2,
						amount: 2500,
						address: '8952 Glenholme Avenue Saugus, MA 01906',
					},
					{
						date: Date.now() - 1000 * 60 * 60 * 24 * 3,
						amount: 2500,
						address: '56 Oak Valley Street Aberdeen, SD 57401',
					},
				]
			},
			{
				balance: 11252,
				profit: 0,
			}
		],
		pinnedAddresses: [
			{
				image: sampleHouse4,
				address: '684 W. Ketch Harbour Drive New Bern, NC 28560',
				cost: 1500,
				costInterval: 'Monthly',
			}
		],
		rent: [
			{
				date: Date.now() - 1000 * 60 * 60 * 24 * 4,
				amount: 1000000,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 0,
				amount: 2500,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 30,
				amount: 3000,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 59,
				amount: 1000,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 97,
				amount: 1500,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 120,
				amount: 500,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 364,
				amount: 1000,
			}
		],
		stats: [
			{
				name: 'Total Expenses',
				amount: 2500,
				color: '#fbb142'
			},
			{
				name: 'Weekly Income',
				amount: 6000,
				color: '#4fdfb1'
			}
		],
	}
	else return {}
}

export default Fetching;