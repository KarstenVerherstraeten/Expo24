import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Accessebiltity from "./pages/Accessibility.jsx";
import Activities from "./pages/Activities.jsx";
import Practical from "./pages/Practical.jsx";
import Timetable from "./pages/Timetable.jsx";
import HomePage from "./pages/HomePage.jsx";
import Inschrijving from "./pages/Inschrijving.jsx";
import Confirmation from "./pages/Confirmation.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes classname="Nav">
					<Route path="/" element={<Navigation />}>
						<Route index element={<HomePage />} />
						<Route path="Accessibility" element={<Accessebiltity />} />
						<Route path="Activities" element={<Activities />} />
						<Route path="Practical" element={<Practical />} />
						<Route path="Timetable" element={<Timetable />} />
						<Route path="Inschrijving" element={<Inschrijving />} />
						<Route path="Confirmation" element={<Confirmation />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
