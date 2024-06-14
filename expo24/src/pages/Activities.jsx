import React from "react";
import Activity from "../components/Activity";
import ActivitiesCss from "../styles/Activities.module.css";
import Footer from "../components/Footer.jsx";
import activitiesData from "../../activities.json"; // JSON data importeren

function Activities() {
	return (
		<>
			<div className={ActivitiesCss.glassPanel}>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<div className={ActivitiesCss.glass}></div>
				<h1 className={ActivitiesCss.titleActivities}>PROGRAMMA</h1>
			</div>
			<div className={ActivitiesCss.switch}>
				<p>TIMETABLE</p>
				<p>OVERZICHT</p>
			</div>
			<div className={ActivitiesCss.ActivitiesContainer}>
				<div className={ActivitiesCss.activitiesWrapper}>
					{activitiesData.map((activity, index) => (
						<Activity key={index} activity={activity} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Activities;
