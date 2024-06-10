import Activity from "../components/Activity";
import "../styles/Activities.css";
import Footer from "../components/Footer.jsx";

function Activities() {
	return (
		<>
			<div className="container-3">
				<div className="glass-panel-3">
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
					<div className="glass-3"></div>
				</div>
				<div className="ActivitiesContent">
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
