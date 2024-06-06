import React from "react";
import "../styles/Inschrijvingforum.css";

function Inschrijvingforum() {
	return (
		<>
			<div className="container-3">
				<div className="glass-panel-3">
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
					<div className="glass"></div>
				</div>
				<div className="content-3">
					<svg
						className="svg-1"
						width="328"
						height="62"
						viewBox="0 0 358 92"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M358 0H0V91.2723H358V0ZM72.45 58.7999C76.75 62.6499 82.65 64.5999 88.85 64.5999C97.35 64.5999 103 60.3499 103 53.1999V53.0999C103 46.5499 98 43.9499 89.95 42.1999C85.1 41.0999 83.9 40.3999 83.9 38.7999V38.6999C83.9 37.4499 85.05 36.4499 87.4 36.4499C90.5 36.4499 94 37.6499 97.2 39.8999L102.05 33.0499C98.25 29.9999 93.6 28.3999 87.65 28.3999C79.25 28.3999 74.1 33.0999 74.1 39.5999V39.6999C74.1 46.8999 79.85 48.9999 87.3 50.6999C92.05 51.7999 93.2 52.5999 93.2 54.0499V54.1499C93.2 55.6499 91.8 56.5499 89.2 56.5499C85.15 56.5499 81.3 55.0999 77.85 52.3499L72.45 58.7999ZM107.917 28.9999V63.9999H117.667V28.9999H107.917ZM122.875 46.5999C122.875 57.1999 131.025 64.6999 141.925 64.6999C148.275 64.6999 153.425 62.3499 157.125 59.2999V43.5499H141.025V50.6499H147.925V54.8999C146.475 55.8499 144.675 56.3499 142.325 56.3499C136.775 56.3499 132.825 52.2999 132.825 46.6499V46.5499C132.825 41.1999 136.725 36.9499 141.775 36.9499C145.225 36.9499 147.725 38.1499 150.225 40.2499L155.925 33.3999C152.225 30.1999 147.875 28.2999 141.725 28.2999C130.875 28.2999 122.875 36.2999 122.875 46.4999V46.5999ZM171.552 28.9999H162.502V63.9999H172.102V44.7999L187.052 63.9999H195.552V28.9999H185.952V47.4999L171.552 28.9999ZM215.177 48.6499C215.177 59.5999 221.427 64.6499 231.377 64.6499C241.327 64.6499 247.777 59.6999 247.777 48.3999V28.9999H237.927V48.6999C237.927 53.5999 235.377 55.8999 231.477 55.8999C227.577 55.8999 225.027 53.4999 225.027 48.4499V28.9999H215.177V48.6499ZM268.518 28.9999H253.518V63.9999H263.218V53.9999H268.018C276.718 53.9999 283.068 49.6499 283.068 41.3999V41.2999C283.068 33.5499 277.368 28.9999 268.518 28.9999ZM267.818 46.3999H263.218V37.1499H267.768C271.268 37.1499 273.368 38.7499 273.368 41.7499V41.8499C273.368 44.5999 271.268 46.3999 267.818 46.3999Z"
							fill="white"
						/>
					</svg>

					<form className="form-3" action="">
						<div className="tabon">
							<div className="section-1">
								<input type="text" id="name" name="name" placeholder="Name" />

								<input
									type="text"
									id="forname"
									name="forname"
									placeholder="Forname"
								/>
							</div>

							<div className="section-2">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
								/>

								<input
									type="number"
									id="numberOfPeople"
									name="numberOfPeople"
									placeholder="Number of People"
								/>
							</div>

							<div className="occupation-3">
								<select
									className="select-2"
									id="occupation-3"
									name="occupation"
									value=""
								>
									<option value="">Occupation</option>
									<option value="student">Student</option>
									<option value="docent">Docent</option>
									<option value="ehb-staff">EHB Staff</option>
									<option value="bedrijf">Bedrijf</option>
									<option value="ouder">Ouder</option>
									<option value="alumni">Alumni</option>
									<option value="alumni">Andere</option>
								</select>

								<input
									type="text"
									id="bedrijf"
									name="bedrijf"
									placeholder="Enkel voor bedrijven"
									disabled
								/>
							</div>
						</div>

						<h2>PROJECTS</h2>

						{/* 1 grote div project-checkbox-container */}

						<div className="project-checkbox-container">
							{/* div reeh */}

							<div className="reeh">
								<div className="project-checkbox">
									<input
										type="checkbox"
										id="project-3d-games"
										name="project-3d-games"
									/>
									<label htmlFor="project-3d-games">3D-Games</label>
								</div>

								<div className="project-checkbox">
									<input
										type="checkbox"
										id="project-vr-games"
										name="project-vr-games"
									/>
									<label htmlFor="project-vr-games">VR-Games</label>
								</div>
							</div>

							{/* einde div reeh */}

							{/* begin div project-checkbox-container-2 */}

							<div className="project-checkbox-container-2">
								<div className="project-checkbox">
									<input
										type="checkbox"
										id="project-live-coderen"
										name="project-live-coderen"
									/>
									<label htmlFor="project-live-coderen">Live coderen</label>
								</div>

								<div className="project-checkbox">
									<input
										type="checkbox"
										id="project-3d-printen"
										name="project-3d-printen"
									/>
									<label htmlFor="project-3d-printen">Demo 3D-Printen</label>
								</div>

                                <div className="project-checkbox">
								<input
									type="checkbox"
									id="project-new-checkbox"
									name="project-new-checkbox"
								/>
								<label htmlFor="project-new-checkbox">Demo Lasersnijden</label>
							</div>
							</div>

							{/* eind div project-checkbox-container-2 */}

							
						</div>

						{/* eind div project-checkbox-container */}

                        <button id="Continue">Continue</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Inschrijvingforum;
