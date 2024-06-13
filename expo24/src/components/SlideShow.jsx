import React, { useRef } from "react";
import slideCSS from "../styles/SlideShow.module.css";
import Voorbeeld from "../assets/react.svg";
import { Link } from "react-router-dom";

const Slideshow = () => {
	const scrollRef = useRef(null);

	const handleScroll = (event) => {
		const container = scrollRef.current;
		if (event.deltaY !== 0) {
			event.preventDefault();
			container.scrollTo({
				left: container.scrollLeft + event.deltaY,
				behavior: "smooth",
			});
		}
	};

	return (
		<div
			className={slideCSS.scrollContainer}
			ref={scrollRef}
			onWheel={handleScroll}
		>
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

			{/* Other tiles... */}
		</div>
	);
};

export default Slideshow;
