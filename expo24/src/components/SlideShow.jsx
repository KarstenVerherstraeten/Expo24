import React from "react";
import slideCSS from "../styles/SlideShow.module.css";
import Voorbeeld from "../assets/react.svg";
import { Link } from "react-router-dom";

const Slideshow = () => {
	return (
		<div className={slideCSS.scrollContainer}>
			<div className={slideCSS.tile}>
				<Link to="/Activities">
					<div className={slideCSS.imageContainer}>
						<img
							src={Voorbeeld}
							alt="Project Background"
							className={slideCSS.backgroundImage}
						/>
						<div className={slideCSS.glassPanel}>
							{Array.from({ length: 8 }).map((_, index) => (
								<div
									className={slideCSS.glass}
									key={index}
									style={{ animationDelay: `${index * 0.1}s` }}
								></div>
							))}
						</div>
					</div>
					<div className={slideCSS.infoBox}>
						<p className={slideCSS.infoText}>WORKSHOPS</p>
					</div>
				</Link>
			</div>

			<div className={slideCSS.tile}>
				<div className={slideCSS.imageContainer}>
					<img
						src={Voorbeeld}
						alt="Project Background"
						className={slideCSS.backgroundImage}
					/>
					<div className={slideCSS.glassPanel}>
						{Array.from({ length: 8 }).map((_, index) => (
							<div
								className={slideCSS.glass}
								key={index}
								style={{ animationDelay: `${index * 0.1}s` }}
							></div>
						))}
					</div>
				</div>
				<div className={slideCSS.infoBox}>
					<p className={slideCSS.infoText}>ETEN EN DRINKEN</p>
				</div>
			</div>

			<div className={slideCSS.tile}>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSfzePgKhlMeJRjyRnlr-gOlAmdLpUHmD7mprBsdGJmGeBcg4Q/viewform">
				<div className={slideCSS.imageContainer}>
					<img
						src={Voorbeeld}
						alt="Project Background"
						className={slideCSS.backgroundImage}
					/>
					<div className={slideCSS.glassPanel}>
						{Array.from({ length: 8 }).map((_, index) => (
							<div
								className={slideCSS.glass}
								key={index}
								style={{ animationDelay: `${index * 0.1}s` }}
							></div>
						))}
					</div>
				</div>
				<div className={slideCSS.infoBox}>
					<p className={slideCSS.infoText}>BARBECUE</p>
				</div>
				</a>
			</div>

			<div className={slideCSS.tile}>
				<div className={slideCSS.imageContainer}>
					<img
						src={Voorbeeld}
						alt="Project Background"
						className={slideCSS.backgroundImage}
					/>
					<div className={slideCSS.glassPanel}>
						{Array.from({ length: 8 }).map((_, index) => (
							<div
								className={slideCSS.glass}
								key={index}
								style={{ animationDelay: `${index * 0.1}s` }}
							></div>
						))}
					</div>
				</div>
				<div className={slideCSS.infoBox}>
					<p className={slideCSS.infoText}>AWARD SHOW</p>
				</div>
			</div>

			<div className={slideCSS.tile}>
				<Link to="/Activities">
					<div className={slideCSS.imageContainer}>
						<img
							src={Voorbeeld}
							alt="Project Background"
							className={slideCSS.backgroundImage}
						/>
						<div className={slideCSS.glassPanel}>
							{Array.from({ length: 8 }).map((_, index) => (
								<div
									className={slideCSS.glass}
									key={index}
									style={{ animationDelay: `${index * 0.1}s` }}
								></div>
							))}
						</div>
					</div>
					<div className={slideCSS.infoBox}>
						<p className={slideCSS.infoText}>EINDWERKEN</p>
					</div>
				</Link>
			</div>

			<div className={slideCSS.tile}>
				<div className={slideCSS.imageContainer}>
					<img
						src={Voorbeeld}
						alt="Project Background"
						className={slideCSS.backgroundImage}
					/>
					<div className={slideCSS.glassPanel}>
						{Array.from({ length: 8 }).map((_, index) => (
							<div
								className={slideCSS.glass}
								key={index}
								style={{ animationDelay: `${index * 0.1}s` }}
							></div>
						))}
					</div>
				</div>
				<div className={slideCSS.infoBox}>
					<p className={slideCSS.infoText}>CONTACTEN LEGGEN</p>
				</div>
			</div>

			<div className={slideCSS.tile}>
				<a href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie">
				<div className={slideCSS.imageContainer}>
					<img
						src={Voorbeeld}
						alt="Project Background"
						className={slideCSS.backgroundImage}
					/>
					<div className={slideCSS.glassPanel}>
						{Array.from({ length: 8 }).map((_, index) => (
							<div
								className={slideCSS.glass}
								key={index}
								style={{ animationDelay: `${index * 0.1}s` }}
							></div>
						))}
					</div>
				</div>
				<div className={slideCSS.infoBox}>
					<p className={slideCSS.infoText}>
						OPLEIDING: MCT
					</p>
				</div>
				</a>
			</div>
		</div>
	);
};

export default Slideshow;
