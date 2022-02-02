import styles from './favorited.module.css';
import PropertySummary from '../../../components/PropertySummary'

function FavoritedHomes({homes}) {

	return (
		<div id={styles.favoritedHomes}>
			<div>
				{homes.map((home, index) => 
					<PropertySummary homeData={home} key={index}/>
				)}
			</div>
		</div>
	)
}

export default FavoritedHomes;