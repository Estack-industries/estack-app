import { dateFormat, moneyFormat } from '../../../../lib/utils';
import styles from './schedule.module.css';
import parentStyles from './index.module.css';

const SchedulePanel = ({userData}) => {
	const upcomingSchedules = userData.schedules?.filter((e) => e.date > Date.now());
	upcomingSchedules?.sort((a, b) => a.date - b.date)

	let daysSince = [0];

	const SchedulePost = ({index}) => {
		const schedule = upcomingSchedules[index];

		let daysSincePost = Math.floor(schedule.date / (1000 * 60 * 60 * 24));
		daysSince.push(daysSincePost);
		let newDay = daysSince[index - 1] !== daysSince[index];

		return (
			<>
				{newDay &&
					<p className={styles.date}>{dateFormat(schedule.date)}</p>
				}
				<div className={styles.box} key={index}>
					<p>{schedule.name}</p>
					{schedule.cost && 
						<p>Total: {moneyFormat(schedule.cost)}</p>
					}
				</div>
			</>
		)
	}

	return (
		<div className={parentStyles.box} style={{overflowY: 'clip'}}>
			<h4>Upcoming Schedule</h4>
			{upcomingSchedules?.length > 0 ?
				upcomingSchedules.map((schedule, index) => (
					<SchedulePost index={index} key={index}/>
				))
				:
				<p style={{textAlign: 'center'}}>No upcoming schedules</p>
			}
		</div>
	)
}

export default SchedulePanel