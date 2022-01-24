import React from 'react';
import './Topbar.css';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from './profile.png';

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper w3-container w3-border-bottom w3-border-black">
				<div className="topLeft">
					<h1 className="logo">Dashboard</h1>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<FontAwesomeIcon icon={faBell} />
					</div>
					<div className="topbarIconContainer">
          <img src={Profile} alt="" className="topAvatar" />
					</div>
					<div className="topbarIconContainer">
						<p className="name"> Rowena Ravenclaw </p>
					</div>
				</div>
			</div>
		</div>
	);
}
