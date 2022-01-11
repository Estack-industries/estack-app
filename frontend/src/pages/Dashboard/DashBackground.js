import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './dbackground.css';

import HouseImage from './assets/houses.png';
import Handshake from './assets/handshake.png';

function DrawAboutVector1(ctx) {
	const gradient = ctx.createLinearGradient(0, 520, 1440, 0);
	gradient.addColorStop(0, '#3F51F4');
	gradient.addColorStop(1, '#0193FD');

	ctx.fillStyle = gradient;

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(1440, 0);
	ctx.lineTo(1440, 177);
	ctx.bezierCurveTo(1445, 257, 1262, 482, 1053, 463);
	ctx.bezierCurveTo(844, 443, 921, 775, 702, 656);
	ctx.bezierCurveTo(484, 537, 457, 635, 269, 656);
	ctx.bezierCurveTo(119, 673, 30, 572, 0, 520);
	ctx.closePath();

	ctx.fill();
}

function DrawAboutVector2(ctx) {
	ctx.fillStyle = '#98D4FF';

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(1351, 0);
	ctx.lineTo(1351, 201);
	ctx.bezierCurveTo(1351, 281, 1179, 506, 983, 487);
	ctx.bezierCurveTo(787, 467, 859, 799, 654, 680);
	ctx.bezierCurveTo(449, 561, 424, 659, 248, 680);
	ctx.bezierCurveTo(107, 697, 23, 596, 0, 544);
	ctx.closePath();
	ctx.fill();
}

function DrawAboutVector3(ctx) {
	ctx.fillStyle = '#CBE9FF';

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(1440, 0);
	ctx.lineTo(1440, 212);
	ctx.bezierCurveTo(1440, 292, 1257, 517, 1048, 498);
	ctx.bezierCurveTo(839, 478, 916, 810, 697, 691);
	ctx.bezierCurveTo(470, 572, 452, 670, 264, 691);
	ctx.bezierCurveTo(114, 708, 25, 607, 0, 555);
	ctx.closePath();

	ctx.fill();
}

function drawBackground(src) {
	const canvas = document.getElementById('background-canvas');
	if (canvas === null) return;

	canvas.width = 1440;
	canvas.height = 718;
	const ctx = canvas.getContext('2d');

	DrawAboutVector3(ctx);
	DrawAboutVector2(ctx);
	DrawAboutVector1(ctx);

	if (src !== undefined) {
		const image = new Image(1027, 620);
		image.src = src;
		image.onload = function () {
			ctx.clip();
			ctx.drawImage(image, 0, 70, 600, 520);
		};
	}

	const image2 = new Image(1027, 620);
	image2.src = './assets/houses.png';
	image2.onload = function () {
		ctx.clip();
		ctx.drawImage(image2, 100, 70, 600, 520);
	};

	const image3 = new Image(1027, 620);
	image3.src = './assets/handshake.png';
	image3.onload = function () {
		ctx.clip();
		ctx.drawImage(image3, 800, 70, 600, 520);
	};

	const resizeBy = document.body.clientWidth / 1440;
	const moveByX = (1440 - document.body.clientWidth) / -2;
	const moveByY = (718 - resizeBy * 718) / -2;
	canvas.style.transform =
		'translate(' +
		moveByX +
		'px, ' +
		moveByY +
		'px) scale(' +
		resizeBy +
		')';
}

function DashBackground(props) {
	useEffect(() => {
		const canvas = document.getElementById('background-canvas');
		if (canvas === null) return;

		window.addEventListener('resize', () => {
			const resizeBy = document.body.clientWidth / 1440;
			const moveByX = (1440 - document.body.clientWidth) / -2;
			const moveByY = (718 - resizeBy * 718) / -2;
			canvas.style.transform =
				'translate(' +
				moveByX +
				'px, ' +
				moveByY +
				'px) scale(' +
				resizeBy +
				')';
		});

		drawBackground(props.src);
	});

	return (
		<div>
			<Navbar />
			<h1 className="pageHeader">Pick a <span className="detail">Dashboard</span></h1>
			<canvas id="background-canvas" />
		</div>
		
	);
}

export default DashBackground;
