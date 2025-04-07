import { Link } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Highlights from '../../components/highlights';

const images = [
    {
        src: '/assets/odds-tools/main.png',
        alt: 'A sample of the odds table',
    },
    {
        src: '/assets/odds-tools/markets.png',
        alt: 'Showing the odds table with all available markets for a game',
    },
    {
        src: '/assets/odds-tools/public-betting.png',
        alt: 'Sample of the public betting page',
    },
    {
        src: '/assets/odds-tools/signals.png',
        alt: 'Sample of sharp report',
        caption:
            'The PRO Report highlights when certain thresholds have been hit for important betting factors',
    },
    {
        src: '/assets/odds-tools/modal.png',
        alt: 'A modal showing more sharp report signal data',
        caption:
            'Clicking any of the signal icons brings up a modal with more details',
    },
    {
        src: '/assets/odds-tools/grades.png',
        alt: 'A sample of the projections table',
        caption:
            'The PRO Projections table uses grades and corresponding colors to highlight recommended bets',
    },
];

const OddsTools = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">Odds Tools</h1>
        <p className="text-zinc-600 mb-2 font-bold">
            Built with React, TypeScript, and Emotion (a CSS-in-JS library)
        </p>
        <p className="text-zinc-600 mb-6">
            Real-time odds pages for major US sportsbooks, showing odds and data
            across multiple sports.
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                I was a key contributor to the Odds Tools, some of Action
                Network's most-visited and most well-known features. They serve
                as a dynamic, real-time dashboard for comparing sportsbook lines
                across the industry as well as gaining quick insights and
                projections.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">My Contributions</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Created the responsive table layouts with sticky columns and
                    scroll behavior
                </li>
                <li>
                    Connected odds data to internal API and built live-refresh
                    logic
                </li>
                <li>Developed sorting, filtering, and toggleable views</li>
                <li>
                    Created the icon cells and the pop-up modal on the PRO
                    Report
                </li>
                <li>
                    Created the 'Grade' and 'Edge' cells on the PRO Projections
                    page
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    I had to work with the design team to create different
                    layouts for mobile and desktop.
                </li>
                <li>
                    How to show tons of data in a small space. We ended up
                    creating a sticky table that can scroll both vertically and
                    horizontally
                </li>
                <li>
                    The PRO Report modal required a lot of components that were
                    not commonly used
                </li>
            </ul>
        </section>
        <a
            href="https://www.actionnetwork.com/odds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6 mr-6"
        >
            View Live Odds Page
        </a>
        <a
            href="https://www.actionnetwork.com/sharp-report"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6 mr-6"
        >
            View PRO Report Page
        </a>
        <a
            href="https://www.actionnetwork.com/projections"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
        >
            View PRO Projections Page
        </a>
        <Highlights
            highlights={[
                'React',
                'TypeScript',
                'Emotion',
                'REST API',
                'Next.js',
            ]}
        />
    </div>
);

export default OddsTools;
