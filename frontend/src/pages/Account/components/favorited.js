import styles from './favorited.module.css';
import {moneyFormat} from '../utils';

import houseBeds from '../assets/house-beds.svg';
import houseBaths from '../assets/house-baths.svg'
import houseSqfts from '../assets/house-sqfts.svg';

const HomeStatistics = function({text, icon, alt}) {
	return (
		<p>
			<img src={icon} alt={alt}/>
			{text}
		</p>
	)
}

function FavoritedHomes({homes}) {

	return (
		<div id={styles.favoritedHomes}>
			<div>
				{homes.map((home, index) => 
					<a className={styles.favoritedHome} key={index} href={'/buy/' + home.id}>
						<img src={home.image} alt={'home at ' + home.address}/>
						<p className={styles.homeAddress}>{home.address}</p>
						<p className={styles.homePrice}>{moneyFormat(home.price)}</p>
						{home.new && <p className={styles.newTag}>New</p>}
						<div className={styles.stats}>
							<HomeStatistics text={home.beds} icon={houseBeds} alt='Number of beds'/>
							<HomeStatistics text={home.baths} icon={houseBaths} alt='Number of baths'/>
							<HomeStatistics text={home.sqft} icon={houseSqfts} alt='Square footage'/>
						</div>
					</a>
				)}
			</div>
		</div>
	)
}

export default FavoritedHomes;