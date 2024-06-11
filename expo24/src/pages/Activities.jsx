import Activity from "../components/Activity";
import ActivitiesCss from "../styles/Activities.module.css";
import Footer from "../components/Footer.jsx";

function Activities() {
	return (
		<>
			<div className={ActivitiesCss.container}>
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
				</div>
				<div className={ActivitiesCss.activitiesContent}>
					<Activity />
					<Activity />
					<Activity /> {/* Assuming you have three activities */}
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}

export default Activities;
