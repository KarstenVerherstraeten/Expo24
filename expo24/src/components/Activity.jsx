import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Activity() {
	return (
		<div className="ActivityComponent">
			<h1>Naam:</h1>
			<h2>Category:</h2>
			<img src="#" alt="Foto Activiteit" />
			<h2>Beschrijving</h2>
			<div className="ActivityInfo">
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
