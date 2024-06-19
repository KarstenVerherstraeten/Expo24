import afterCss from "../styles/AfterPage.module.css";
import React from "react";
import { Link } from "react-router-dom";
import logoB from "../assets/LogoB.svg";
import Footer from "../components/Footer";
import awards from "/Award.jpg";
import Infodag from "../assets/vrGames.jpg";
import AfterFooter from "../components/AfterFooter.jsx";

function AfterPage() {
	return (
		<>
			<div className={afterCss.logo}>
				<h1>21 I 06 I 24</h1>
				<img src={logoB} alt="Logo" />
				<p>
					Met veel dank kijken we terug op EXPO24, een inspirerende tentoonstelling die het werk van onze getalenteerde multimedia studenten van de Erasmus Hogeschool Brussel in de schijnwerpers heeft gezet. Jullie aanwezigheid en enthousiasme hebben
					van dit evenement een groot succes gemaakt. Onze oprechte dank gaat uit naar de studenten voor hun creativiteit en harde werk, de docenten voor hun begeleiding, en alle betrokkenen voor hun bijdrage. Zonder jullie inzet en steun zou EXPO24
					niet mogelijk zijn geweest. <br />
					We hopen jullie volgend jaar weer te mogen verwelkomen voor een nieuwe editie vol innovatie en inspiratie.
				</p>
			</div>
			<div className={afterCss.buttons}>
				<div>
					<h2>
						Bekijk hier de <br />
						gewonnen werken
					</h2>

					<img src={awards} alt="Awards" />
					<Link className={afterCss.button} to="https://multimedia.brussels">
						Awards
					</Link>
				</div>
				<div>
					<h2>
						Opendeurdag vind plaats op 29 juni <br />
						bekijk hier al de details
					</h2>

					<img src={Infodag} alt="Infodag" />
					<a className={afterCss.button} target="_blank" href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie" rel="noreferrer">
						MCT website
					</a>
				</div>
			</div>

			<AfterFooter />
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
		</>
	);
}

export default AfterPage;
