import homeCss from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import logoB from "../assets/LogoB.svg";
import Timer2 from "../components/Timer2";
import Voorbeeld from "../assets/react.svg";

function Home() {
	return (
		<>
			<div className={homeCss.header}>
				<div className={homeCss.leftHeader}>
					<h1>21 I 06 I 24</h1>
					<div className={homeCss.homeButton}>
						<img src={logoB} alt="" />
						<button>Schrijf je in!</button>
					</div>
				</div>
				<div className={homeCss.rightHeader}>
					<div className={homeCss.timer}>
						<Timer2></Timer2>
					</div>
					<div>
						<h2>Erasmushogeschool Brussel campus Kaai</h2>
						<h2>Nijverheidskaai 170, 1070 Anderlecht </h2>
					</div>
				</div>
			</div>
			<div>
				<div className={homeCss.glassPanel}>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
					<div className={homeCss.glass}></div>
				</div>
			</div>
			<div className={homeCss.content1}>
				<h1>Ontdek het evenemnt</h1>
			</div>
			<div className="scroll-container">
				<div>
					<h2>naam:</h2>
					<img src={Voorbeeld} alt="Cinque Terre"></img>
				</div>
				<div>
					<h2>naam:</h2>
					<img src={Voorbeeld} alt="Cinque Terre"></img>
				</div>
				<div>
					<h2>naam:</h2>
					<img src={Voorbeeld} alt="Cinque Terre"></img>
				</div>
				<div>
					<h2>naam:</h2>
					<img src={Voorbeeld} alt="Cinque Terre"></img>
				</div>
			</div>
		</>
	);
}

export default Home;
