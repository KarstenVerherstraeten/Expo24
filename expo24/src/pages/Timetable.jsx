import Timer from "../components/Timer";
import style from "../styles/Timetable.module.css";
import { Outlet, Link } from "react-router-dom";
import activitiesData from "../../tametable.json";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../components/Footer";

function Timetable() {
	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: "/timetable", title: "TimeTable" });
	}, []);

	const sortedActivities = {
		MAKERSPACE: activitiesData
			.filter((activity) => activity.locatie === "MAKERSPACE")
			.sort((a, b) => {
				const aStartTime = parseFloat(a.hours[0].start.replace("u", "").replace(":", "."));
				const bStartTime = parseFloat(b.hours[0].start.replace("u", "").replace(":", "."));
				return aStartTime - bStartTime;
			}),
		MEETUP: activitiesData.filter((activity) => activity.locatie === "MEETUP"),
		GALLERY: activitiesData.filter((activity) => activity.locatie === "GALLERY"),
		TUIN: activitiesData.filter((activity) => activity.locatie === "TUIN"),
	};

	function toggleActivities(section) {
		const sectionActivities = document.querySelectorAll(`.${section}Activity`);
		sectionActivities.forEach((activity) => {
			activity.classList.toggle(style.hidden);
		});

		const arrowSpan = document.querySelector(`.${style[section + "Title"]} .material-symbols-outlined`);
		arrowSpan.classList.toggle(style.arrowRotated);
	}

	return (
		<>
			<div className={style.glassPanel}>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<h1 className={style.titleActivities}>TIMETABLE</h1>
			</div>
			<div className={style.switch}>
				<Link to="/Timetable">TIMETABLE</Link>
				<Link to="/Activities">OVERZICHT</Link>
			</div>
			<div className={style.timetableWrapper}>
				<div className={style.list}>
					<div className={style.makerspaceTitle} onClick={() => toggleActivities("makerspace")}>
						<h1>
							MAKERSPACE{" "}
							<span id={style.Arrow} className="material-symbols-outlined">
								keyboard_arrow_down
							</span>
						</h1>
					</div>
					{sortedActivities.MAKERSPACE.map((activity, index) => (
						<div key={index} className={`${style.mobileActivity} ${style.borderM} makerspaceActivity ${style.hidden}`}>
							<p className={style.activity}>
								{activity.title}, <br /> {activity.hours[0].start} - {activity.hours[0].end}
							</p>
						</div>
					))}
					<p className={style.activityLiveCoding}>LIVE CODING</p>
					<p className={style.activityPrinting}>3D PRINTING</p>
					<p className={style.activityApple}>APPLE VISION PRO</p>
					<p className={style.activityGames}>3D-GAMES</p>
					<p className={style.activityFrontend}>FRONTEND</p>
					<p className={style.activityBackend}>BACKEND</p>
					<p className={style.activityLasercut}>LASERCUT</p>

					<div className={style.meetupTitle} onClick={() => toggleActivities("meetup")}>
						<h1>
							MEETUP{" "}
							<span id={style.Arrow} className="material-symbols-outlined">
								keyboard_arrow_down
							</span>
						</h1>
					</div>
					{sortedActivities.MEETUP.map((activity, index) => (
						<div key={index} className={`${style.mobileActivity} ${style.borderMeetup} meetupActivity ${style.hidden}`}>
							<p className={style.activity}>
								{activity.title}, <br /> {activity.hours[0].start} - {activity.hours[0].end}
							</p>
						</div>
					))}
					<p className={style.activityMeetup}>MEETUP</p>

					<div className={style.galleryTitle} onClick={() => toggleActivities("gallery")}>
						<h1>
							GALLERY{" "}
							<span id={style.Arrow} className="material-symbols-outlined">
								keyboard_arrow_down
							</span>
						</h1>
					</div>
					{sortedActivities.GALLERY.map((activity, index) => (
						<div key={index} className={`${style.mobileActivity} ${style.borderGallery} galleryActivity ${style.hidden}`}>
							<p className={style.activity}>
								{activity.title}, <br /> {activity.hours[0].start} - {activity.hours[0].end}
							</p>
						</div>
					))}
					<p className={style.activityEindwerken}>EINDWERKEN</p>

					<div className={style.tuinTitle} onClick={() => toggleActivities("tuin")}>
						<h1>
							TUIN{" "}
							<span id={style.Arrow} className="material-symbols-outlined">
								keyboard_arrow_down
							</span>
						</h1>
					</div>
					{sortedActivities.TUIN.map((activity, index) => (
						<div key={index} className={`${style.mobileActivity} ${style.borderTuin} tuinActivity ${style.hidden}`}>
							<p className={style.activity}>
								{activity.title}, <br /> {activity.hours[0].start} - {activity.hours[0].end}
							</p>
						</div>
					))}
					<p className={style.activityBBQ}>BBQ</p>
					<p className={style.activityDrankje}>DRANKJE + MUZIEK</p>
					<p className={style.activitySlotshow}>SLOTSHOW</p>
				</div>
				<div className={style.timetable}>
					<p className={style.hour}>
						<span className={style.timespan}>17.00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>17:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>18:00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>18:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>19:00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>19:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>20:00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>20:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>21:00</span>
					</p>

					<div className={`${style.liveCoding} ${style.liveCoding1}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding2}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding3}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding4}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding5}`}></div>

					<div className={`${style.printing} ${style.printing1}`}></div>
					<div className={`${style.printing} ${style.printing2}`}></div>
					<div className={`${style.printing} ${style.printing3}`}></div>
					<div className={`${style.printing} ${style.printing4}`}></div>
					<div className={`${style.printing} ${style.printing5}`}></div>

					<div className={style.apple}></div>
					<div className={style.games}></div>
					<div className={style.frontend}></div>
					<div className={style.backend}></div>
					<div className={style.lasercut}></div>

					<div className={style.meetup}></div>

					<div className={style.eindwerken}></div>

					<div className={style.BBQ}></div>
					<div className={style.Drankje}></div>
					<div className={style.Slotshow}></div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Timetable;
