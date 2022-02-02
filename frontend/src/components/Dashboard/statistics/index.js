import { moneyFormat } from '../../../pages/Account/utils';
import styles from './index.module.css';

import statCalendar from './stat-icons/calendar.svg';
import statCoin from './stat-icons/coin.svg';
import statDollar from './stat-icons/dollar.svg';
import addStatistics from './add-statistics.svg';

/**
 * A panel where users can pin statistics that they want to see on their dashboard.
 * @param {object} props
 * @param {object[]} props.stats An object of statistics.
 * @param {string} props.stats.name The name of the statistic.
 * @param {string} props.stats.amount Relevant number of the statistic. Example, expenses might be 200 a month.
 * @param {string} props.stats.color The color of the statistic.
 * @returns {JSX.Element} A panel that lets you select statistics and visualize them with a bar graph.
 */
const StatsSelect = ({stats = []}) => {

	let maxStatAmount = 0;
	maxStatAmount = Math.max(...stats.map(e => e.amount))

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
				<Stat statData={stats?.[0]}/>
				<Stat statData={stats?.[1]}/>
				<Stat statData={stats?.[2]}/>
			</div>
			<div>
				<svg viewBox='0 0 180 300' width='9em' height='10em' id={styles.statGraph}>
					{statGraphSmall.map((e, i) => (
						<line key={i} y1={e} y2={e} x1={0} x2={130} strokeWidth={1.5} stroke='#f5f5f5'/>
					))}
					{statGraphLarge.map((e, i) => (
						<line key={i} y1={30} y2={270} x1={e} x2={e} strokeWidth={10} stroke='#f5f5f5'/>
					))}
					<text y={25} x={140} alignmentBaseline='middle'>Max</text>
					<text y={275} x={140} alignmentBaseline='middle'>Min</text>
					{stats?.map((stat, i) => {
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

export default StatsSelect;