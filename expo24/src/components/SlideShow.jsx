import React from "react";
import slideCSS from "../styles/SlideShow.module.css";
import Voorbeeld from "../assets/react.svg";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/sea-green";
import Eindwerken from "../assets/activityImages/Eindwerken.jpg";
import ContactLeggen from "../assets/activityImages/ContactLeggen.jpg";
import MCT from "../assets/activityImages/Opleiding.jpeg";
import Workshops from "../assets/activityImages/Workshops.jpg";
import Drank from "../assets/activityImages/Eten&Drinken.jpg";
import BBQ from "../assets/activityImages/bbq.jpeg";
import Award from "../assets/activityImages/Award.png";

const Slideshow = () => {
	return (
		<>
			<Splide
				aria-label="Activities"
				options={{
					type: "loop",
					gap: "0",
					perPage: 7,
					perMove: 1,
					pagination: false,
					swipe: true,
					drag: true,
					height: 380,
					focus: "center",
					breakpoints: {
						640: {
							perPage: 1,
						},
						925: {
							perPage: 2,
						},
						1024: {
							perPage: 3,
						},
						1200: {
							perPage: 3,
						},
						1600: {
							perPage: 4,
						},
						1850: {
							perPage: 5,
						},
						2200: {
							perPage: 5,
						},
					},
				}}
			>
				<SplideSlide>
					<div className={slideCSS.tile}>
						<a href="#">
							<Link to="/Activities">
								<div className={slideCSS.imageContainer}>
									<img src={Workshops} alt="Project Background" className={slideCSS.backgroundImage} />
									<div className={slideCSS.glassPanel}>
										{Array.from({ length: 8 }).map((_, index) => (
											<div className={slideCSS.glass} key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
										))}
									</div>
								</div>
								<p className={slideCSS.mainText}>WORKSHOPS</p>
								<div className={slideCSS.infoBox}>
									<p className={slideCSS.infoText}>Er worden verschillende workshops gegeven waaraan je kunt deelnemen zonder je in te schrijven.</p>
								</div>
							</Link>
						</a>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div className={slideCSS.tile}>
						<a href="#">
							<div className={slideCSS.imageContainer}>
								<img src={Drank} alt="Project Background" className={slideCSS.backgroundImage} />
								<div className={slideCSS.glassPanel}>
									{Array.from({ length: 8 }).map((_, index) => (
										<div className={slideCSS.glass} key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
									))}
								</div>
							</div>
							<p className={slideCSS.mainText}>ETEN EN DRINKEN</p>
							<div className={slideCSS.infoBox}>
								<p className={slideCSS.infoText}>Een gratis welkomstdrankje word uitgedeeld en er staan snacks beschikbaar.</p>
							</div>
						</a>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div className={slideCSS.tile}>
						<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfzePgKhlMeJRjyRnlr-gOlAmdLpUHmD7mprBsdGJmGeBcg4Q/viewform">
							<div className={slideCSS.imageContainer}>
								<img src={BBQ} alt="Project Background" className={slideCSS.backgroundImage} />
								<div className={slideCSS.glassPanel}>
									{Array.from({ length: 8 }).map((_, index) => (
										<div className={slideCSS.glass} key={index} style={{ animationDelay: `${index * 0.1}s`, width: `${15}%` }}></div>
									))}
								</div>
							</div>
							<p className={slideCSS.mainText}>BARBECUE</p>
							<div className={slideCSS.infoBox}>
								<p className={slideCSS.infoText}>Er is een barbecue die door de studentenvereniging Enigma wordt georganiseerd.</p>
							</div>
						</a>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div className={slideCSS.tile}>
						<a href="https://multimedia.brussels/Awards">
							<div className={slideCSS.imageContainer}>
								<img src={Award} alt="Project Background" className={slideCSS.backgroundImage} />
								<div className={slideCSS.glassPanel}>
									{Array.from({ length: 8 }).map((_, index) => (
										<div className={slideCSS.glass} key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
									))}
								</div>
							</div>
							<p className={slideCSS.mainText}>AWARD SHOW</p>
							<div className={slideCSS.infoBox}>
								<p className={slideCSS.infoText}>De awardshow met de werken van de derdejaars vindt plaats om 20u30.</p>
							</div>
						</a>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div className={slideCSS.tile}>
						<Link to="https://multimedia.brussels/">
							<div className={slideCSS.imageContainer}>
								<img src={Eindwerken} alt="Project Background" className={slideCSS.backgroundImage} />
								<div className={slideCSS.glassPanel}>
									{Array.from({ length: 8 }).map((_, index) => (
										<div className={slideCSS.glass} key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
									))}
								</div>
							</div>
							<p className={slideCSS.mainText}>EINDWERKEN</p>
							<div className={slideCSS.infoBox}>
								<p className={slideCSS.infoText}>Eindwerken van de derdejaars worden getoond waarop je ook kunt stemmen tijdens de expo.</p>
							</div>
						</Link>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div className={slideCSS.tile}>
						<a href="#">
							<div className={slideCSS.imageContainer}>
								<img src={ContactLeggen} alt="Project Background" className={slideCSS.backgroundImage} />
								<div className={slideCSS.glassPanel}>
									{Array.from({ length: 8 }).map((_, index) => (
										<div className={slideCSS.glass} key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
									))}
								</div>
							</div>
							<p className={slideCSS.mainText}>CONTACTEN LEGGEN</p>
							<div className={slideCSS.infoBox}>
								<p className={slideCSS.infoText}>Er komen veel bedrijven en studenten, dus je hebt de kans om waardevolle connecties maken met iedereen.</p>
							</div>
						</a>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div className={slideCSS.tile}>
						<a target="_blank" href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie">
							<div className={slideCSS.imageContainer}>
								<img src={MCT} alt="Project Background" className={slideCSS.backgroundImage} />
								<div className={slideCSS.glassPanel}>
									{Array.from({ length: 8 }).map((_, index) => (
										<div className={slideCSS.glass} key={index} style={{ animationDelay: `${index * 0.1}s` }}></div>
									))}
								</div>
							</div>
							<p className={slideCSS.mainText}>OPLEIDING: MCT</p>
							<div className={slideCSS.infoBox}>
								<p className={slideCSS.infoText}>De expo wordt georganiseerd door de tweedejaarsstudenten van Multimedia & Creatieve Technologie. Klik hier om een kijkje te nemen op de website van EHB.</p>
							</div>
						</a>
					</div>
				</SplideSlide>
			</Splide>
		</>
	);
};

export default Slideshow;
