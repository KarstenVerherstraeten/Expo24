import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Confirmation.css";

function Confirmation() {
	const location = useLocation();
	const navigate = useNavigate();
	const { formData } = location.state || {};

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
			<div className="ConfigContent">
				<h2 className="ConfigTitle">
					Bedankt voor uw <br /> inschrijving!{" "}
				</h2>
				<div className="ConfigBottom">
					<p>
						U werd succesvol ingeschreven voor EXPO24. <br />U zou binnenkort een email moeten krijgen met alle praktische info.
					</p>
				</div>
				<div className="ConfigInfo">
					<div>
						<p>Praktische info:</p>
						<ul>
							<p>EXPO24</p>
							<p>Erasmushogeschool Brussel</p>
							<p>Campus Kaai</p>
							<p>
								Nijverheidskaai 170, <br />
								1070 Brussel
							</p>
						</ul>
					</div>
					<div>
						<p>Persoonlijke gegevens:</p>
						<ul>
							<p>
								{formData?.lastName} {formData?.firstName}
							</p>
							<p>{formData?.email}</p>
							<p>Hoeveelheid personen: {formData?.numberOfPeople}</p>
							<p>
								Voorkeursprojecten
								<ul>
									{formData?.preferences?.vrGame && <li>VR-game</li>}
									{formData?.preferences?.threeDGame && <li>3D-game</li>}
									{formData?.preferences?.liveCoding && <li>Live coderen</li>}
									{formData?.preferences?.demo3DPrints && <li>Demo 3D-prints</li>}
									{formData?.preferences?.demoLasercut && <li>Demo lasersnijden</li>}
								</ul>
							</p>
						</ul>
					</div>
				</div>
				<div className="ConfigButton">
					<button onClick={() => navigate("/")}>Ga terug naar homepage</button>
				</div>
			</div>
		</div>
	);
}

export default Confirmation;
