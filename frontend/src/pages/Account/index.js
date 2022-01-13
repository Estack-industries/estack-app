import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';
import Statistics from './components/statistics';
import FavoritedHomes from './components/favorited';
import fetchData from './dataFetching'
import './index.css';

import backgroundImage from './assets/background.svg';
import editPicture from './assets/edit-picture.svg';

function SettingButtons({text, notification, color = '#0193fd'}) {
	if (notification > 99) notification = '99+';

	return (
		<div>
			{notification !== 0 &&
				<div className='profile-settings-notification'>
					<svg viewBox='0 0 100 100'>
						<text x='51' y='68'	
							fontSize={50} fontWeight={500} textAnchor='middle'
							stroke='#ffffff' strokeWidth={6}
							fill='#f4a523'
						>	
							{notification}
						</text>
					</svg>
				</div>
			}	
			<button style={{background: color}}>
				{text}
			</button>
		</div>
	)
}

function UserPage() {
	const [userData, setUserData] = React.useState({});
	
	
	useEffect(function() {
		fetchData('example').then(function(data) {
			setUserData(data);
		});
	}, []);
	
	const changeProfilePicture = function(e) {
		const image = e.target.files[0];
		if (image) {
			const imageURL = URL.createObjectURL(image);
			setUserData({...userData, picture: imageURL});
		}	
	}
	
	return (
		<>
			<Background src={backgroundImage}/>
			<Navbar />
			<div className="full-width">
				<h1 id='nav-background-heading'>
					Dashboard
				</h1>
			</div>
			<div id='profile-picture-container'>
				{userData.picture &&
					<>
						<div id='edit-picture'>
							<input type='file' accept='image/*' onInput={changeProfilePicture}/>
							<img src={editPicture} alt='Edit appearance'/>
						</div>
						<img src={userData.picture} alt='Profile appearance'/>
					</>
				}
			</div>
			<button id='profile-upgrade-button'>Upgrade</button>
			<div id='profile-settings'>
				<SettingButtons text='Messages' notification={userData?.messages ?? 0}/>
				<SettingButtons text='My Cards' notification={userData?.cards?.length ?? 0}/>
				<SettingButtons text='Account Settings' notification={0}/>
				<SettingButtons text='Deleted' notification={0} color='#f4a523'/>
			</div>
			{userData &&
				<Statistics userData={userData}/>
			}
			{userData.favoritedHomes && userData.favoritedHomes.length > 0 &&
				<>
					<h2 className='profile-heading'>Your Favorited Homes</h2>
					<FavoritedHomes homes={userData.favoritedHomes}/>
				</>
			}
			<Footer/>
		</>
	)
}

export default UserPage;