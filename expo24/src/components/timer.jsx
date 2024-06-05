// code combined from https://www.w3schools.com/howto/howto_js_countdown.asp
// and https://www.w3schools.com/js/js_date_methods.asp
// and Github Copilot

import { useEffect } from "react";

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

			document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds + " ";

			if (distance < 0) {
				clearInterval(x);
				document.getElementById("timer").innerHTML = "Event over";
			}
		}, 1000);

		// This function will be run when the component is unmounted
		return () => {
			clearInterval(x);
		};
	}, []); // Empty array means this effect runs once when the component is mounted

	return (
		<div>
			<h1>Countdown Timer</h1>
			<p id="timer"></p>
		</div>
	);
};

export default Timer;
