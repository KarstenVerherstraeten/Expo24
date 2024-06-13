import React, { useState } from "react";
import FaqCSS from "../styles/Faq.module.css";

function Faq() {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqs = [
		{
			question: "Wat is de EXPO 24?",
			answer:
				"Op vrijdag 21 juni organiseren de tweedejaars studenten van onze opleiding een Expo. Dit evenement biedt een unieke gelegenheid om het werk van onze studenten te ontdekken en deel te nemen aan diverse activiteiten. Het is een informele middag en avond vol mini-workshops, live demo's en interactieve sessies. Hoogtepunten zijn een professionele expositie, een showreel van de beste projecten, en een prijsuitreiking voor de topwerken van het jaar. Mis deze kans niet om inzicht te krijgen in de innovatieve projecten en technologieën van onze multimediale talenten. Iedereen is welkom!",
		},
		{
			question: "Wat is de toegangsprijs?",
			answer: "Gratis, je kunt je inschrijven via het inschrijvingsformulier.",
		},
		{
			question: "De openingstijden van de expo?",
			answer: "De openingstijden zijn van 17:00 - 21:00.",
		},
		{
			question: "Kunnen ouders meekomen?",
			answer: "Ja, ouders kunnen meekomen.",
		},
		{
			question: "Zijn er rondleidingen beschikbaar?",
			answer: "Ja, er zijn rondleidingen beschikbaar.",
		},
		{
			question: "Kan ik foto's maken tijdens mijn bezoek?",
			answer:
				"Ja, het is toegestaan om foto's te maken tijdens je bezoek aan de expo.",
		},
	].map((faq) => ({
		question: faq.question.toUpperCase(),
		answer: faq.answer,
	}));

	return (
		<div className={FaqCSS.faqContainer}>
			<div className={FaqCSS.glassPanel}>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				<div className={FaqCSS.glass}></div>
				
				<h1 className={FaqCSS.titleFaq}>FAQ - VEELGESTELDE VRAGEN</h1>
			</div>

			{/* Accordion - Meest voorkomende vragen */}
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
									activeIndex === index ? FaqCSS.open : ""
								}`}
							>
								<span className="material-symbols-outlined">
									{activeIndex === index ? "expand_less" : "expand_more"}
								</span>
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

			{/* Activiteiten call to action */}
			<div className={FaqCSS.activities}>
				<div className={FaqCSS.textActivities}>
					<h1>BEKIJK HET PROGRAMMA</h1>
					<p>
						Ontdek VR-games, 3D-games, live coderen, 3D-printen en <br />
						lasercut-demo's op onze expo!
					</p>
				</div>

				<div className={FaqCSS.btnActivitiesBtn}>
					<a className={FaqCSS.btn} href="">
						PROGRAMMA
					</a>
				</div>
			</div>

			{/* Sociale media links */}
			<div className={FaqCSS.socialMedia}>
				<h1 className={FaqCSS.socialMediaTitle}>
					VOLG ONZE <br /> SOCIALE MEDIA!
				</h1>

				<div className={FaqCSS.socialIcons}>
					<svg
						width="94"
						height="94"
						viewBox="0 0 94 94"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={FaqCSS.icon}
					>
						<path
							d="M46.9997 7.83337C39.2533 7.83337 31.6808 10.1305 25.2399 14.4341C18.7989 18.7378 13.7788 24.8548 10.8144 32.0116C7.84998 39.1684 7.07435 47.0435 8.5856 54.6411C10.0969 62.2387 13.8271 69.2175 19.3047 74.6951C24.7822 80.1726 31.7611 83.9029 39.3587 85.4141C46.9562 86.9254 54.8314 86.1498 61.9881 83.1853C69.1449 80.2209 75.2619 75.2008 79.5656 68.7599C83.8693 62.3189 86.1664 54.7465 86.1664 47C86.156 36.6156 82.0262 26.6594 74.6833 19.3165C67.3403 11.9735 57.3842 7.84374 46.9997 7.83337ZM70.2608 38.0426V40.5728C70.2608 40.7664 70.2221 40.9581 70.1468 41.1366C70.0716 41.315 69.9613 41.4765 69.8226 41.6116C69.6838 41.7467 69.5194 41.8526 69.3391 41.9231C69.1587 41.9936 68.966 42.0272 68.7724 42.022C64.6373 41.7289 60.6812 40.219 57.4024 37.6823V56.2003C57.4019 58.2498 56.9929 60.2787 56.1994 62.1684C55.4058 64.0581 54.2436 65.7707 52.7807 67.2061C51.3046 68.6774 49.5506 69.8402 47.6208 70.627C45.6909 71.4137 43.6238 71.8086 41.5399 71.7886C37.3488 71.7813 33.3263 70.1369 30.3304 67.2061C28.4245 65.2846 27.0517 62.9 26.3471 60.2869C25.6425 57.6739 25.6303 54.9224 26.3119 52.3032C26.9346 49.7887 28.1919 47.4779 29.9661 45.594C31.2893 43.9767 32.9572 42.6756 34.8478 41.7859C36.7385 40.8961 38.8041 40.4402 40.8936 40.4514H44.1053V47.1215C44.1067 47.3152 44.0668 47.507 43.9883 47.684C43.9097 47.8611 43.7943 48.0194 43.6498 48.1484C43.5052 48.2774 43.3349 48.3741 43.15 48.432C42.9652 48.49 42.7701 48.5078 42.5778 48.4845C40.713 47.9243 38.7036 48.1101 36.9732 49.0027C35.2427 49.8952 33.9264 51.4247 33.3017 53.2689C32.677 55.113 32.7927 57.1276 33.6245 58.8881C34.4562 60.6486 35.939 62.0173 37.7603 62.7059C38.8178 63.313 40.0006 63.6694 41.2148 63.7516C42.1548 63.7908 43.0948 63.6733 43.9878 63.3913C45.4792 62.8894 46.7766 61.934 47.6986 60.6588C48.6206 59.3836 49.1211 57.8522 49.1304 56.2786V22.5365C49.1298 22.3516 49.1658 22.1683 49.2363 21.9973C49.3067 21.8262 49.4102 21.6707 49.5408 21.5398C49.6714 21.4088 49.8266 21.3049 49.9975 21.2339C50.1683 21.163 50.3515 21.1265 50.5364 21.1265H56.0785C56.4389 21.126 56.7857 21.2639 57.0474 21.5117C57.309 21.7595 57.4655 22.0983 57.4846 22.4582C57.6873 24.1862 58.2364 25.8555 59.0992 27.3663C59.9619 28.8772 61.1206 30.1984 62.5058 31.2511C64.3783 32.6568 66.6023 33.5187 68.933 33.7421C69.2821 33.772 69.6086 33.9273 69.852 34.1793C70.0954 34.4314 70.2392 34.763 70.2569 35.113L70.2608 38.0426Z"
							fill="black"
						/>
					</svg>

					<a
						href="https://www.instagram.com/erasmushogeschool/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							width="94"
							height="94"
							viewBox="0 0 94 94"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={FaqCSS.icon}
						>
							<path
								d="M30.5497 7.83337H63.4497C75.983 7.83337 86.1663 18.0167 86.1663 30.55V63.45C86.1663 69.4749 83.773 75.2529 79.5128 79.5131C75.2526 83.7734 69.4745 86.1667 63.4497 86.1667H30.5497C18.0163 86.1667 7.83301 75.9834 7.83301 63.45V30.55C7.83301 24.5252 10.2264 18.7471 14.4866 14.4869C18.7468 10.2267 24.5248 7.83337 30.5497 7.83337ZM29.7663 15.6667C26.0268 15.6667 22.4404 17.1522 19.7961 19.7965C17.1519 22.4408 15.6663 26.0272 15.6663 29.7667V64.2334C15.6663 72.0275 21.9722 78.3334 29.7663 78.3334H64.233C67.9726 78.3334 71.559 76.8478 74.2032 74.2036C76.8475 71.5593 78.333 67.9729 78.333 64.2334V29.7667C78.333 21.9725 72.0272 15.6667 64.233 15.6667H29.7663ZM67.5622 21.5417C68.8606 21.5417 70.1059 22.0575 71.0241 22.9757C71.9422 23.8938 72.458 25.1391 72.458 26.4375C72.458 27.736 71.9422 28.9813 71.0241 29.8994C70.1059 30.8176 68.8606 31.3334 67.5622 31.3334C66.2637 31.3334 65.0184 30.8176 64.1003 29.8994C63.1821 28.9813 62.6663 27.736 62.6663 26.4375C62.6663 25.1391 63.1821 23.8938 64.1003 22.9757C65.0184 22.0575 66.2637 21.5417 67.5622 21.5417ZM46.9997 27.4167C52.1935 27.4167 57.1746 29.4799 60.8472 33.1525C64.5198 36.8251 66.583 41.8062 66.583 47C66.583 52.1939 64.5198 57.175 60.8472 60.8475C57.1746 64.5201 52.1935 66.5834 46.9997 66.5834C41.8059 66.5834 36.8248 64.5201 33.1522 60.8475C29.4796 57.175 27.4163 52.1939 27.4163 47C27.4163 41.8062 29.4796 36.8251 33.1522 33.1525C36.8248 29.4799 41.8059 27.4167 46.9997 27.4167ZM46.9997 35.25C43.8834 35.25 40.8947 36.488 38.6912 38.6915C36.4876 40.8951 35.2497 43.8837 35.2497 47C35.2497 50.1163 36.4876 53.105 38.6912 55.3085C40.8947 57.5121 43.8834 58.75 46.9997 58.75C50.116 58.75 53.1046 57.5121 55.3082 55.3085C57.5117 53.105 58.7497 50.1163 58.7497 47C58.7497 43.8837 57.5117 40.8951 55.3082 38.6915C53.1046 36.488 50.116 35.25 46.9997 35.25Z"
								fill="black"
							/>
						</svg>
					</a>

					<a
						href="https://www.facebook.com/erasmushogeschool"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							width="93"
							height="93"
							viewBox="0 0 93 93"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={FaqCSS.icon}
						>
							<path
								d="M85.25 46.5C85.25 25.11 67.89 7.75 46.5 7.75C25.11 7.75 7.75 25.11 7.75 46.5C7.75 65.255 21.08 80.8712 38.75 84.475V58.125H31V46.5H38.75V36.8125C38.75 29.3337 44.8337 23.25 52.3125 23.25H62V34.875H54.25C52.1187 34.875 50.375 36.6187 50.375 38.75V46.5H62V58.125H50.375V85.0563C69.9437 83.1188 85.25 66.6113 85.25 46.5Z"
								fill="black"
							/>
						</svg>
					</a>

					<a
						href="https://www.linkedin.com/school/erasmushogeschool-brussel/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							width="86"
							height="86"
							viewBox="0 0 86 86"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={FaqCSS.icon}
						>
							<path
								d="M42.9997 1.71997C20.2011 1.71997 1.71973 20.2014 1.71973 43C1.71973 65.7986 20.2011 84.28 42.9997 84.28C65.7983 84.28 84.2797 65.7986 84.2797 43C84.2797 20.2014 65.7983 1.71997 42.9997 1.71997ZM32.8947 60.1097H24.5355V33.2089H32.8947V60.1097ZM28.6635 29.9065C26.0233 29.9065 24.3162 28.036 24.3162 25.7226C24.3162 23.3619 26.0749 21.5473 28.771 21.5473C31.4671 21.5473 33.1183 23.3619 33.1699 25.7226C33.1699 28.036 31.4671 29.9065 28.6635 29.9065ZM63.4247 60.1097H55.0655V45.2016C55.0655 41.7315 53.8529 39.3751 50.83 39.3751C48.5209 39.3751 47.1492 40.9704 46.5429 42.5055C46.3193 43.0516 46.2634 43.8256 46.2634 44.5953V60.1054H37.8999V41.7874C37.8999 38.4291 37.7924 35.6212 37.6806 33.2046H44.9433L45.326 36.9413H45.4937C46.5945 35.1869 49.2906 32.5983 53.8013 32.5983C59.301 32.5983 63.4247 36.2834 63.4247 44.204V60.1097Z"
								fill="black"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Faq;
