import Activity from "../components/Activity";
import ActivitiesCss from "../styles/Activities.module.css";
import Footer from "../components/Footer.jsx";

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
				<p>OVERZICHT</p></div>
			<div className={ActivitiesCss.ActivitiesContainer}>
				

				<div className={ActivitiesCss.activitiesWrapper}>
					<Activity />
					<Activity />
					<Activity />
					<Activity />
					<Activity />
					<Activity />
					<Activity />
					<Activity />
					<Activity />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Activities;
