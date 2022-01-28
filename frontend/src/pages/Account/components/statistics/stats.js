import styles from './stats.module.css';
import parentStyles from './index.module.css'
import HistoryGraph from '../../../../components/Dashboard/historyGraph';
import PinnedAddress from '../../../../components/Dashboard/pinnedAddress';
import StatsSelect from '../../../../components/Dashboard/statistics';

function StatsPanel({userData}) {

	return (
		<div id={styles.container}>
			<div className={styles.twoPanel + ' ' + styles.pinnedAddress} style={{height: '15%'}}>
				<PinnedAddress address={userData.pinnedAddresses?.[0]}/>
				<PinnedAddress address={userData.pinnedAddresses?.[1]}/>
			</div>
			<div className={parentStyles.box} style={{height: '35%'}}>
				<h4 style={{marginBottom: 0}}>Monthly Rent</h4>
				<HistoryGraph coordinates={userData.rent}/>
			</div>
			<div className={parentStyles.box} style={{height: '50%'}}>
				<h4>Stats</h4>
				<StatsSelect stats={userData.stats}/>
			</div>
		</div>
	)
}

export default StatsPanel;