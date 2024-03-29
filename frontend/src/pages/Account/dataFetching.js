import picture from './assets/sample/sample-profile.jpg'
import sampleHouse1 from './assets/sample/sample-house-1.jpg';
import sampleHouse2 from './assets/sample/sample-house-2.jpg';
import sampleHouse3 from './assets/sample/sample-house-3.jpg';
import sampleHouse4 from './assets/sample/sample-house-4.jpg';
import sampleHouse5 from './assets/sample/sample-house-5.jpg';
import sampleContacts1 from './assets/sample/sample-contact-1.jpg';
import sampleContacts2 from './assets/sample/sample-contact-2.png';
import sampleContacts3 from './assets/sample/sample-contact-3.jpg';
import sampleContacts4 from './assets/sample/sample-contact-4.jpg';
import sampleContacts5 from './assets/sample/sample-contact-5.png';

const Fetching = async (id) => {
	await new Promise((resolve) => {setTimeout(resolve, 2000)});

	if (id === 'example') return {
		id: 'example',
		picture: picture,
		name: 'Roman Vasilev',
		messages: 16,
		sentMessagesToday: 10,
		favoritedHomes: [
			{
				id: 'example',
				image: sampleHouse1,
				address: '26 Young Avenue East Elmhurst, NY 11369',
				price: 600000000000000000000000000,
				beds: 3,
				baths: 2.5,
				sqft: 2000,
				new: true,
			},
			{
				id: 'example',
				image: sampleHouse2,
				address: '8952 Glenholme Avenue Saugus, MA 01906',
				price: 900000,
				beds: 4,
				baths: 3,
				sqft: 3400,
				new: true,
			},
			{
				id: 'example',
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
						purpose: 'Payed Lease',
						date: Date.now() - 1000 * 60 * 60 * 24 * 1,
						amount: 2500,
						address: '26 Young Avenue East Elmhurst, NY 11369',
					},
					{
						purpose: 'Payed Lease',
						date: Date.now() - 1000 * 60 * 60 * 24 * 2,
						amount: 2500,
						address: '8952 Glenholme Avenue Saugus, MA 01906',
					},
					{
						purpose: 'Top Picks by User\'s',
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
				id: 'example',
				image: sampleHouse4,
				address: '684 W. Ketch Harbour Drive New Bern, NC 28560',
				cost: 1500,
				costInterval: 'Monthly',
			}
		],
		rent: [
			{
				date: Date.now() - 1000 * 60 * 60 * 24 * 4,
				value: 1000000,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 0,
				value: 2500,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 30,
				value: 3200,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 59,
				value: 1000,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 97,
				value: 1500,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 120,
				value: 500,
			},
			{
				date: Date.now() + 1000 * 60 * 60 * 24 * 364,
				value: 3000,
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

const FetchingContacts = async (id) => {
	await new Promise((resolve) => {setTimeout(resolve, 2000)});

	if (id === 'example') return [
		{
			id: 'abner-antonio-100',
			name: 'Abner Antonio',
			group: 'Buyers',
			profilePicture:  sampleContacts1,
			online: true,
		},
		{
			id: 'alex-fominikh-100',
			name: 'Alex Fominikh',
			group: 'Buyers',
			profilePicture: sampleContacts2,
			online: false,
		},
		{
			id: 'aubrey-zolotukhin-100',
			name: 'Andrey Zolotukhin',
			group: 'Buyers',
			profilePicture: sampleContacts3,
			online: false,
		},
		{
			id: 'bohdan-kononets-100',
			name: 'Bohdan Kononets',
			group: 'Buyers',
			profilePicture: sampleContacts4,
			online: true,
		},
		{
			id: 'elena-buzila-100',
			name: 'Elena Buzila',
			group: 'Renters',
			profilePicture: sampleContacts5,
		}
	]
};

export const FetchingMessages = async (id, contactId) => {
	await new Promise(function(resolve) {setTimeout(resolve, 2000)});

	if (id === 'example' && contactId === 'abner-antonio-100') return [
		{
			sender: 'example',
			text: 'Hi, how can I help you?',
			date: Date.now() - 1000 * 60 * 60 * 24 * 2,
		},
		{
			sender: 'abner-antonio-100',
			text: 'What\'s up? how much is the house im interested in making an appointment to see the house in person',
			date: Date.now() - 1000 * 60 * 60 * 24 * 1,
			attachments: [
				{
					url: sampleHouse5,
					caption: 'Property #1'
				}
			]
		},
		{
			sender: 'example',
			text: 'Sure we can set a time and date',
			date: Date.now() - 1000 * 60,
		},
		{
			sender: 'abner-antonio-100',
			text: 'Lorem ipsum',
			date: Date.now(),
		},
	]
}

export default Fetching;

export { FetchingContacts };