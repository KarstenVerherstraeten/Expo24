import React, { useState } from "react";
import FaqCSS from "../styles/Faq.module.css";

function Faq() {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqs = [
		{ question: "Wat is de EXPO 24?", answer: "Answer to question 1." },
		{ question: "Wat is de toegangsprijs?", answer: "Answer to question 2." },
		{
			question: "De openingstijden van de expo?",
			answer: "Answer to question 3.",
		},
		{ question: "Kunnen ouders meekomen?", answer: "Answer to question 4." },
		{
			question: "Zijn er rondleidingen beschikbaar?",
			answer: "Answer to question 5.",
		},
		{
			question: "Kan ik foto's maken tijdens mijn bezoek?",
			answer: "Answer to question 6.",
		},
	].map((faq) => ({
		question: faq.question.toUpperCase(),
		answer: faq.answer,
	}));

	return (
		<div className={FaqCSS.faqContainer}>
			<h1>FAQ - VEELGESTELDE VRAGEN</h1>

			<div className={FaqCSS.accordion}>
				{faqs.map((faq, index) => (
					<div key={index} className={FaqCSS.accordionItem}>
						<div
							className={FaqCSS.accordionTitle}
							onClick={() => handleToggle(index)}
						>
							<span>{faq.question}</span>
							<span
								className={`${FaqCSS.arrow} ${
									activeIndex === index ? FaqCSS.active : ""
								}`}
							>
								<svg
									width="46"
									height="47"
									viewBox="0 0 46 47"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M37.4819 17.4137L22.4622 32.5557L7.65629 17.2046L11.4112 13.4191L22.5156 24.9324L33.7804 13.576L37.4819 17.4137Z"
										fill="black"
									/>
								</svg>
							</span>
						</div>
						<div
							className={`${FaqCSS.accordionContent} ${
								activeIndex === index ? FaqCSS.active : ""
							}`}
						>
							{faq.answer}
						</div>
					</div>
				))}
			</div>

			<div className={FaqCSS.activities}>
				<div className={FaqCSS.textActivities}>
					<h1>BEKIJK DE ACTIVITEITEN</h1>
					<p>
						Ontdek VR-games, 3D-games, live coderen, 3D-printen en
						lasercut-demo's op onze expo!
					</p>
				</div>

				<div className={FaqCSS.btnActivitiesBtn}>
					<button className={FaqCSS.btn}>Activiteiten</button>
				</div>
			</div>
		</div>
	);
}

export default Faq;
