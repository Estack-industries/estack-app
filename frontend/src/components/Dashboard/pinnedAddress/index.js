import styles from './index.module.css'
import { moneyFormat } from '../../../pages/Account/utils';

/**
 * A panel where users can pin addresses to their account.
 * @param {object} props
 * @param {object} props.address An address object of information about the house.
 * @param {string} props.address.address The address of the house.
 * @param {string} props.address.image An image of the house.
 * @param {string} props.address.cost The cost of the next rental payment of the house.
 * @param {string} props.address.costInterval The next payment interval.
 * @param {string} props.containerStyle CSS classname for the container, defaults to have a border and box shadow.
 * @returns {JSX.Element} A small panel that displays a few quick facts about the house.
 */
function PinnedAddresses({address, containerStyle=styles.box}) {
	if (address === undefined) address = {};	
	return (
		<div className={containerStyle} style={{display: 'flex', gap: '0.5em', padding: '0.1em 0.5em'}}>
			<div className={styles.pinnedImageContainer}>
				{address.image && <img src={address.image} alt='Pinned Address 1'/>}
			</div>
			<div className={styles.pinnedText}>
				<p className={styles.pinnedTextUpper}>{address.address ?? 'Address'}</p>
				<div className={styles.pinnedTextLower}>
					<p>{moneyFormat(address.cost) || 'Rent Due'}</p>
					<p>{address.costInterval ?? 'Interval'}</p>
				</div>
			</div>
		</div>
	)
}

export default PinnedAddresses;