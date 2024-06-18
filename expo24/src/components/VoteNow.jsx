import React, { useState, useEffect } from "react";
import styles from "../styles/VoteNow.module.css"; // Import the CSS module

const VoteNow = () => {
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 50 && window.innerWidth <= 768) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};



	return (
		<a
			className={`${styles.voteButton} ${showButton ? styles.show : ""}`}
			onClick={scrollToTop}
		>
			SCHRIJF JE IN
		</a>
	);
};

export default VoteNow;