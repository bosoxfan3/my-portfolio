import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import ExpertPicks from './pages/projects/expert-picks';
import OddsCalculators from './pages/projects/odds-calculators';
import Articles from './pages/projects/articles';
import OddsTools from './pages/projects/odds-tools';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                    path="/projects/expert-picks"
                    element={<ExpertPicks />}
                />
                <Route
                    path="/projects/odds-calculators"
                    element={<OddsCalculators />}
                />
                <Route path="/projects/articles" element={<Articles />} />
                <Route path="/projects/odds-tools" element={<OddsTools />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
