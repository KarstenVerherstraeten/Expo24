// code combined from https://www.w3schools.com/howto/howto_js_countdown.asp
// and https://www.w3schools.com/js/js_date_methods.asp
// and Github Copilot

import React, { useEffect, useState } from "react";
import TimerCss from "../styles/Timer2.module.css";

const Timer2 = () => {
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	useEffect(() => {
		const countDownDate = new Date("Jun 21, 2024 17:00:00").getTime();

		const updateTimer = () => {
			const now = new Date().getTime();
			const distance = countDownDate - now;

			if (distance < 0) {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				clearInterval(intervalId);
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });
		};

		const intervalId = setInterval(updateTimer, 1000);

		updateTimer(); // Initial call to update right away

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className={TimerCss["time-blocks"]}>
			<div className={TimerCss["time-block"]}>
				<span className={TimerCss["bold-text"]}>{timeLeft.days}</span>
				<h2>D</h2>
				<h1>I</h1>
			</div>
			<div className={TimerCss["time-block"]}>
				<span className={TimerCss["bold-text"]}>{timeLeft.hours}</span>
				<h2>U</h2>
				<h1>I</h1>
			</div>
			<div className={TimerCss["time-block"]}>
				<span className={TimerCss["bold-text"]}>{timeLeft.minutes}</span>
				<h2>M</h2>
				<h1>I</h1>
			</div>
			<div className={TimerCss["time-block"]}>
				<span className={TimerCss["bold-text"]}>{timeLeft.seconds}</span>
				<h2>S</h2>
			</div>
		</div>
	);
};

export default Timer2;
