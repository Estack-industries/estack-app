import { useState, useEffect } from 'react';
import { dateFormat, moneyFormat } from '../../../lib/utils';
import styles from './cards.module.css';

/**
 * A panel of credit card information and payments
 * @param {object} props
 * @param {object[]} props.cards Array of card objects.
 * @param {string} props.cards[].balance Card balance.
 * @param {string} props.cards[].profit Monthly card profit from the E-stack.
 * @param {object[]} props.cards[].payments Recent payments by the card.
 * @param {string} props.cards[].payments[].purpose Purpose of the payment. Example: "Payed Lease", "Mortgage Payment", etc.
 * @param {number} props.cards[].payments[].amount Amount of the payment.
 * @param {Date} props.cards[].payments[].date Date of the payment.
 * @param {string} props.cards[].payments[].address Relevant address about the payment.
 * @param {string} props.containerStyle CSS classname for the container, defaults to have a border and box shadow.
 * @returns {JSX.Element} An HTML element that displays a panel of credit card information and payments.
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

	const CardPayment = ({payment, index}) => {
		
		cardPurpose[index + 1] = payment.purpose;
		let date = dateFormat(payment.date);
		if (date === 'Invalid Date') date = undefined;

		return (
			<>
				{cardPurpose[index + 1] !== cardPurpose[index] && 
					<h4>{cardPurpose[index + 1]}</h4>
				}
				<div className={styles.historyElement}>
					<div className={styles.historyTab}/>
					<div className={styles.historyContent}>
						<p>{payment.address}</p>
						<div>
							{date && <p>{date}</p>}
							<p>{moneyFormat(payment.amount)}</p>
						</div>
					</div>
				</div>
			</>
		)
	};

	return (
		<div className={containerStyle}>
			<h4>My Cards</h4>
			<div>
				<div id={styles.cardContainer}style={{position: 'relative', width: 'min(66%, 16em)', margin: '0em auto'}}>
					<div id={styles.shadowCard} style={{backgroundColor: '#cbe9ff'}}/>
					<div id={styles.mainCard} style={{background: 'linear-gradient(to top right, #a4d7fc, #0193fd)'}}>
						<div id='cardInfo'>
							<p>Balance</p>
							<p style={{fontSize: '1.6em'}}>{moneyFormat(selectedCard.balance)}</p>
							<p>Property's Worth</p>
							<p style={{fontSize: '1.2em'}}>{moneyFormat(selectedCard.profit)}</p>
						</div>
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
					? selectedCard.payments.map((e, i) => (
						<CardPayment payment={e} index={i} key={i}/>
					))
					: <p style={{textAlign: 'center', marginTop: '1em'}}>No payments yet</p>
				}
			</div>
		</div>
	)
}

export default CardsPanel;