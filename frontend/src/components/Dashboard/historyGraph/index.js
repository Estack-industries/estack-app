import { useEffect } from 'react';
import styles from './index.module.css'

const getOrdinalNumber = function(num) {
	const modNum = num % 100;
  if (modNum > 3 && modNum < 21) return num + 'th';
  switch (num % 10) {
    case 1: return num + 'st';
    case 2: return num + 'nd';
    case 3: return num + 'rd';
    default: return num + 'th';
  }
}

/**
 * From {@link https://gist.github.com/nicholaswmin/c2661eb11cad5671d816}
 **/
function calcSplinePoints(data, scalar = 1) {
	let alpha = 1;

	if (data.length <= 0) return false;
	else if (alpha === 0 || alpha === undefined) return false;
	let d = 'M' + data[0].x * scalar + ',' + data[0].y;
	const length = data.length;
	for (let i = 0; i < length - 1; i++) {
		const middleX = (data[i].x + data[i + 1].x) / 2;
		const cpOne = { x: middleX, y: data[i].y };
		const cpTwo = { x: middleX, y: data[i + 1].y };

		d += 'C' + cpOne.x * scalar + ',' + cpOne.y + ' ' + cpTwo.x * scalar + ',' + cpTwo.y + ' ' + data[i + 1].x * scalar + ',' + data[i + 1].y;
	}
	return d;
}

/**
 * A graph that displays the change of values over time. Only includes Dates starting from now to next year.
 * @param {object} props Properties for the graph.
 * @param {object[]} props.coordinates Array of objects with value and date properties.
 * @param {number} props.coordinates[].value Value of the data point.
 * @param {Date} props.coordinates[].date Date of the data point.
 * @returns {JSX.Element} An HTML element that displays a graph.
 */
function HistoryGraph({ coordinates }) {
	const startTime = Date.now();
	
	useEffect(() => {
		const statGraphLine = document.getElementById('stat-graph-svg-line');
		const statGraphShadow = document.getElementById('stat-graph-svg-shadow');
		if (!statGraphLine) return;
		const statGraph = statGraphLine.parentElement;
		if (!statGraph) return;

		const onResize = function() {
			if (coordinatesFinal.length <= 0) return;
			const splinePoints = calcSplinePoints(coordinatesFinal, statGraph.clientWidth / statGraph.clientHeight);
			statGraphLine.setAttribute('d', splinePoints);
			statGraphShadow.setAttribute('d', splinePoints + 'V' + statGraph.clientHeight +'H' + coordinatesFinal[0].x + 'Z');
			statGraph.setAttribute('viewBox', '0 0 ' + statGraph.clientWidth + ' ' + statGraph.clientHeight);
		}

		onResize();
		window.addEventListener('resize', onResize)

		return function () {
			window.removeEventListener('resize', onResize)
		}
	})
	
	if (coordinates === undefined) return <></>;

	coordinates = coordinates.filter((e) => {
		return e.date > (startTime - 1000 * 60 * 60 * 24) || e.date < 1000 * 60 * 60 * 24 * 365;
	});
	coordinates.sort((a, b) => {
		return a.date - b.date
	})

	const maxValue = Number(Math.max(...coordinates.map(e => e.value)).toPrecision(3));
	const maxDate = Math.max(...coordinates.map(e => e.date));

	const coordinatesFinal = coordinates.map(function(e) {
		return {
			x: 100 * (e.date - startTime) / (maxDate - startTime),
			y: 105 - 100 * e.value / maxValue,
		};
	})

	let renderedMonths = [];
	const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	for (let i = 0; i < 7; i++) {
		const intervalDate = new Date(startTime * (i / 6) + maxDate * (1 - (i / 6)));
		renderedMonths.push(
			MONTHS_SHORT[intervalDate.getMonth()] + ' ' + getOrdinalNumber(intervalDate.getDate())
		);
	}
	
	if (coordinates.length <= 0) return <></>;
	return (
		<div id={styles.graph}>
			<div>
				{[0, maxValue / 3, maxValue * 2 / 3, maxValue].map((ele, i) => (
					<p key={i} style={{top: (i * -30) + 85 + '%'}}>{ele}</p>
				))}
			</div>
			{renderedMonths.map((ele, i)  => (
				<p style={{left: (13 + i * 13) + '%', top: '85%'}} key={i}>{ele}</p>
			))}
			<svg viewBox='0 0 100 100' width='100%' height='100%'>
				<defs>
					<linearGradient id="grad1" x1="0%" y1="10%" x2="0%" y2="100%">
						<stop offset="0%" style={{stopColor: '#f5f0ff', stopOpacity: 1}} />
						<stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
					</linearGradient>
				</defs>
				<path id='stat-graph-svg-line'
					stroke='#0193fd' strokeWidth={1}
					fill='transparent' d=''
				/>
				<path id='stat-graph-svg-shadow'
					fill='url(#grad1)' d=''
				/>
			</svg>
		</div>
	)
}

export default HistoryGraph;