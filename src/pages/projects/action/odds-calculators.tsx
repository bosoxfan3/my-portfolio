import { Link } from 'react-router-dom';
import Carousel from '../../../components/carousel';
import Highlights from '../../../components/highlights';

const images = [
    {
        src: '/assets/action/odds-calculators/main.png',
        alt: 'The main betting odds calculator',
    },
    {
        src: '/assets/action/odds-calculators/parlay.png',
        alt: 'A parlay calculator',
    },
    {
        src: '/assets/action/odds-calculators/validation.png',
        alt: 'Parlay calculator with an error',
        caption:
            'This shows a sample of the real-time validation and messaging',
    },
    {
        src: '/assets/action/odds-calculators/converter.png',
        alt: 'A tool that shows the equal values for for a specific value in any odds format',
    },
];

const OddsCalculators = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-3xl font-bold mb-2">Odds Calculators</h1>
        <p className="text-zinc-600 mb-2 font-bold">
            Built with React, TypeScript, and Tailwind
        </p>
        <p className="text-zinc-600 mb-6">
            Interactive betting calculators to convert odds, show payouts, and
            learn more about betting
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                I was the sole author of the odds calculators, one of Action
                Network's earliest features. They're currently the #1 search
                response on Google for "odds calculator".
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">My Contributions</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Built the interactive calculator interface with real-time
                    updates
                </li>
                <li>
                    Handled complex odds logic (American / Decimal / Fractional)
                </li>
                <li>
                    Created a clear UX flow for adding/removing legs of a bet
                </li>
                <li>
                    Worked with SEO team to implement dynamic content via
                    ButterCMS
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>Edge cases for multiple odds formats and user inputs</li>
                <li>
                    State management for dynamically adding/removing parlay legs
                </li>
                <li>Performance tuning to avoid unnecessary re-renders</li>
            </ul>
        </section>
        <a
            href="https://www.actionnetwork.com/betting-calculators"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
            View Live
        </a>
        <Highlights
            highlights={['React', 'TypeScript', 'Tailwind', 'ButterCMS']}
        />
    </div>
);

export default OddsCalculators;
