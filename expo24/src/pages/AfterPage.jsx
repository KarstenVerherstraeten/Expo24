import afterCss from "../styles/AfterPage.module.css";
import React from "react";
import { Link } from "react-router-dom";
import logoB from "../assets/LogoB.svg";
import Footer from "../components/Footer";
import awards from "/Award.jpg";
import eindwerken from "/Eindwerken.jpg"
import Infodag from "../assets/vrGames.jpg";
import AfterFooter from "../components/AfterFooter.jsx";

function AfterPage() {
	return (
		<>
			<div className={afterCss.header}>
				<div className={afterCss.leftHeader}>
					<div className={afterCss.homeButton}>
						<img src={logoB} alt="" />
						<div className={afterCss.headerDate}>
							<h3>Bekijk de winnaars</h3>
							<Link to="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie#infodagen">PRIJZEN</Link>
						</div>
					</div>
				</div>
				<div className={afterCss.rightHeader}>
					<div className={afterCss.headerText}>
						<h2>
							EXPO24 is tot zijn einde gekomen. Het was een fantastisch evenement en
							we zijn ontzettend blij dat jullie zo talrijk aanwezig waren! We
							hebben samen mooie momenten beleefd en veel interessante dingen
							ontdekt.
						</h2>
						<h2>
						Was jij er niet bij? Dat is niet erg, kom dan zeker naar onze <a href="https://multimedia.brussels/Awards">opendeurdag op 29 juni</a>.
						</h2>
					</div>
				</div>
			</div>
			<div className={afterCss.glassPanel}>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
				<div className={afterCss.glass}></div>
			</div>
			<div className={afterCss.videoContainer}>
			<iframe src="https://www.youtube.com/embed/nPWbtaNguhk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

			</div>

			<div className={afterCss.buttons}>
				<div>
					<h2>
						Bekijk hier alle projecten
					</h2>

					<img src={eindwerken} alt="Awards" />
					<Link className={afterCss.button} to="https://multimedia.brussels">
						PROJECTEN
					</Link>
				</div>
			</div>

			<div className={afterCss.activities}>
					<div className={afterCss.textActivities}>
						<h1>INFODAG</h1>
						<p>
							Op zaterdag 29 juni 2024, van 10u tot 15u <br></br>
							zwieren we de deuren van onze campussen open. <br></br>
							Kom zeker is langs!
						</p>
					</div>

					<div className={afterCss.btnActivitiesBtn}>
						<a className={afterCss.btn} href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie#infodagen">
							PROGRAMMA
						</a>
					</div>
				</div>
			<AfterFooter />
		</>
	);
}

export default AfterPage;
