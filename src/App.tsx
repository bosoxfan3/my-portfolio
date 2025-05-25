import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './pages/bio';
import Projects from './pages/projects';
import PromptMusic from './pages/projects/personal/prompt-music';
import AppointmentScheduler from './pages/projects/personal/appointment-scheduler';
import BoredBeforeBoard from './pages/projects/personal/bored-before-board';
import Betslip from './pages/projects/action/betslip';
import MyAction from './pages/projects/action/my-action';
import ExpertPicks from './pages/projects/action/expert-picks';
import OddsCalculators from './pages/projects/action/odds-calculators';
import Articles from './pages/projects/action/articles';
import OddsTools from './pages/projects/action/odds-tools';
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

                <Route
                    path="/projects/personal/prompt-music"
                    element={<PromptMusic />}
                />
                <Route
                    path="/projects/personal/appointment-scheduler"
                    element={<AppointmentScheduler />}
                />
                <Route
                    path="/projects/personal/bored-before-board"
                    element={<BoredBeforeBoard />}
                />

                <Route path="/projects/action/betslip" element={<Betslip />} />
                <Route
                    path="/projects/action/my-action"
                    element={<MyAction />}
                />
                <Route
                    path="/projects/action/expert-picks"
                    element={<ExpertPicks />}
                />
                <Route
                    path="/projects/action/odds-calculators"
                    element={<OddsCalculators />}
                />
                <Route
                    path="/projects/action/articles"
                    element={<Articles />}
                />
                <Route
                    path="/projects/action/odds-tools"
                    element={<OddsTools />}
                />

                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
