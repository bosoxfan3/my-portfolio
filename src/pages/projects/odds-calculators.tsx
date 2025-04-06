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

            <h1 className="text-3xl font-bold mb-2">Parlay Calculator Tool</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Interactive betting calculator built with React, TypeScript, and
                Tailwind
            </p>

            <img
                src="/images/parlay-calculator.png"
                alt="Parlay Calculator"
                className="rounded-xl shadow mb-8"
            />

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">💡 Overview</h2>
                <p>
                    This tool allows users to calculate potential payouts for
                    parlay bets by entering odds and stake amounts. It's widely
                    used by sports bettors who want to explore risk/reward
                    scenarios.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    🔨 My Contributions
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Built the interactive calculator interface with
                        real-time updates
                    </li>
                    <li>
                        Handled complex odds logic (American / Decimal /
                        Fractional)
                    </li>
                    <li>
                        Created a clear UX flow for adding/removing legs of a
                        bet
                    </li>
                    <li>
                        Worked with product/design to refine usability on mobile
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    🚧 Challenges & Solutions
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Edge cases for multiple odds formats and user inputs
                    </li>
                    <li>
                        State management for dynamically adding/removing parlay
                        legs
                    </li>
                    <li>Performance tuning to avoid unnecessary re-renders</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">🔧 Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-zinc-200 dark:bg-zinc-700 text-sm px-2 py-1 rounded">
                        React
                    </span>
                    <span className="bg-zinc-200 dark:bg-zinc-700 text-sm px-2 py-1 rounded">
                        TypeScript
                    </span>
                    <span className="bg-zinc-200 dark:bg-zinc-700 text-sm px-2 py-1 rounded">
                        Tailwind CSS
                    </span>
                    <span className="bg-zinc-200 dark:bg-zinc-700 text-sm px-2 py-1 rounded">
                        Zustand / useReducer
                    </span>
                </div>
            </section>

            <a
                href="https://www.actionnetwork.com/tools/parlay-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                View Live Tool
            </a>
        </div>
    );
}
