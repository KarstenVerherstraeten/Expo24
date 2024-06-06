import Activity from "../components/Activity";
import "../styles/Activities.css";

function Activities() {
	return (
		<div>
			<div className="glass-panel">
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
			</div>
			<div className="ActivitiesContent">
				<Activity />
			</div>
		</div>
	);
}

export default Activities;
