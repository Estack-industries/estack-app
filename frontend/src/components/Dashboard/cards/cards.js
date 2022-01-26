import { useState, useEffect } from 'react';
import { moneyFormat, dateFormat } from '../../../pages/Account/utils';
import styles from './cards.module.css';

/**
 * A panel of credit card information and payments
 * @param {object[]} cards Array of card objects.
 * @param {string} containerStyle CSS classname for the container, defaults to have a border and box shadow.
 * @example
 * // All properties should be optional.
 * <CardsPanel cards={[{
 *		id: 'card-id-1',
 *		balance: 10000,
 *		profit: 1000,
 *		payments: [
 *			{
 *				purpose: 'Payed Lease',
 *				date: Date.now() - 1000 * 60 * 60 * 24 * 1,
 *				amount: 2500,
 *				address: '26 Young Avenue East Elmhurst, NY 11369'
 *			}
 *		]
 * }]}/>
 */
const CardsPanel = ({cards, containerStyle=styles.box}) => {

	const [selectedCard, setSelectedCard] = useState({});
	
	useEffect(() => {
		if (cards && cards.length > 0) {
			setSelectedCard(cards[0]);
		}
		const cardInfo = document.getElementById('cardInfo');
		const cardMain = document.getElementById(styles.mainCard);
		if (!cardInfo || !cardMain) return;

		
		const cardResize = () => {
			const cardHeight = cardMain.getBoundingClientRect().height;
			if (cardHeight > 110) cardInfo.style.transform = cardInfo.style.transform = 'scale(1)';
			else cardInfo.style.transform = 'scale(' + ((cardHeight - 10) / 100) + ')';
		};

		cardResize();
		window.addEventListener('resize', cardResize);
		return () => {
			window.removeEventListener('resize', cardResize);
		}
	}, [cards]);
	
	let cardPurpose = [0];

	const cardPayment = (payment, index) => {
	
		cardPurpose.push(payment.purpose);

		return (
			<>
				{cardPurpose[index + 1] !== cardPurpose[index] && 
					<h4>{cardPurpose[index + 1]}</h4>
				}
				<div className={styles.historyElement} key={index}>
					<p>{payment.address}</p>
					<div>
						<p>{dateFormat(payment.date)}</p>
						<p>{moneyFormat(payment.amount)}</p>
					</div>
				</div>
			</>
		)
	};

	return (
		<div className={containerStyle}>
			<h4>My Cards</h4>
			<div style={{position: 'relative'}}>
				<div id={styles.shadowCard} style={{backgroundColor: '#cbe9ff'}}/>
				<div id={styles.mainCard} style={{background: 'linear-gradient(to top right, #a4d7fc, #0193fd)'}}>
					<div id='cardInfo'>
						<p>Balance</p>
						<p style={{fontSize: '1.6em'}}>{moneyFormat(selectedCard.balance)}</p>
						<p>Monthly Profit</p>
						<p style={{fontSize: '1.2em'}}>{moneyFormat(selectedCard.profit)}</p>
					</div>
				</div>
				<div id={styles.selector}>
					{cards && cards.map((card, index) => (
						<div
							key={index}
							style={{backgroundColor: card === selectedCard ? '#0193fd' : '#a4d7fc'}}
							onClick={() => setSelectedCard(card)}
						/>
					))}
				</div>
			</div>
			<div className={styles.verticalScroll}>
				{selectedCard.payments
					? selectedCard.payments.map(cardPayment)
					: <p style={{textAlign: 'center'}}>No payments yet</p>
				}
			</div>
		</div>
	)
}

export default CardsPanel;