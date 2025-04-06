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

            <h1 className="text-3xl font-bold mb-2">
                Custom Article Layout System
            </h1>
            <p className="text-zinc-600 mb-6">
                Flexible content system with support for multimedia, inline
                widgets, author metadata, and custom SEO components.
            </p>

            <img
                src="/images/article-example.png"
                alt="Article Screenshot"
                className="rounded-xl shadow mb-8"
            />

            <h2 className="text-xl font-semibold mb-2">💡 Overview</h2>
            <p>
                I worked on building out the article layout framework that
                supports thousands of daily readers across mobile and web. Each
                article is styled dynamically based on sport, author, and inline
                data.
            </p>

            <h2 className="text-xl font-semibold mb-2 mt-6">
                🔨 My Contributions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Built responsive layout system using styled components and
                    utility classes
                </li>
                <li>
                    Integrated author metadata, Twitter embeds, and SEO schema
                </li>
                <li>
                    Worked on lazy loading for performance and Core Web Vitals
                </li>
                <li>
                    Built reusable inline widgets (odds tables, callouts,
                    recaps)
                </li>
            </ul>

            <a
                href="https://www.actionnetwork.com/ncaaf/oregon-ducks-vs-ohio-state-buckeyes-picks-predictions-odds-best-bets-rose-bowl-college-football-playoff-january-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Read Example Article
            </a>
        </div>
    );
}
