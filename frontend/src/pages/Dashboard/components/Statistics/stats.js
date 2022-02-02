import { useEffect } from 'react';
import { moneyFormat } from '../../utils';
import styles from './stats.module.css';
import parentStyles from './index.module.css';

import addStatistics from '../../assets/add-statistics.svg';
import statCalendar from '../../assets/stat-icons/calendar.svg';
import statCoin from '../../assets/stat-icons/coin.svg';
import statDollar from '../../assets/stat-icons/dollar.svg';

const getOrdinalNumber = function (num) {
	const modNum = num % 100;
	if (modNum > 3 && modNum < 21) return num + 'th';
	switch (num % 10) {
		case 1:
			return num + 'st';
		case 2:
			return num + 'nd';
		case 3:
			return num + 'rd';
		default:
			return num + 'th';
	}
};

/**
 * From {@link https://gist.github.com/nicholaswmin/c2661eb11cad5671d816}
 **/
function calcSplinePoints(data, scalar = 1) {
	let alpha = 1;

	if (data.length <= 0) return false;
	else if (alpha === 0 || alpha === undefined) return false;
	let p0, p1, p2, p3, bp1, bp2, d1, d2, d3, A, B, N, M;
	let d3powA, d2powA, d3pow2A, d2pow2A, d1pow2A, d1powA;
	let d = 'M' + data[0].x * scalar + ',' + data[0].y;
	const length = data.length;
	for (let i = 0; i < length - 1; i++) {
		p0 = i === 0 ? data[0] : data[i - 1];
		p1 = data[i];
		p2 = data[i + 1];
		p3 = i + 2 < length ? data[i + 2] : p2;

		d1 = Math.sqrt(Math.pow(p0.x - p1.x, 2) + Math.pow(p0.y - p1.y, 2));
		d2 = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
		d3 = Math.sqrt(Math.pow(p2.x - p3.x, 2) + Math.pow(p2.y - p3.y, 2));

		d3powA = Math.pow(d3, alpha);
		d3pow2A = Math.pow(d3, 2 * alpha);
		d2powA = Math.pow(d2, alpha);
		d2pow2A = Math.pow(d2, 2 * alpha);
		d1powA = Math.pow(d1, alpha);
		d1pow2A = Math.pow(d1, 2 * alpha);

		A = 2 * d1pow2A + 3 * d1powA * d2powA + d2pow2A;
		B = 2 * d3pow2A + 3 * d3powA * d2powA + d2pow2A;
		N = 3 * d1powA * (d1powA + d2powA);
		if (N > 0) {
			N = 1 / N;
		}
		M = 3 * d3powA * (d3powA + d2powA);
		if (M > 0) {
			M = 1 / M;
		}

		bp1 = {
			x: (-d2pow2A * p0.x + A * p1.x + d1pow2A * p2.x) * N,
			y: (-d2pow2A * p0.y + A * p1.y + d1pow2A * p2.y) * N,
		};

		bp2 = {
			x: (d3pow2A * p1.x + B * p2.x - d2pow2A * p3.x) * M,
			y: (d3pow2A * p1.y + B * p2.y - d2pow2A * p3.y) * M,
		};

		if (bp1.x === 0 && bp1.y === 0) {
			bp1 = p1;
		}
		if (bp2.x === 0 && bp2.y === 0) {
			bp2 = p2;
		}

		d +=
			'C' +
			bp1.x * scalar +
			',' +
			bp1.y +
			' ' +
			bp2.x * scalar +
			',' +
			bp2.y +
			' ' +
			p2.x * scalar +
			',' +
			p2.y;
	}
	return d;
}

function RentGraph({ rent }) {
	const startTime = Date.now();

	useEffect(() => {
		const statGraphLine = document.getElementById('stat-graph-svg-line');
		const statGraphShadow = document.getElementById(
			'stat-graph-svg-shadow'
		);
		if (!statGraphLine) return;
		const statGraph = statGraphLine.parentElement;
		if (!statGraph) return;

		const onResize = function () {
			if (coordinates.length <= 0) return;
			const splinePoints = calcSplinePoints(
				coordinates,
				statGraph.clientWidth / statGraph.clientHeight
			);
			statGraphLine.setAttribute('d', splinePoints);
			statGraphShadow.setAttribute(
				'd',
				splinePoints +
					'V' +
					statGraph.clientHeight +
					'H' +
					coordinates[0].x +
					'Z'
			);
			statGraph.setAttribute(
				'viewBox',
				'0 0 ' + statGraph.clientWidth + ' ' + statGraph.clientHeight
			);
		};

		onResize();
		window.addEventListener('resize', onResize);

		return function () {
			window.removeEventListener('resize', onResize);
		};
	});

	if (rent === undefined) return <></>;

	rent = rent.filter((e) => {
		return (
			e.date > startTime - 1000 * 60 * 60 * 24 ||
			e.date < 1000 * 60 * 60 * 24 * 365
		);
	});
	rent.sort((a, b) => {
		return a.date - b.date;
	});

	const maxRent = Number(
		Math.max(...rent.map((e) => e.amount)).toPrecision(3)
	);
	const maxDate = Math.max(...rent.map((e) => e.date));

	const coordinates = rent.map(function (e) {
		return {
			x: (100 * (e.date - startTime)) / (maxDate - startTime),
			y: 300,
		};
	});

	let renderedCost = [];
	for (let j = 0; j <= 300; j+=100) {
		renderedCost.push(j);
	}
	let renderedDays = [];
	const DAYS = [
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat',
		'Sun',
	];
	for (let i = 0; i < 7; i++) {
		renderedDays.push(
			DAYS[i]
		);
	}

	if (coordinates.length <= 0) return <></>;
	return (
		<div id={styles.graph}>
			<div>
				{renderedCost.map((ele, i) => (
					<p key={i} style={{ top: i * -30 + 90 + '%' }}>
						{ele}
					</p>
				))}
			</div>
			{renderedDays.map((ele, i) => (
				<p style={{ left: 13 + i * 13 + '%', top: '90%' }} key={i}>
					{ele}
				</p>
			))}
			<svg viewBox="0 0 100 100" width="100%" height="100%">
				<defs>
					<linearGradient
						id="grad1"
						x1="0%"
						y1="10%"
						x2="0%"
						y2="100%"
					>
						<stop
							offset="0%"
							style={{ stopColor: '#f5f0ff', stopOpacity: 1 }}
						/>
						<stop
							offset="100%"
							style={{ stopColor: '#ffffff', stopOpacity: 0 }}
						/>
					</linearGradient>
				</defs>
				<path
					id={'stat-graph-svg-line'}
					stroke="#0193fd"
					strokeWidth={1}
					fill="transparent"
					d=""
				/>
				<path id={'stat-graph-svg-shadow'} fill="url(#grad1)" d="" />
			</svg>
		</div>
	);
}

function PinnedAddresses({ pinnedAddress }) {
	if (pinnedAddress === undefined) pinnedAddress = {};
	return (
		<div
			className={parentStyles.box}
			style={{ display: 'flex', gap: '0.5em', padding: '0.1em 0.5em' }}
		>
			<div className={styles.pinnedImageContainer}>
				{pinnedAddress.image && (
					<img src={pinnedAddress.image} alt="Pinned Address 1" />
				)}
			</div>
			<div className={styles.pinnedText}>
				<p className={styles.pinnedTextUpper}>
					{pinnedAddress.address ?? 'Address'}
				</p>
				<div className={styles.pinnedTextLower}>
					<p>{moneyFormat(pinnedAddress.cost) || 'Rent Due'}</p>
				</div>
			</div>
		</div>
	);
}

function StatsPanel({ userData }) {
	const StatsSelect = () => {
		let maxStatAmount = 0;
		if (userData && userData.stats)
			maxStatAmount = Math.max(...userData.stats.map((e) => e.amount));

		const Stat = ({ statData }) => {
			if (statData === undefined)
				return (
					<div style={{ display: 'flex', gap: '0.8em' }}>
						<img
							className={styles.addStat}
							src={addStatistics}
							alt="Add Statistics"
						/>
						<p>Add</p>
					</div>
				);

			const IMAGES = [statCoin, statCalendar];
			const STAT_NAME_TO_IMAGE = [
				['Total Investment'],
				['Weekly Returns'],
			];

			const statIndex = STAT_NAME_TO_IMAGE.findIndex((e) =>
				e.includes(statData.name)
			);

			return (
				<div style={{ display: 'flex', gap: '0.8em' }}>
					<div
						className={styles.statVectorContainer}
						style={{
							backgroundColor: statData.color,
							boxShadow: '2px 4px 16px' + statData.color + '60',
						}}
					>
						<img
							src={IMAGES[statIndex] ?? statDollar}
							alt="Statistic"
						/>
					</div>
					<div>
						<p style={{ fontSize: '0.9em' }}>{statData.name}</p>
						<p style={{ color: statData.color }}>
							{moneyFormat(statData.amount)}
						</p>
					</div>
				</div>
			);
		};

		const statGraphSmall = [25, 87.5, 150, 212.5, 275];
		const statGraphLarge = [32.5, 65, 97.5];

		return (
			<div id={styles.statsContainer}>
				<div id={styles.statsSelectContainer}>
					<Stat statData={userData.stats?.[0]} />
					<Stat statData={userData.stats?.[1]} />
					<Stat statData={userData.stats?.[2]} />
				</div>
				<div>
					<svg
						viewBox="0 0 180 300"
						width="9em"
						height="10em"
						id={styles.statGraph}
					>
						{statGraphSmall.map((e, i) => (
							<line
								key={i}
								y1={e}
								y2={e}
								x1={0}
								x2={130}
								strokeWidth={1.5}
								stroke={'#f5f5f5'}
							/>
						))}
						{statGraphLarge.map((e, i) => (
							<line
								key={i}
								y1={30}
								y2={270}
								x1={e}
								x2={e}
								strokeWidth={10}
								stroke={'#f5f5f5'}
							/>
						))}
						<text y={25} x={140} alignmentBaseline="middle">
							Max
						</text>
						<text y={275} x={140} alignmentBaseline="middle">
							Min
						</text>
						{userData.stats?.map((stat, i) => {
							const y =
								(1 - stat.amount / maxStatAmount) * 240 + 30;
							const x = i * 32.5 + 32.5;
							return (
								<line
									key={i}
									y1={y}
									y2={270}
									x1={x}
									x2={x}
									strokeWidth={10}
									stroke={stat.color}
								/>
							);
						})}
					</svg>
				</div>
			</div>
		);
	};

	return (
		<div id={styles.container}>
			<div>
				<h6>Investment Stats</h6>
			</div>
			<div className={parentStyles.box} style={{ height: '50%' }}>
				<StatsSelect />
			</div>
			<div>
				<h6>My Portfolio</h6>
			</div>
			<div
				className={styles.twoPanel + ' ' + styles.pinnedAddress}
				style={{ height: '15%' }}
			>
				<PinnedAddresses
					pinnedAddress={userData.pinnedAddresses?.[0]}
				/>
				<PinnedAddresses
					pinnedAddress={userData.pinnedAddresses?.[1]}
				/><PinnedAddresses
				pinnedAddress={userData.pinnedAddresses?.[1]}
			/>
			</div>

			<div className={parentStyles.box} style={{ height: '35%' }}>
				<h4 style={{ marginBottom: 0 }}>Total Views of Property</h4>
				<RentGraph rent={userData.rent} />
			</div>
			<div className={parentStyles.box} style={{ height: '35%' }}>
				<h4 style={{ marginBottom: 0 }}>Costs in the Market</h4>
				<RentGraph rent={userData.rent} />
			</div>
		</div>
	);
}

export default StatsPanel;
