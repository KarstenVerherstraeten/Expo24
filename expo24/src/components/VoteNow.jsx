import React, { useState, useEffect } from "react";
import styles from "../styles/VoteNow.module.css"; // Import the CSS module

const VoteNow = () => {
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