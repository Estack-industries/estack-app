import React from 'react';

import './Container.css';

const CONTAINER_COLUMN = 'container--column';
const CONTAINER_ROW = 'container--row';
const CONTAINER_NO_PADDING_BOTTOM = 'container--nopb';

const DIRECTIONS = [CONTAINER_COLUMN, CONTAINER_ROW];

export const Container = ({ children, d: direction, pb: paddingBottom }) => {
	const containerDirection = DIRECTIONS.includes(direction)
		? direction
		: CONTAINER_COLUMN;
	const containerPaddingBottom =
		CONTAINER_NO_PADDING_BOTTOM === paddingBottom ? paddingBottom : '';

	return (
		<div
			className={`container-wrapper ${containerDirection} ${containerPaddingBottom}`}
		>
			{children}
		</div>
	);
};
