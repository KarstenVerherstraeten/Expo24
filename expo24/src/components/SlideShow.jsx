import React from "react";
import styles from "../styles/Home.module.css";
import Voorbeeld from "../assets/react.svg";

const Slideshow = () => {
	return (
		<div className={styles.scrollContainer}>
			<div className={styles.item}>
				<img src={Voorbeeld} alt="Cinque Terre" />
				<h2>Workshop</h2>
			</div>
			<div className={styles.item}>
				<img src={Voorbeeld} alt="Cinque Terre" />
				<h2>Eten en drinken</h2>
			</div>
			<div className={styles.item}>
				<img src={Voorbeeld} alt="Cinque Terre" />
				<h2>Award show</h2>
			</div>
			<div className={styles.item}>
				<img src={Voorbeeld} alt="Cinque Terre" />
				<h2>Contacten leggen</h2>
			</div>
			<div className={styles.item}>
				<img src={Voorbeeld} alt="Cinque Terre" />
				<h2>Dansen</h2>
			</div>
		</div>
	);
};

export default Slideshow;
