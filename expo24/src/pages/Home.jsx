import homeCss from "../styles/Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import logoB from "../assets/LogoB.svg";
import Timer2 from "../components/Timer2";
import Voorbeeld from "../assets/react.svg";
import Slideshow from "../components/SlideShow";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<div className={homeCss.header}>
				<div className={homeCss.leftHeader}>
					<h1>21 I 06 I 24</h1>
					<h3>Vanaf 17u - 21u</h3>
					<div className={homeCss.homeButton}>
						<img src={logoB} alt="" />
						<Link to="/InschrijvingForum">SCHRIJF JE IN!</Link>
					</div>
				</div>
				<div className={homeCss.rightHeader}>
					<div className={homeCss.timer}>
						<Timer2></Timer2>
					</div>
					<div>
						<h2>Erasmushogeschool Brussel I Multimedia & Creatieve Technologie</h2>
						<h2 className={homeCss.text}>Nijverheidskaai 170, 1070 Anderlecht </h2>
						<h2>Tijdens Expo24 presenteren de derdejaarsstudenten van Erasmushogeschool hun eindproeven en worden er verschillende workshops aangeboden.</h2>
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
				<h1>Ontdek het evenement</h1>
			</div>
			<div>
				<Slideshow></Slideshow>
			</div>
			<div className={homeCss.content2}>
				<div className={homeCss.Containers}>
					<div className={homeCss.items}>
						<h4>Awards</h4>
						<div className={homeCss.picture}>
							<img src="#" alt="foto" />
						</div>
						<h3>De derdejaar presenteren tijdens expo24 hun eindwerken. Er worden drie awards uitgereikt voor de beste projecten. </h3>
						<a className={homeCss.button2}>
							<Link to="/">AWARDS</Link>
						</a>
					</div>
					<div className={homeCss.items}>
						<h4>Activiteiten</h4>
						<div className={homeCss.picture}>
							<img src="#" alt="foto" />
						</div>
						<h3>Tijdens expo24 worden er doorheen de avond met verschillende activiteiten aangeboden.  </h3>
						<a className={homeCss.button2}>
							<Link to="/Activities">ACTIVITEITEN</Link>
						</a>
					</div>
				</div>
			</div>
			<div className={homeCss.content3}>
				<h1>PRAKTISCHE INFO</h1>
				<div className={homeCss.PracticalInfo}>
					<div>
						<h4>Adress: Nijverheidskaai 70</h4>
						<h4>1070 Anderlecht</h4>
					</div>
					<div>
						<h4>Data: 21 juni 2024</h4>
						<h4>Uur: vanaf 17u tot 21u</h4>
						<h4>Gebouw: Erasmushogeschool Brussel</h4>
						<h4>Campus Kaai</h4>
					</div>
					<div>
						<h4>Op de expo tonen de 3de jaars hun beste werken. Om 20u is er een award show met een prijs uitreiking. Stem hier op jou favoriet.</h4>
					</div>
				</div>
				<div className={homeCss.buttonsHome}>
					<a className={homeCss.redbutton}>
						<Link to="/Accessibility">BEREIKBAARHEID</Link>
					</a>
					<a className={homeCss.redbutton}>
						<Link to="/Activities">ACTIVITEITEN</Link>
					</a>
					<a className={homeCss.redbutton}>
						<Link to="/">AWARDS</Link>
					</a>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}

export default Home;
