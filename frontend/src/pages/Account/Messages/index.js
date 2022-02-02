import {useState, useEffect} from 'react';
import fetchData from '../dataFetching';
import EditAvatar from '../../../components/EditAvatar';
import MessageMenu from '../components/messages';
import Navbar from '../../../components/Navbar/Navbar';
import Background from '../../../components/NavBackground';
import Footer from '../../../components/Footer/Footer';
import styles from '../index.module.css';

import backgroundImage from '../assets/message-page-background.png';

const MessagePage = () => {

	const [userData, setUserData] = useState({});
	
	useEffect(function() {
		fetchData('example').then(function(data) {
			setUserData(data);
		});
	}, []);

	return (
		<>
			<Background src={[{src: backgroundImage, left: 70, width: 40, bottom: 50}]} />
			<Navbar />
			<main style={{marginBottom: '3em'}}>
				<div style={{width: '100%'}}>
					<h1 className={styles.heading}>
						Dashboard
					</h1>
				</div>
				<EditAvatar parentObject={userData} setParentObject={setUserData} parentKey='picture' />
				<a id={styles.upgrade} href='/plans'>Upgrade</a>
				<MessageMenu userData={userData} style={{}}/>
			</main>
			<Footer/>
		</>
	)
};

export default MessagePage