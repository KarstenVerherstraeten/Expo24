// code combined from https://www.w3schools.com/howto/howto_js_countdown.asp
// and https://www.w3schools.com/js/js_date_methods.asp
// and Github Copilot

import { useEffect } from "react";
import "../styles/Timer.css";

const Timer = () => {
	useEffect(() => {
		var countDownDate = new Date("jun 21, 2024 17:00:00").getTime();

		var x = setInterval(function () {
			var now = new Date().getTime();
			var distance = countDownDate - now;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			const timerElement = document.getElementById("timer");
			if (timerElement) {
				timerElement.innerHTML = `
					<span class="bold-text">${days}</span> <span class="thin-line">|</span> 
					<span class="bold-text">${hours}</span> <span class="thin-line">|</span> 
					<span class="bold-text">${minutes}</span> <span class="thin-line">|</span> 
					<span class="bold-text">${seconds}</span>
				`;

				if (distance < 0) {
					clearInterval(x);
					timerElement.innerHTML = "Event over";
					timerElement.classList.add("bold-text", "underline");
				}
			}
		}, 1000);

		// This function will be run when the component is unmounted
		return () => {
			clearInterval(x);
		};
	}, []);

	return (
		<div>
			<p id="timer"></p>
		</div>
	);
};

export default Timer;
