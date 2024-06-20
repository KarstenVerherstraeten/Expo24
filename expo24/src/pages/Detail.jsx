import React from "react";
import { useParams, Link } from "react-router-dom";
import detailCss from "../styles/Detail.module.css";
import foto from "../assets/vrGames.jpg";
import activities from "../../activities.json"; // Importeer de JSON-gegevens
import Activity from "../components/Activity"; // Importeer de Activity component
import Footer from "../components/Footer";

function getRandomActivities(currentTitle, num) {
	const filteredActivities = activities.filter((activity) => activity.title !== currentTitle);
	const shuffled = filteredActivities.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Detail() {
	const { title } = useParams();
	const activity = activities.find((activity) => activity.title === title);

	if (!activity) {
		return <p>Activiteit niet gevonden</p>;
	}

	const randomActivities = getRandomActivities(title, 3);
	const glassPanelStyles = {
		backgroundImage: `url(${activity.images})`,
	};
	return (
		<>
			<div className={detailCss.AccessibilityContainer}>
				<div className={detailCss.glassPanel} style={glassPanelStyles}>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>
					<div className={detailCss.glass}></div>

					<h1 className={detailCss.titleAccessibility}>
						<h1>{activity.title}</h1>
					</h1>
				</div>
			</div>

			<div className={detailCss.buttonBack}>
				<Link to="/Activities">Ga terug</Link>
			</div>

			<div className={detailCss.Containers}>
				<div className={detailCss.leftContainer}>
					<h1>Wat is er te doen?</h1>
					<p>{activity.description}</p>
				</div>
				<div className={detailCss.rightContainer}>
					<h1>Wanneer?</h1>
					{activity.uren.map((uur, index) => (
						<div key={index}>
							<div className={detailCss.hours}>
								<h2>
									{uur.start} - {uur.einde}
								</h2>
								<h2>{activity.locatie}</h2>
							</div>
							<hr />
						</div>
					))}
				</div>
			</div>
			<hr />
			<div className={detailCss.RandomActivity}>
				<h1>Andere activiteiten:</h1>
				<div className={detailCss.randomActivities}>
					{randomActivities.map((activity, index) => (
						<Activity key={index} activity={activity} />
					))}
				</div>
			</div>

			<Footer></Footer>
		</>
	);
}

export default Detail;
