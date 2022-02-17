import React from 'react';
import { moneyFormat } from '../../utils';
import sellerHouse from '../../assets/seller/sellerHouse.png';
import Data from '../../exampleData.json';
import styles from './stats.module.css';
import parentStyles from './index.module.css';
import addStatistics from '../../assets/add-statistics.svg';

function OwnedHomes() {
	return (
		<>
			{Data.Homes.map((post) => (
				<div
					className={parentStyles.box}
					style={{margin: '0.7em 0em'}}
				>
					<div className="row" style={{justifyContent: 'space-between'}}>
						<div className="col">
							<h6 className="card-title">{post.address}</h6>
							<span className="h6" style={{fontWeight: 'bold'}}>{post.cost}</span>
						</div>
						<img src={post.icon} alt="icon" style={{flexGrow: '1', maxWidth: '35%'}}/>
					</div>
				</div>
			))}
		</>
	);
}

function RealEstate() {
	return (
		<div className={styles.box}>
			<h6>Real Estate</h6>
			<div>
				<div
					id={styles.cardContainer}
					style={{
						position: 'relative',
						width: 'min(66%, 16em)',
						margin: '0em auto',
					}}
				>
					<div id={styles.mainCard}>
						<div id="cardInfo">
							<img src={sellerHouse} />
						</div>
					</div>
				</div>
			</div>
			<div className="small-space" />
			<h6>Homes Owned</h6>
			<div>
				<OwnedHomes />
			</div>
      
		</div>
	);
}

export default RealEstate;
