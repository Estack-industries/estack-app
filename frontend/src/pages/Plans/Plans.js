import React from 'react'; 
import Navbar from '../../components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Plans.module.css';
import Background from '../../components/NavBackground';
import Footer from '../../components/Footer/Footer';

const Plans = () => {
	return (
		<div>
			<Background />
			<Navbar />
			<h1 className={styles.header}>E-Stack Plans</h1>
			<div class="row" style={{margin: '0em 3.5em'}}>
				<div class={`col-sm-6 ${styles.cardContainer}`}>
					<div class={`card ${styles.card}`}>
						<div class={styles.cardBody}>
							<h4 class={styles.cardTitle}>Basic Plan</h4>
							<div className="small-space" />
							<h5 class={styles.cardPrice}>Free</h5>
							<hr />
							<span class={styles.check}>&#10003;</span>
							<p>&emsp;You can message the agents</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;You can navigate and register for free
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;You can search for your new lease for free
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;You can only sell 1 property at a time
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>&emsp;Help from our team 24/7</p>
							<div className="small-space" />
							<span class="space">&emsp;&emsp;</span>
							<a href="#">Learn More</a>
						</div>
					</div>
				</div>
				<div class={`col-sm-6 ${styles.cardContainer}`}>
					<div class={styles.label}>Recommended Plan</div>
					<div class={`card ${styles.card}`}>
						<div class={styles.cardBody}>
							<h4 class={styles.cardTitle}>Premium Plan</h4>
							<div className="small-space" />
							<h5 class={styles.cardPrice}>20$</h5>
							<h6 class={styles.cardDetail}>
								Per month, paid annually
							</h6>
							<hr />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;You can be in direct contact with the
								seller and call if you want to
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;Exclusive discounts and promotions inside
								the platform
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;We help you with the marketing of your
								listings
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;No limits in the amount of properties that
								you can list on our platform
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>
								&emsp;You'll receive our recommendations to
								sell/buy/lease efficiently
							</p>
							<div className="small-space" />
							<span class={styles.check}>&#10003;</span>
							<p>&emsp;Help from our team 24/7</p>
							<div className="small-space" />
							<span class="space">&emsp;&emsp;</span>
							<a href="#">Learn More</a>
							<div className="small-space" />
							<button type="button" class={`${styles.btn} btn-warning`}>
								Try our premium plan
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="large-space" />
			<Footer />
		</div>
	);
};

export default Plans;
