import sampleHouse1 from './assets/seller/sampleHouse1.png';
import sampleHouse2 from './assets/seller/sampleHouse2.png';

const Fetching = async (id) => {
	await new Promise((resolve) => {setTimeout(resolve, 2000)});

	if (id === 'example') return {
		id: 'example',
		name: 'Rowena Ravenclaw',
		messages: 16,
		sentMessagesToday: 10,
		favoritedHomes: [
			{
				id: 'example',
				address: '26 Young Avenue East Elmhurst, NY 11369',
				price: 600000000000000000000000000,
				beds: 3,
				baths: 2.5,
				sqft: 2000,
				new: true,
			},
			{
				id: 'example',
				address: '8952 Glenholme Avenue Saugus, MA 01906',
				price: 900000,
				beds: 4,
				baths: 3,
				sqft: 3400,
				new: true,
			},
			{
				id: 'example',
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
				balance: 521652,
				profit: 854225,
				payments: [
					{
						purpose: 'Top Picks by Users',
						sell: 400000,
						amount: 2500,
						address: 'Roma Avenue',
					},
					{
						purpose: 'Top Picks by Users',
						sell: 500000,
						amount: 1500,
						address: 'Atlas Shack',
					},
					{
						purpose: 'Top Picks by Users',
						sell: 786000,
						amount: 1500,
						address: 'Germanrin',
					},
					{
						purpose: 'Top Picks by Users',
						sell: 667000,
						amount: 3000,
						address: 'Heavens',
					},
					{
						purpose: 'Top Picks by Users',
						sell: 348000,
						amount: 1200,
						address: 'Heretho',
					},
					{
						purpose: 'Least Picks by Users',
						sell: 400000,
						amount: 2500,
						address: 'Roma Avenue',
					},
					{
						purpose: 'Least Picks by Users',
						sell: 50000,
						amount: 1500,
						address: 'Atlas Shack',
					},
					{
						purpose: 'Least Picks by Users',
						sell: 786000,
						amount: 1500,
						address: 'Germanrin',
					},
					{
						purpose: 'Least Picks by Users',
						sell: 667000,
						amount: 3000,
						address: 'Heavens',
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
				id: 'example',
				image: sampleHouse1,
				address: 'Mandragora Mansion',
				cost: 1000000,
			},
			{
				id: 'example',
				image: sampleHouse2,
				address: 'Halbert Avenue',
				cost: 700000,
			},
			{
				id: 'example',
				image: sampleHouse2,
				address: 'Halbert Avenue',
				cost: 700000,
			}
		],
		rent: [
			{
				day: Date.now() - 1000 * 60 * 60 * 24 * 4,
				cost: 1000000,
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
				name: 'Total Investment',
				amount: 4000,
				color: '#fbb142'
			},
			{
				name: 'Weekly Returns',
				amount: 5000,
				color: '#4fdfb1'
			},
			{
				name: 'Expenses',
				amount: 3000,
				color: '#ED5B75'
			}
		],
	}
	else return {}
}

export default Fetching;