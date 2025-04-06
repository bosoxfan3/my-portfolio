import { Link } from 'react-router-dom';

export default function OddsCalculatorsProject() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link
                to="/projects"
                className="text-blue-500 hover:underline mb-4 block"
            >
                ← Back to Projects
            </Link>

            <h1 className="text-3xl font-bold mb-2">Live Odds Dashboard</h1>
            <p className="text-zinc-600 mb-6">
                Real-time odds page for major US sportsbooks, showing spreads,
                totals, and moneylines across multiple sports.
            </p>

            <img
                src="/images/odds-page.png"
                alt="Odds Page Screenshot"
                className="rounded-xl shadow mb-8"
            />

            <h2 className="text-xl font-semibold mb-2">💡 Overview</h2>
            <p>
                I was a key contributor to the Odds Page, one of Action
                Network's most-visited features. It serves as a dynamic,
                real-time dashboard for comparing sportsbook lines across the
                industry.
            </p>

            <h2 className="text-xl font-semibold mb-2 mt-6">
                🔨 My Contributions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Created the responsive table layout with sticky columns and
                    scroll behavior
                </li>
                <li>
                    Connected odds data to internal API and built live-refresh
                    logic
                </li>
                <li>
                    Developed sorting, filtering, and toggleable views for
                    moneylines, spreads, totals
                </li>
            </ul>

            <a
                href="https://www.actionnetwork.com/odds"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                View Odds Page
            </a>
        </div>
    );
}
