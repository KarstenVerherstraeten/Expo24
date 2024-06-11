import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ActivitiesCss from "../styles/Activities.module.css";

function Activity() {
	return (
		<div className={ActivitiesCss.activityContext}>
			<div className={ActivitiesCss.activityComponent}>
				<h1>Naam:</h1>
				<h2>Category:</h2>
				<img src="#" alt="Foto Activiteit" />
				<h2>Beschrijving</h2>
			</div>

			<div className={ActivitiesCss.activityInfo}>
				<div>
					<h2>Uur:</h2>
					<h2>Locatie:</h2>
				</div>
				<div>
					<h2>Inschrijven</h2>
				</div>
			</div>
		</div>
	);
}
export default Activity;
