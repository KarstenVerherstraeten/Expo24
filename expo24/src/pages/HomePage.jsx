import React, { useEffect } from "react";
import Timer from "../components/Timer";
import {Link,useNavigate } from "react-router-dom";
import LogoW from "../assets/LogoW.svg";
import Nav from "../components/Navigation";
import Footer from "../components/Footer";
import HomepageCss from "../styles/Homepage.module.css";

function HomePage() {
	// code helped by ChatGPT
	const navigate = useNavigate();

	useEffect(() => {
		const signInButton = document.getElementById("SignIn");
		if (signInButton) {
			const handleSignInClick = () => {
				console.log('clicked');
				navigate("/InschrijvingForum");
			};

			signInButton.addEventListener("click", handleSignInClick);

			return () => {
				signInButton.removeEventListener("click", handleSignInClick);
			};
		}
	}, [navigate]);

	return (
		<div className={HomepageCss.container}>
			<div className={HomepageCss.glassPanel}>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
				<div className={HomepageCss.glass}></div>
			</div>

			<div className={HomepageCss.content}>
				<img src={LogoW} alt="logo" />
				<div className={HomepageCss.date}>
					<p>21 juni 2024</p>
					<p>Vanaf: 17:00</p>
				</div>

				<Timer />

				<div className={HomepageCss.basicInfo}>
					<p>Erasmushogeschool Brussel campus Kaai</p>
					<p>Nijverheidskaai 170, 1070 Anderlecht</p>
				</div>

				<Link id="SignIn" to="/InschrijvingForum">Schrijf je in!</Link>
				<div className={HomepageCss.information}>
					<div className={HomepageCss.leftSide}>
						<div className={HomepageCss.What}>
							<p>Wat is EXPO24?</p>
							Ervaar een inspirerende en innovatieve avond tijdens ons event,
							EXPO24, aan de Erasmushogeschool! Ontdek de creatieve projecten
							van de derdejaarsstudenten van Multimedia & Creatieve Technologie.
						</div>
						<div className={HomepageCss.General}>
							<p>Praktische Info</p>
							<ul>
								<li>Waar: Erasmushogeschool Brussel campus Kaai</li>
								<li>Wanneer: 21 juni 2024</li>
								<li>Prijs: Gratis!</li>
							</ul>
						</div>
					</div>
					<div className={`${HomepageCss.right} ${HomepageCss.side}`}>
						<div className={HomepageCss.Why}>
							<p>Waarom komen?</p>
							<ul>
								<li>Tentoonstellingen</li>
								<li>Live demo's</li>
								<li>Mini-workshops</li>
								<li>Welkomsdrankje</li>
								<li>Barbecue</li>
								<li>Rondetafelgesprekken</li>
								<li>Prijsuitreiking</li>
								<li>Netwerkmogelijkheden</li>
							</ul>
						</div>
						<div className={HomepageCss.BBQ}>
							<p>Barbecue</p>
							Tijdens het evenement organiseert Enigma, de studentenvereniging
							van de EHB school, een barbecue van 12u30 tot 20u30. Als je wilt
							deelnemen, schrijf je dan in via de knop hieronder:
							<a
								className={HomepageCss.buttonBBQ}
								href="https://docs.google.com/forms/d/e/1FAIpQLSfzePgKhlMeJRjyRnlr-gOlAmdLpUHmD7mprBsdGJmGeBcg4Q/viewform"
							>
								Ik wil naar de barbecue!
							</a>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default HomePage;
