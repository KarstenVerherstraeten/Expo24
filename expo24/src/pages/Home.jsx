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
					<div className={homeCss.homeButton}>
						<img src={logoB} alt="" />
						<Link to="/InschrijvingForum">Schrijf je in!</Link>
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
				<h1>Ontdek het evenement</h1>
			</div>
			<div>
				<Slideshow></Slideshow>
			</div>
			<div className={homeCss.content2}>
				<div className={homeCss.basicInfo}>
					<h3>21 I 06 I 24</h3>
					<h3>START VANAF: 17:00</h3>
					<h3>Erasmushogeschool Brussel, Campus Kaai</h3>
				</div>
				<div className={homeCss.button}>
					<a>
						<Link to="/InschrijvingForum">Schrijf je in!</Link>
					</a>
				</div>

				<div className={homeCss.Containers}>
					<div className={homeCss.items}>
						<h4>Awards</h4>
						<div className={homeCss.picture}>
							<img src="#" alt="foto" />
							<a className={homeCss.button2}>
								<Link to="/">Info</Link>
							</a>
						</div>
					</div>
					<div className={homeCss.items}>
						<h4>Activiteiten</h4>
						<div className={homeCss.picture}>
							<img src="#" alt="foto" />
							<a className={homeCss.button2}>
								<Link to="/Activities">Info</Link>
							</a>
						</div>
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
				</div>
				<div className={homeCss.button3}>
					<a>
						<Link to="/Accessibility">Bereikbaarheid</Link>
					</a>
				</div>
			</div>
		</>
	);
}

export default Home;
