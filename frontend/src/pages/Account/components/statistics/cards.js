import { useState, useEffect } from 'react';
import { moneyFormat, dateFormat } from '../../utils';
import styles from './cards.module.css';
import parentStyles from './index.module.css';

const CardsPanel = ({cards}) => {

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

	return (
		<div className={parentStyles.box}>
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
				<h4>Payed Lease</h4>
				<div>
					{selectedCard.payments && selectedCard.payments.map((payment, index) => (
						<div className={styles.historyElement} key={index}>
							<p>{payment.address}</p>
							<div>
								<p>{dateFormat(payment.date)}</p>
								<p>{moneyFormat(payment.amount)}</p>
							</div>
						</div>
					))}
					{!selectedCard.payments && <p style={{textAlign: 'center'}}>No payments yet</p>}
				</div>
			</div>
		</div>
	)
}

export default CardsPanel;