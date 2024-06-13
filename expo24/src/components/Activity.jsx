import React from "react";
import { Outlet, Link } from "react-router-dom";
import ActivityCss from "../styles/Activity.module.css";
import vrImage from "../assets/vrGames.jpg";

function Activity() {
	return (
		<div className={ActivityCss.activityContext}>
			<div className={ActivityCss.location}>
				<img
					src={vrImage}
					alt="Foto Activiteit"
					className={ActivityCss.image}
				/>
				<h3 className={ActivityCss.text}>Makerspace</h3>
			</div>
			<div className={ActivityCss.info}>
				<p>Apple Vision</p> <p>17u</p>
			</div>
		</div>
	);
}

export default Activity;
