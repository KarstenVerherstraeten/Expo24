import React from "react";
import { useState } from "react";
import "../styles/Inschrijving.css";

function Inschrijving() {
	const [formData, setFormData] = useState({
		lastName: "",
		firstName: "",
		email: "",
		numberOfPeople: "",
		occupation: "",
		preferences: {
			vrGame: false,
			threeDGame: false,
			liveCoding: false,
			demo3DPrints: false,
			demoLasercut: false,
		},
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			setFormData((prevState) => ({
				...prevState,
				preferences: {
					...prevState.preferences,
					[name]: checked,
				},
			}));
		} else {
			setFormData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		const response = await fetch("http://localhost:3000/postInvite", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();
		if (response.ok) {
			alert("Inschrijving succesvol!");
		} else {
			alert(`Fout bij inschrijving: ${result.error}`);
		}
	};

	return (
		<div className="container">
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
			<div className="form-container">
				<h2 className="form-title">Inschrijving</h2>
				<form onSubmit={handleSubmit}>
					<div className="name-forname">
						<div className="form-group">
							<label htmlFor="name">Naam:</label>
							<input
								type="text"
								id="name"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange} required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="firstName">Voornaam:</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
                required
							/>
						</div>
					</div>

					<div className="email-numberofpeople">
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
                required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="numberOfPeople">Personen:</label>
							<input type="number" id="numberOfPeople" name="numberOfPeople" required/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="occupation">Functie:</label>
						<select
							id="occupation"
							name="occupation"
							value={formData.occupation}
							onChange={handleChange} required
						>
							<option value="">Selecteer...</option>
							<option value="student">Student</option>
							<option value="docent">Docent</option>
							<option value="bedrijf">Bedrijf</option>
							<option value="ouder">Ouder</option>
							<option value="alumni">Alumni</option>
						</select>
					</div>
					<div className="form-group">
						<label>Voorkeur Project:</label>
						<br />
						<label htmlFor="vrGame">
							<input
								type="checkbox"
								id="vrGame"
								name="vrGame"
								value="VR game"
								checked={formData.preferences.vrGame}
								onChange={handleChange}
							/>
							VR-game
						</label>
						<br />
						<label htmlFor="3dGame">
							<input
								type="checkbox"
								id="3dGame"
								name="threeDGame"
								value="3D game"
								checked={formData.preferences.threeDGame}
								onChange={handleChange}
							/>
							3D-game
						</label>
						<br />
						<label htmlFor="liveCoding">
							<input
								type="checkbox"
								id="liveCoding"
								name="liveCoding"
								value="Live coding"
								checked={formData.preferences.liveCoding}
								onChange={handleChange}
							/>
							Live coderen
						</label>
						<br />
						<label htmlFor="demo3DPrints">
							<input
								type="checkbox"
								id="demo3DPrints"
								name="demo3DPrints"
								value="Demo 3D prints"
								checked={formData.preferences.demo3DPrints}
								onChange={handleChange}
							/>
							Demo 3D-prints
						</label>
						<br />
						<label htmlFor="demoLasercut">
							<input
								type="checkbox"
								id="demoLasercut"
								name="demoLasercut"
								value="Demo lasercut"
								checked={formData.preferences.demoLasercut}
								onChange={handleChange}
							/>
							Demo lasersnijden
						</label>
						<br />
					</div>
					<button type="submit">Verzenden</button>
				</form>
			</div>
		</div>
	);
}

export default Inschrijving;
