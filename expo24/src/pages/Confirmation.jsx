import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import "../styles/Confirmation.css";

function Confirmation() {
	const location = useLocation();
	const navigate = useNavigate();
	const { formData } = location.state || {};

	// Parameters
	const templateParams = {
		to_name: formData?.firstName, //name receiver
		message: "Bedankt voor uw inschrijving.", //message
		to_email: formData?.email, //email receiver
	};

	useEffect(() => {
		const emailConfig = {
			publicKey: "up5kafMM7CQN8KRal",
			blockHeadless: true,
			limitRate: {
				id: "app",
				throttle: 10000,
			},
		};

		function initEmailJS(config) {
			emailjs.init(config.publicKey);
		}

		function sendEmail() {
			emailjs
				.send("service_paoixuy", "template_6jxu27g", templateParams)
				.then((response) => {
					console.log("SUCCESS!", response.status, response.text);
				})
				.catch((error) => {
					console.log("FAILED...", error);
				});
		}

		initEmailJS(emailConfig);
		sendEmail();
	}, []);

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
				<div className="glass"></div>
				<div className="glass"></div>
				<div className="glass"></div>
			</div>
			<div className="ConfigContent">
				<h2 className="ConfigTitle">
					Thank you for <br /> Signing up!{" "}
				</h2>
				<div className="ConfigBottom">
					<p>
						U have been succesfully signed up. <br />An email should be in your inbox soon.
						<br /> In case u didn't recieve it, <span style={{fontWeight: "700"}}>Check your spam folder</span>.
					</p>
				</div>
				<div className="ConfigInfo">
					<div>
						<p>Practical info:</p>
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
						<p>Personal Information:</p>
						<ul>
							<p>
								{formData?.lastName} {formData?.firstName}
							</p>
							<p>{formData?.email}</p>
							<p>How many People: {formData?.numberOfPeople}</p>
							<p>
								Preferences:
								<ul>
									{formData?.preferences?.vrGame && <li>VR-game</li>}
									{formData?.preferences?.threeDGame && <li>3D-game</li>}
									{formData?.preferences?.liveCoding && <li>Live code</li>}
									{formData?.preferences?.demo3DPrints && (
										<li>Demo 3D-prints</li>
									)}
									{formData?.preferences?.demoLasercut && (
										<li>Demo LaserCutting</li>
									)}
								</ul>
							</p>
						</ul>
					</div>
				</div>
				<div className="ConfigButton">
					<button onClick={() => navigate("/")}>Back to Home</button>
				</div>
			</div>
		</div>
	);
}

export default Confirmation;
