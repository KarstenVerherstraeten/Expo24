import React from "react";
import { Link } from "react-router-dom";
import ActivityCss from "../styles/Activity.module.css";
import vrImage from "../assets/vrGames.jpg";

function Activity({ activity }) {
	return (
		<Link to={`/activity/${activity.title}`} className={ActivityCss.activityContext}>
			<div className={ActivityCss.location}>
				<img src={vrImage} alt="Foto Activiteit" className={ActivityCss.image} />
				<h3 className={ActivityCss.text}>{activity.locatie}</h3>
			</div>
			<div className={ActivityCss.info}>
				<p>{activity.title}</p>
				<p>17u</p>
			</div>
		</Link>
	);
}

export default Activity;
