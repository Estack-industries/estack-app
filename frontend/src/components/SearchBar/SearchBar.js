import React from 'react';
import { MdSearch } from 'react-icons/md';
import './SearchBar.css';

function SearchBar() {
	return (
		<div className="searchbar-wrapper">
			<input
				className="searchbar-input"
				type="text"
				placeholder="Search bar"
			/>
			<button className="searchbar-button" type="submit">
				<MdSearch size={30} />
			</button>
		</div>
	);
}

export default SearchBar;
