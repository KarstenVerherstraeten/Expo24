import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from 'react-ga4';
import Navigation from "./components/Navigation";
import Accessebiltity from "./pages/Accessibility";
import Activities from "./pages/Activities";
import Timetable from "./pages/Timetable";
import Inschrijving from "./pages/Inschrijving";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import PageNotFound from "./pages/PageNotFound";
import Detail from "./pages/Detail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	ReactGA.initialize('G-CK17HNSZNZ');
	return (
		<Router>
			<ScrollToTop></ScrollToTop>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="Accessibility" element={<Accessebiltity />} />
					<Route path="Activities" element={<Activities />} />
					<Route path="Timetable" element={<Timetable />} />
					<Route path="Inschrijving" element={<Inschrijving />} />
					<Route path="Confirmation" element={<Confirmation />} />
					<Route path="Faq" element={<Faq />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="activity/:title" element={<Detail />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
