import homeCss from "../styles/Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import logoB from "../assets/LogoB.svg";
import Timer2 from "../components/Timer2";
import Voorbeeld from "../assets/react.svg";
import Slideshow from "../components/SlideShow";
import Footer from "../components/Footer";
import LocationLogo from "../assets/LocationLogo.png";
import HourLogo from "../assets/HourLogo.png";
import QuestionLogo from "../assets/QuestionsLogo.png";
import eindwerkenFoto from "../assets/activityImages/Eindwerken.jpg";
import ActiviteitenFoto from "../assets/activityImages/lasercut.jpg";

import VoteNow from "../components/VoteNow"; 

import ReactGA from "react-ga4";

function Home() {
	useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
    }, []);
	
	return (
		<>
			<div className={homeCss.header}>
				<div className={homeCss.leftHeader}>
					<div className={homeCss.headerDate}>
						<h1>21 I 06 I 24</h1>
						<h3>Vanaf 17u </h3>
					</div>
					<div className={homeCss.homeButton}>
						<img src={logoB} alt="" />
						<Link to="/Inschrijving">SCHRIJF JE IN!</Link>
					</div>
				</div>
				<div className={homeCss.rightHeader}>
					<div className={homeCss.timer}>
						<Timer2></Timer2>
					</div>
					<div className={homeCss.headerText}>
						<h2>Studenten Multimedia & Creatieve Technologie nodigen jullie uit op EXPO24: innovatieve afstudeerprojecten, workshops en awards!</h2>
						<h2>Waar? Erasmushogeschool Brussel I Nijverheidskaai 170, 1070 Anderlecht.</h2>
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
						<h4>Eindwerken</h4>
						<div className={homeCss.picture}>
							<img src={eindwerkenFoto} alt="foto" />
						</div>
						<h3>De derdejaar presenteren tijdens expo24 hun eindwerken. Er worden drie awards uitgereikt voor de beste projecten. </h3>
						<a className={homeCss.button2}>
							<Link to="https://multimedia.brussels">EINDWERKEN</Link>
						</a>
					</div>
					<div className={homeCss.items}>
						<h4>Activiteiten</h4>
						<div className={homeCss.picture}>
							<img src={ActiviteitenFoto} alt="foto" />
						</div>
						<h3>Tijdens expo24 worden er doorheen de avond met verschillende activiteiten aangeboden. </h3>
						<a className={homeCss.button2}>
							<Link to="/Activities">ACTIVITEITEN</Link>
						</a>
					</div>
				</div>
			</div>
			<div className={homeCss.content3}>
				<h1>Praktische info</h1>
				<div className={homeCss.PracticalInfo}>
					<div className={homeCss.icons}>
						<div>
							<img src={LocationLogo} alt="" />
						</div>
						<div className={homeCss.logoText}>
							<h4>
								Erasmushogeschool Brussel <br />
								Campus Kaai <br /> Nijverheidskaai 70, <br /> Anderlecht 1070{" "}
							</h4>
							<a className={homeCss.redbutton}>
								<Link to="/Accessibility">Bereikbaarheid</Link>
							</a>
						</div>
					</div>
					<div className={homeCss.icons}>
						<div>
							<img src={HourLogo} alt="" />
						</div>
						<div className={homeCss.logoText}>
							<h4>
								Datum: 21 juni 2024 <br />
								Doorlopend van 17u tot 21u <br />
								Award show: 20u - 20u30
							</h4>

							<a className={homeCss.redbutton}>
								<Link to="/Activities">Programma</Link>
							</a>
						</div>
					</div>

					<div className={homeCss.icons}>
						<div>
							<img src={QuestionLogo} alt="" />
						</div>
						<div className={homeCss.logoText}>
							<h4>
								Nog verdere vragen? <br />
								Check even onze <br />
								veelgestelde vragen
							</h4>
							<a className={homeCss.redbutton}>
								<Link to="/faq">FAQ</Link>
							</a>
						</div>
					</div>
				</div>
				<Link to="/Inschrijving"> <VoteNow /></Link>
			</div>
			<Footer></Footer>
		</>
	);
}

export default Home;
