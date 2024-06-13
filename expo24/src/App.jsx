import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Accessebiltity from "./pages/Accessibility";
import Activities from "./pages/Activities";
import Practical from "./pages/Practical";
import Timetable from "./pages/Timetable";
import HomePage from "./pages/HomePage";
import Inschrijvingforum from "./pages/Inschrijvingforum";
import Inschrijving from "./pages/Inschrijving";
import Confirmation from "./pages/Confirmation";
import Programma from "./pages/Programma";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import PageNotFound from "./pages/PageNotFound";
import Detail from "./pages/Detail";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<HomePage />} />
					<Route path="Accessibility" element={<Accessebiltity />} />
					<Route path="Home" element={<Home />} />
					<Route path="Activities" element={<Activities />} />
					<Route path="Practical" element={<Practical />} />
					<Route path="Timetable" element={<Timetable />} />
					<Route path="Inschrijvingforum" element={<Inschrijvingforum />} />
					<Route path="Confirmation" element={<Confirmation />} />
					<Route path="Programma" element={<Programma />} />
					<Route path="Faq" element={<Faq />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="activity/:title" element={<Detail />} />
					<Route path="inschrijving" element={<Inschrijving />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
