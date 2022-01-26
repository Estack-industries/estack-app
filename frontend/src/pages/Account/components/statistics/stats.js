import { moneyFormat } from '../../utils';
import styles from './stats.module.css';
import parentStyles from './index.module.css'
import HistoryGraph from '../../../../components/Dashboard/historyGraph';

import addStatistics from '../../assets/add-statistics.svg';
import statCalendar from '../../assets/stat-icons/calendar.svg';
import statCoin from '../../assets/stat-icons/coin.svg';
import statDollar from '../../assets/stat-icons/dollar.svg';

function PinnedAddresses({pinnedAddress}) {
	if (pinnedAddress === undefined) pinnedAddress = {};	
	return (
		<div className={parentStyles.box} style={{display: 'flex', gap: '0.5em', padding: '0.1em 0.5em'}}>
			<div className={styles.pinnedImageContainer}>
				{pinnedAddress.image && <img src={pinnedAddress.image} alt='Pinned Address 1'/>}
			</div>
			<div className={styles.pinnedText}>
				<p className={styles.pinnedTextUpper}>{pinnedAddress.address ?? 'Address'}</p>
				<div className={styles.pinnedTextLower}>
					<p>{moneyFormat(pinnedAddress.cost) || 'Rent Due'}</p>
					<p>{pinnedAddress.costInterval ?? 'Interval'}</p>
				</div>
			</div>
		</div>
	)
}

function StatsPanel({userData}) {

	const StatsSelect = () => {

		let maxStatAmount = 0;
		if (userData && userData.stats) maxStatAmount = Math.max(...userData.stats.map(e => e.amount))

		const Stat = ({statData}) => {
			if (statData === undefined) return (
				<div style={{display: 'flex', gap: '0.8em'}}>
					<img className={styles.addStat} src={addStatistics} alt='Add Statistics'/>
					<p>Add</p>
				</div>
			)
			
			const IMAGES = [statCalendar, statCoin];
			const STAT_NAME_TO_IMAGE = [['Total Expenses'], ['Weekly Income']]

			const statIndex = STAT_NAME_TO_IMAGE.findIndex((e) => e.includes(statData.name))

			return (
				<div style={{display: 'flex', gap: '0.8em'}}>
					<div className={styles.statVectorContainer} style={{backgroundColor: statData.color, boxShadow: '2px 4px 16px' + statData.color + '60'}}>
						<img src={IMAGES[statIndex] ?? statDollar} alt='Statistic'/>
					</div>
					<div>
						<p style={{fontSize: '0.9em'}}>{statData.name}</p>
						<p  style={{color: statData.color}}>{moneyFormat(statData.amount)}</p>
					</div>
				</div>
			)
		}

		const statGraphSmall = [25, 87.5, 150, 212.5, 275];
		const statGraphLarge = [32.5, 65, 97.5];

		return (
			<div id={styles.statsContainer}>
				<div id={styles.statsSelectContainer}>
					<Stat statData={userData.stats?.[0]}/>
					<Stat statData={userData.stats?.[1]}/>
					<Stat statData={userData.stats?.[2]}/>
				</div>
				<div>
					<svg viewBox='0 0 180 300' width='9em' height='10em' id={styles.statGraph}>
						{statGraphSmall.map((e, i) => (
							<line key={i} y1={e} y2={e} x1={0} x2={130} strokeWidth={1.5} stroke={'#f5f5f5'}/>
						))}
						{statGraphLarge.map((e, i) => (
							<line key={i} y1={30} y2={270} x1={e} x2={e} strokeWidth={10} stroke={'#f5f5f5'}/>
						))}
						<text y={25} x={140} alignmentBaseline='middle'>Max</text>
						<text y={275} x={140} alignmentBaseline='middle'>Min</text>
						{userData.stats?.map((stat, i) => {
							const y = (1 - (stat.amount / maxStatAmount)) * 240 + 30
							const x = i * 32.5 + 32.5
							return (
								<line key={i} y1={y} y2={270} x1={x} x2={x} strokeWidth={10} stroke={stat.color}/>
							)
						})}
					</svg>
				</div>
			</div>
		)
	}

	return (
		<div id={styles.container}>
			<div className={styles.twoPanel + ' ' + styles.pinnedAddress} style={{height: '15%'}}>
				<PinnedAddresses pinnedAddress={userData.pinnedAddresses?.[0]}/>
				<PinnedAddresses pinnedAddress={userData.pinnedAddresses?.[1]}/>
			</div>
			<div className={parentStyles.box} style={{height: '35%'}}>
				<h4 style={{marginBottom: 0}}>Monthly Rent</h4>
				<HistoryGraph coordinates={userData.rent}/>
			</div>
			<div className={parentStyles.box} style={{height: '50%'}}>
				<h4>Stats</h4>
				<StatsSelect/>
			</div>
		</div>
	)
}

export default StatsPanel;