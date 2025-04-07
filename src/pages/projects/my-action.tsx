import { Link } from 'react-router-dom';

export default function ExpertPicksProject() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link
                to="/projects"
                className="text-blue-500 hover:underline mb-4 block"
            >
                ← Back to Projects
            </Link>

            <h1 className="text-3xl font-bold mb-2">Expert Picks Page</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Built with React, Tailwind CSS, and TypeScript
            </p>

            <img
                src="/images/nba-picks-full.png"
                alt="NBA Picks Page"
                className="rounded-xl shadow mb-8"
            />

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">💡 Overview</h2>
                <p>
                    The NBA Picks page helps users find expert picks for daily
                    NBA matchups. I was the primary frontend developer
                    responsible for building this page from scratch and bringing
                    designs to life.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    🔨 My Contributions
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Built the layout using Tailwind and responsive grid</li>
                    <li>
                        Created reusable components (pick cards, filters,
                        headers)
                    </li>
                    <li>
                        Connected frontend to REST APIs and handled loading
                        states
                    </li>
                    <li>
                        Worked closely with designers for pixel-perfect
                        implementation
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    🚧 Challenges & Solutions
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Optimized rendering performance for pages with large
                        amounts of pick data
                    </li>
                    <li>
                        Ensured mobile usability across various device widths
                        (iPhone 5–Pro Max)
                    </li>
                    <li>
                        Handled conditional rendering for premium vs free picks
                    </li>
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
                        REST API
                    </span>
                </div>
            </section>

            <a
                href="https://www.actionnetwork.com/picks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                View Live Project
            </a>
        </div>
    );
}
