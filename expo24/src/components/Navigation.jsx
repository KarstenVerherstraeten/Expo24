import { Outlet, Link } from "react-router-dom";

function Navigation() {
	return (
		<>
			<nav className="NavContainer">
				<div>
					<ul className="Nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Activities">Activiteiten</Link>
						</li>
						<li>
							<Link to="/Timetable">Timetable</Link>
						</li>
						<li>
							<Link to="/Accessibility">Bereikbaarheid</Link>
						</li>
						<li>
							<Link to="/Practical">Praktische info</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

export default Navigation;
