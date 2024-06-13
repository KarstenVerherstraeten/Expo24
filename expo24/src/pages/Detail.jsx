import React from "react";
import { useParams, Link } from "react-router-dom";
import detailCss from "../styles/Detail.module.css";
import foto from "../assets/vrGames.jpg";
import activities from "../../activities.json"; // Importeer de JSON-gegevens

function Detail() {
	const { title } = useParams();
	const activity = activities.find((activity) => activity.title === title);

	if (!activity) {
		return <p>Activiteit niet gevonden</p>;
	}

	return (
		<>
			<div className={detailCss.header} style={{ backgroundColor: activity.backgroundColor }}>
				<img src={foto} alt="Header" />
				<h1>{activity.title}</h1>
			</div>
			<div className={detailCss.buttonBack}>
				<Link to="/Activities">Ga terug</Link>
			</div>

			<div className={detailCss.Containers}>
				<div className={detailCss.leftContainer}>
					<h1>Wat is er te doen?</h1>
					<h2>{activity.description}</h2>
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
		</>
	);
}

export default Detail;
