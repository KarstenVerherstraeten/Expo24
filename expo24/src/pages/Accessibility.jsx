import React, { useState, useEffect } from "react";
import AccessibilityCSS from "../styles/Accessibility.module.css";
import Footer from "../components/Footer";
import Location from "../assets/LocationLogo.svg";
import FloorPlan from "../assets/activityImages/Plattegrond.png";
import ReactGA from "react-ga4";

function Accessibility() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection(null); // Close the currently open section
        } else {
            setOpenSection(section); // Open the new section
        }
    };

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/Accessibility", title: "Bereikbaarheid" });
    }, []);

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
                    <img id={AccessibilityCSS.marker} src={Location} alt="Location Marker" />
                    <div className={AccessibilityCSS.info}>
                        <h4>
                            Erasmushogeschool Brussel <br /> Campus Kaai <br /> Nijverheidskaai 170, <br />
                            Anderlecht 1070
                        </h4>
                        <a target="_blank" href="https://maps.app.goo.gl/3ARQ3KRZ7JZYnV9Y6" rel="noopener noreferrer">
                            <button className={AccessibilityCSS.route}>BEREKEN ROUTE</button>
                        </a>
                    </div>
                </div>

                <div className={AccessibilityCSS.transport}>
                    {["Trein", "Tram", "Bus", "Auto", "Metro"].map((transport, index) => (
                        <div key={index} className={AccessibilityCSS.section}>
                            <div className={AccessibilityCSS.sectionHeader} onClick={() => toggleSection(transport)}>
                                <h3>{transport}</h3>
                                <span className={`${AccessibilityCSS.arrow} ${openSection === transport ? AccessibilityCSS.open : ""}`}>
                                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                </span>
                            </div>
                            <div className={`${AccessibilityCSS.sectionContent} ${openSection === transport ? AccessibilityCSS.open : ""}`}>
                                <div className={`${AccessibilityCSS.sectionContentInner} ${openSection === transport ? AccessibilityCSS.open : ""}`}>
                                    {openSection === transport && (
                                        <>
                                            {transport === "Trein" && <p>Station Brussel-Zuid is het dichtstbijzijnde treinstation. Vanaf hier is het ongeveer 20 minuten lopen naar de campus.</p>}
                                            {transport === "Bus" && <p>Bus 46 stopt op 5 minuten lopen van de campus. Stap uit bij de halte 'Albert 1'.</p>}
                                            {transport === "Auto" && <p>Ja, er is een gratis, beperkte parkeerplaats beschikbaar voor-en achter de campus.</p>}
                                            {transport === "Metro" && <p>Metrostation 'Delacroix' ligt op 10 minuten lopen van de campus.</p>}
                                            {transport === "Tram" && <p>Tram 81 stopt op 5 minuten lopen van de campus. Stap uit bij de halte 'Albert 1'.</p>}
                                        </>
                                    )}
                                </div>
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
