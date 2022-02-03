import {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Background from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';
import EditAvatar from '../../components/EditAvatar';
import Statistics from './components/statistics';
import FavoritedHomes from './components/favorited';
import MessageMenu from './components/messages'
import fetchData from './dataFetching'
import styles from './index.module.css';

import backgroundImage from './assets/background.svg';

function SettingButtons({text, notification = 0, color = '#0193fd', onClick, href}) {
	if (notification > 99) notification = '99+';
	const ButtonElement = href ? 'a' : 'button';

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
			<ButtonElement style={{background: color}} onClick={onClick} href={href}>
				{text}
			</ButtonElement>
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
				<EditAvatar parentObject={userData} setParentObject={setUserData} parentKey='picture'/>
				<a id={styles.upgrade} href='/plans'>Upgrade</a>
				<div id={styles.settings}>
					<SettingButtons text='Messages' notification={userData?.messages ?? 0} onClick={() => setMessageOpen(!messageOpen)}/>
					<SettingButtons text='My Cards' notification={userData?.cards?.length ?? 0}/>
					<SettingButtons text='Account Settings' href='/account/settings' />
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