import React, { useEffect } from "react";
import "../styles/Confirmation.css";

function Confirmation() {
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
				<div className="ConfigInfo">
					<div>
						<p>Activiteit</p>
						<ul>
							<li>Expo 24</li>
							<li>Erasmushogeschool Brussel</li>
							<li>Campus Kaai</li>
							<li>
								Nijverheidskaai 170, <br />
								1070 Brussel
							</li>
						</ul>
					</div>
					<div>
						<p>Persoongegevens</p>
						<ul>
							<li>Jan banaan</li>
							<li>Email</li>
							<li>Hoeveelheid deelnemers</li>

							<li>
								Voorkeursprojecten
								<ul>
									<li>3D</li>
									<li>VR-game</li>
									<li>Live coderen</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Confirmation;
