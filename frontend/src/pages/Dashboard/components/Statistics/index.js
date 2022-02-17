import styles from './index.module.css';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardsPanel from '../../../../components/Dashboard/cards/cards';
import StatsPanel from './stats';
import RealEstate from './realestate';
import Profile from '../../assets/seller/profile.png';

function Statistics({userData}) {
	return (
		<div id={styles.container}>
			<div id={styles.topbar}>
				<FontAwesomeIcon icon={faBell} />
				<div className={styles.profilePicture}>
					<img src={Profile} alt="Profile" />
				</div>
        <p className={styles.name}>{userData.name}</p>
			</div>
			<div id={styles.main}>
				<div className={styles.panel}>
          <RealEstate />
        </div>
				<div className={styles.panel} style={{ width: '90%' }}>
					<StatsPanel userData={userData}/>
				</div>
				<div className={styles.panel}>
					<CardsPanel cards={userData.cards} />
				</div>
			</div>
		</div>
	);
}

export default Statistics;
