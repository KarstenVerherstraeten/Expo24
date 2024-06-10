import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import ConfirmationCss from "../styles/Confirmation.module.css";

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
			<div className={ConfirmationCss.glassPanel}>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
				<div className={ConfirmationCss.glass}></div>
			</div>
			<div className={ConfirmationCss.ConfigContent}>
				<h2 className={ConfirmationCss.ConfigTitle}>
					Bedankt voor <br /> uw inschrijving!{" "}
				</h2>
				<div className={ConfirmationCss.ConfigBottom}>
					<p>
						U bent succesvol ingeschreven. <br />Er zou binnenkort een e-mail in uw inbox moeten zijn.
						<br /> Mocht u deze niet ontvangen hebben, <span style={{fontWeight: "700"}}>Controleer uw spammap</span>.
					</p>
				</div>
				<div className={ConfirmationCss.ConfigInfo}>
					<div>
						<p>Praktische informatie:</p>
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
						<p>Persoonlijke Informatie:</p>
						<ul>
							<p>
								{formData?.lastName} {formData?.firstName}
							</p>
							<p>{formData?.email}</p>
							<p>Aantal Personen: {formData?.numberOfPeople}</p>
							<p>
								Voorkeuren:
								<ul>
									{formData?.preferences?.vrGame && <li>VR-game</li>}
									{formData?.preferences?.threeDGame && <li>3D-game</li>}
									{formData?.preferences?.liveCoding && <li>Live coderen</li>}
									{formData?.preferences?.demo3DPrints && (
										<li>Demo 3D-prints</li>
									)}
									{formData?.preferences?.demoLasercut && (
										<li>Demo LaserSnijden</li>
									)}
									{formData?.preferences?.geenIdee && (
										<li>Geen idee</li>
									)}
								</ul>
							</p>
						</ul>
					</div>
				</div>
				<div className={ConfirmationCss.ConfigButton}>
					<button onClick={() => navigate("/")}>Ga terug naar Home</button>
				</div>
			</div>
		</div>
	);
}

export default Confirmation;
