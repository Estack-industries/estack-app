import {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';
import Statistics from './components/statistics';
import FavoritedHomes from './components/favorited';
import MessageMenu from './components/messages'
import fetchData from './dataFetching'
import styles from './index.module.css';

import backgroundImage from './assets/background.svg';
import editPicture from './assets/edit-picture.svg';

function SettingButtons({text, notification = 0, color = '#0193fd', onClick}) {
	if (notification > 99) notification = '99+';

	return (
		<div>
			{notification !== 0 &&
				<div className={styles.settingsNotification}>
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
			<button style={{background: color}} onClick={onClick}>
				{text}
			</button>
		</div>
	)
}

function UserPage() {
	const [userData, setUserData] = useState({});
	const [messageOpen, setMessageOpen] = useState(false);
	
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
			<main>
				<div style={{width: '100%'}}>
					<h1 className={styles.heading}>
						Dashboard
					</h1>
				</div>
				<div id={styles.pictureContainer}>
					{userData.picture &&
						<>
							<div id={styles.editPicture}>
								<input type='file' accept='image/*' onInput={changeProfilePicture}/>
								<img src={editPicture} alt='Edit appearance'/>
							</div>
							<img src={userData.picture} alt='Profile appearance'/>
						</>
					}
				</div>
				<button id={styles.upgrade}>Upgrade</button>
				<div id={styles.settings}>
					<SettingButtons text='Messages' notification={userData?.messages ?? 0} onClick={() => setMessageOpen(!messageOpen)}/>
					<SettingButtons text='My Cards' notification={userData?.cards?.length ?? 0}/>
					<SettingButtons text='Account Settings'/>
					<SettingButtons text='Deleted' color='#f4a523'/>
				</div>
				{messageOpen &&
					<MessageMenu userData={userData}/>
				}
				{userData &&
					<Statistics userData={userData}/>
				}
				{userData.favoritedHomes && userData.favoritedHomes.length > 0 &&
					<>
						<h2 className={styles.heading}>Your Favorited Homes</h2>
						<FavoritedHomes homes={userData.favoritedHomes}/>
					</>
				}
			</main>
			<Footer/>
		</>
	)
}

export default UserPage;