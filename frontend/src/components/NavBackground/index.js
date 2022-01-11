import { useEffect, useState } from 'react';

import './index.css'

function DrawAboutVector1 (ctx) {
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

function DrawAboutVector2 (ctx) {
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

function DrawAboutVector3 (ctx) {
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

function compareSrcArray(cacheSrcArray, currentSrcArray) {
	const properties = ['src', 'left', 'bottom', 'width', 'height'];
	if (cacheSrcArray.length === 0) return false;
	return cacheSrcArray.every((cacheSrc, i) => {
		return currentSrcArray.some((currentSrc, j) => {
			return properties.every(property => {
				return cacheSrc[property] === currentSrc[property];
			})
		})
	})
}

function drawBackground(srcArray) {
	const canvas = document.getElementById('background-canvas');
	if (canvas === null) return;

	canvas.width = 1440;
	canvas.height = 718;
	const ctx = canvas.getContext('2d');

	
	DrawAboutVector3(ctx);
	DrawAboutVector2(ctx);
	DrawAboutVector1(ctx);

	for (let i = 0; i < srcArray.length; i++) {
		const src = srcArray[i];
		if (src === undefined || src === null) continue;

		const left = 14.4 * (src.left ?? 0);
		const bottom = 71.8 * (src.bottom ?? 0);
		const width = 14.4 * (src.width ?? 100);
		let height = src.height === undefined ? undefined : 71.8 * src.height;

		
		const image = new Image();
		image.src = src.src;
		image.onload = function() {
			const ratio = image.height / image.width;
			height = height ?? (ratio * width)
			ctx.clip();
			ctx.drawImage(image, left, 718 - height - bottom, width, height ?? (ratio * width));
		}
	}
	
	const resizeBy = document.body.clientWidth / 1440;
	const moveByX = (1440 - document.body.clientWidth) / -2;
	const moveByY = (718 - resizeBy * 718) / -2;
	canvas.style.transform = 'translate(' + moveByX + 'px, ' + moveByY + 'px) scale(' + resizeBy + ')';
}

function Background({src}) {

	const [cacheSrc, setCacheSrc] = useState([]);
	
	useEffect(() => {
		const currentSrc = Array.isArray(src) ? src : [{src}];

		if (compareSrcArray(cacheSrc, currentSrc)) return;
		else setCacheSrc(currentSrc);
		const canvas = document.getElementById('background-canvas');
		if (canvas === null) return;

		window.addEventListener('resize', () => {
			const resizeBy = document.body.clientWidth / 1440;
			const moveByX = (1440 - document.body.clientWidth) / -2;
			const moveByY = (718 - resizeBy * 718) / -2;
			canvas.style.transform = 'translate(' + moveByX + 'px, ' + moveByY + 'px) scale(' + resizeBy + ')';
		});
		
		drawBackground(currentSrc);
	}, [src, cacheSrc]);

	return (
		<canvas id='background-canvas'/>
	);
}

export default Background;