import React, { useState, useEffect } from "react";
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
    const eventEndDate = new Date("Jun 28, 2024 12:00:00").getTime(); // Replace with your event end date

    const [isEventOngoing, setIsEventOngoing] = useState(true);

    useEffect(() => {
        const currentDate = new Date();
        if (currentDate > eventEndDate) {
            setIsEventOngoing(false);
        }
    }, []);

    ReactGA.initialize('G-CK17HNSZNZ');

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {isEventOngoing ? (
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
                ) : (
                    <Route path="/" element={<AfterPage />} />
                )}
            </Routes>
        </Router>
    );
}

export default App;
