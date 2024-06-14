import React from "react";
import { Link } from "react-router-dom";
import ActivityCss from "../styles/Activity.module.css";
import vrImage from "../assets/vrGames.jpg";

function Activity({ activity }) {
	return (
		<Link to={`/activity/${activity.title}`} className={ActivityCss.activityContext}>
			<div className={ActivityCss.ImageContainer}>
				<h3 className={ActivityCss.text} style={{ backgroundColor: activity.backgroundColor }}>
					{activity.locatie}
				</h3>
				<img src={activity.images} alt="Foto Activiteit" className={ActivityCss.image} />
				<div className={ActivityCss.glassPanel}>
					{Array.from({ length: 8 }).map((_, index) => (
						<div className={ActivityCss.glass} key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
					))}
				</div>
			</div>
			<div className={ActivityCss.info}>
				<p>{activity.title}</p>
			</div>
		</Link>
	);
}

export default Activity;
