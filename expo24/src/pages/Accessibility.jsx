import React, { useState } from "react";
import AccessibilityCSS from "../styles/Accessibility.module.css";
import Footer from "../components/Footer";
import Location from "../assets/LocationLogo.svg";
import FloorPlan from "../assets/activityImages/Plattegrond.png";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function Accessibility() {
	const [openSection, setOpenSection] = useState(null);

	const toggleSection = (section) => {
		setOpenSection(openSection === section ? null : section);
	};

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: "/Accessibility", title: "Bereikbaarheid" });
	}
	, []);

	return (
		<>
			<div className={AccessibilityCSS.AccessibilityContainer}>
				<div className={AccessibilityCSS.glassPanel}>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>
					<div className={AccessibilityCSS.glass}></div>

					<h1 className={AccessibilityCSS.titleAccessibility}>BEREIKBAARHEID</h1>
				</div>

				<div className={AccessibilityCSS.GroundPlanWrapper}>
				<h2 className={AccessibilityCSS.GroundPlan}>Plattegrond Campus</h2>
			
				
					<img src={FloorPlan} alt="Plattegrond" />
	
				</div>
				

				<div className={AccessibilityCSS.infoWrapper}>
					<div className={AccessibilityCSS.info}>
						<img id={AccessibilityCSS.marker} src={Location} alt="" />
						<p>
							Erasmushogeschool Brussel <br /> Campus Kaai <br /> Nijverheidskaai70, <br />
							Anderlecht 1070
						</p>
					</div>
					<a target="_blank" href="https://maps.app.goo.gl/3ARQ3KRZ7JZYnV9Y6">
						<button className={AccessibilityCSS.route}>BEREKEN ROUTE</button>
					</a>
				</div>

				<div className={AccessibilityCSS.transport}>
					{["Trein", "Fiets", "Bus", "Auto", "Metro"].map((transport, index) => (
						<div key={index} className={AccessibilityCSS.section}>
							<div className={AccessibilityCSS.sectionHeader} onClick={() => toggleSection(transport)}>
								<h3>{transport}</h3>
								<span className={`${AccessibilityCSS.arrow} ${openSection === transport ? AccessibilityCSS.open : ""}`}>
									<span className="material-symbols-outlined">keyboard_arrow_down</span>
								</span>
							</div>
							<div className={`${AccessibilityCSS.sectionContent} ${openSection === transport ? AccessibilityCSS.open : ""}`}>
								{openSection === transport && ( // Added condition here
									<>
										{transport === "Trein" && <p>Station Brussel-Zuid is het dichtstbijzijnde treinstation. Vanaf hier is het ongeveer 20 minuten lopen naar de campus.</p>}
										{transport === "Fiets" && <p>Er zijn fietsenstallingen op de campus. Let op: deze zijn niet overdekt.</p>}
										{transport === "Bus" && <p>Bus 86 stopt op 5 minuten lopen van de campus. Stap uit bij de halte 'Havenlaan'.</p>}
										{transport === "Auto" && <p>Er is een parkeerplaats op de campus. Let op: deze is niet gratis.</p>}
										{transport === "Metro" && <p>Metrostation 'Delacroix' ligt op 10 minuten lopen van de campus.</p>}
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Accessibility;
