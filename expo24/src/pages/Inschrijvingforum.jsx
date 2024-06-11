import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InschrijvingCss from "../styles/Inschrijvingforum.module.css";

function Inschrijvingforum() {
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
		companyTitle: ""
	  });
	
	  const [loading, setLoading] = useState(false);
	  const navigate = useNavigate();
	
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
		setLoading(true);
		try {
		  const response = await fetch("https://fp4-info-onlineinfoteam.onrender.com/postInvite", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		  });
	
		  const result = await response.json();
		  if (response.ok) {
			navigate("/confirmation", { state: { formData } });
		  } else {
			alert(`Fout bij inschrijving: ${result.error}`);
		  }
		} catch (error) {
		  console.error("Error submitting form:", error);
		  alert("Er is een fout opgetreden bij het verzenden van de inschrijving.");
		} finally {
		  setLoading(false);
		}
	  };

	return (
		<>
			<div className={InschrijvingCss.container}>
				{loading && (
					<div className={InschrijvingCss.loadingScreen}>
						<div className={InschrijvingCss.spinner}></div>
						<p>Bezig met Inschrijven ...</p>
					</div>
				)}
				<div className={InschrijvingCss.glassPanel}>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
					<div className={InschrijvingCss.glass}></div>
				</div>
				<div className={InschrijvingCss.content}>
					<div className={InschrijvingCss.title}>
						<h1>Schrijf je in</h1>
					</div>

					<form className={InschrijvingCss["form-3"]} onSubmit={handleSubmit}>
						<div className={InschrijvingCss["form-section-1"]}>
							<div className={InschrijvingCss["section-1"]}>
								<input
									type="text"
									id="firstName"
									name="firstName"
									placeholder="Voornaam"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>

								<input
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Achternaam"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
							</div>

							<div className={InschrijvingCss["section-2"]}>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
								<input
									type="number"
									id="numberOfPeople"
									name="numberOfPeople"
									placeholder="Aantal personen"
									value={formData.numberOfPeople}
									onChange={handleChange}
									required
									min="1"
								/>
							</div>

							<div className={InschrijvingCss["occupation-3"]}>
								<select
									className={InschrijvingCss["select-2"]}
									id="occupation-3"
									name="occupation"
									value={formData.occupation}
									onChange={handleChange}
									required
								>
									<option value="">Ik ben...</option>
									<option value="student">Student</option>
									<option value="geen-student">Geen student</option>
									<option value="ouder">Ouder</option>
									<option value="docent">Docent</option>
									<option value="ehb-staff">EHB Staff</option>
									<option value="bedrijf">Bedrijf</option>
									<option value="alumni">Alumni</option>
									<option value="other">Andere</option>
								</select>
								{formData.occupation === "bedrijf" && (
									<input
										type="text"
										id="bedrijf"
										name="bedrijf"
										placeholder="Bedrijfsnaam"
										className={InschrijvingCss.bedrijf}
										value={formData.companyTitle}
										onChange={handleChange}
										required={formData.occupation === "bedrijf"}
									/>
								)}
							</div>
						</div>

						<div className={InschrijvingCss["project-text"]}>
							<p className={InschrijvingCss["text-p"]}>
								Om een schatting te kunnen maken van het aantal deelnemers,
								<br />
								vragen we je om aan te duiden welke workshops je graag volgt
								<br />
								op EXPO24.
							</p>
						</div>

						<div className={InschrijvingCss["project-checkbox-container"]}>
							<div className={InschrijvingCss["project-checkbox-container-1"]}>
								<div className={InschrijvingCss["project-checkbox"]}>
									<input
										type="checkbox"
										id="project-3d-games"
										name="threeDGame"
										checked={formData.preferences.threeDGame}
										onChange={handleChange}
									/>
									<label htmlFor="project-3d-games">3D-Games</label>
								</div>

								<div className={InschrijvingCss["project-checkbox"]}>
									<input
										type="checkbox"
										id="project-vr-games"
										name="vrGame"
										checked={formData.preferences.vrGame}
										onChange={handleChange}
									/>
									<label htmlFor="project-vr-games">VR-Games</label>
								</div>

								<div className={InschrijvingCss["project-checkbox"]}>
									<input
										type="checkbox"
										id="project-new-checkbox"
										name="demoLasercut"
										checked={formData.preferences.demoLasercut}
										onChange={handleChange}
									/>
									<label htmlFor="project-new-checkbox">Demo Lasercut</label>
								</div>
							</div>

							<div className={InschrijvingCss["project-checkbox-container-2"]}>
								<div className={InschrijvingCss["project-checkbox"]}>
									<input
										type="checkbox"
										id="project-live-coderen"
										name="liveCoding"
										checked={formData.preferences.liveCoding}
										onChange={handleChange}
									/>
									<label htmlFor="project-live-coderen">Live coderen</label>
								</div>

								<div className={InschrijvingCss["project-checkbox"]}>
									<input
										type="checkbox"
										id="project-3d-printen"
										name="demo3DPrints"
										checked={formData.preferences.demo3DPrints}
										onChange={handleChange}
									/>
									<label htmlFor="project-3d-printen">Demo 3D-Printen</label>
								</div>

								<div className={InschrijvingCss["project-checkbox"]}>
									<input
										type="checkbox"
										id="geen-idee"
										name="geenIdee"
										checked={formData.preferences.geenIdee}
										onChange={handleChange}
									/>
									<label htmlFor="geen-idee">Geen idee</label>
								</div>
							</div>
						</div>
						<button type="submit" id="Continue" className={InschrijvingCss.continue}>
							Inschrijven
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Inschrijvingforum;
