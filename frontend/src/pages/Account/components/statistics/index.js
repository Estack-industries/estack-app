import styles from './index.module.css';
import CardsPanel from '../../../../components/Dashboard/cards/cards';
import SchedulePanel from './schedule';
import StatsPanel from './stats';

import calendar from '../../assets/calendar.svg';
import home from '../../assets/home.svg';


function Statistics({userData}) {

	return (
		<div id={styles.container}>
			<div id={styles.topbar}>
				<img src={calendar} alt='Calendar'/>
				<img src={home} alt='Home'/>
				<div className={styles.profilePicture}>
					{userData.picture && <img src={userData.picture} alt='Profile appearance'/>}
				</div>
			</div>
			<div id={styles.main}>
				<div className={styles.panel}>
					<SchedulePanel userData={userData}/>
				</div>
				<div className={styles.panel} style={{width: '90%'}}>
					<StatsPanel userData={userData}/>
				</div>
				<div className={styles.panel}>
					<CardsPanel cards={userData.cards}/>
				</div>
			</div>
		</div>
	)
}

export default Statistics;