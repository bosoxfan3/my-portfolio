import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './pages/bio';
import Projects from './pages/projects';
import Betslip from './pages/projects/betslip';
import MyAction from './pages/projects/my-action';
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
                <Route path="/" element={<Bio />} />

                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/betslip" element={<Betslip />} />
                <Route path="/projects/my-action" element={<MyAction />} />
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
