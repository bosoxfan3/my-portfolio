import { Link } from 'react-router-dom';
import Carousel from '../../../components/carousel';
import Highlights from '../../../components/highlights';

const images = [
    {
        src: '/assets/personal/changelog-generator/main.png',
        alt: 'The user can input the repo owner and project name from any public project',
    },
    {
        src: '/assets/personal/changelog-generator/date-range.png',
        alt: 'The user can choose a date range to fetch commits from',
    },
    {
        src: '/assets/personal/changelog-generator/edit-changelog.png',
        alt: 'The user can edit the changelog title and description',
    },
    {
        src: '/assets/personal/changelog-generator/changelog.png',
        alt: 'The changelog is published to a separate url. All past changelogs for this repo can be seen here',
    },
];

const ChangelogGenerator = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">Changelog Generator</h1>
        <div className="pb-2">
            <a
                className="text-blue-600 font-bold mr-6"
                href="https://changelog-generator-pi.vercel.app"
                target="_blank"
                rel="noreferrer"
            >
                Live Project
            </a>
            <a
                className="text-blue-600 font-bold"
                href="https://github.com/bosoxfan3/changelog-generator"
                target="_blank"
                rel="noreferrer"
            >
                GitHub Repository
            </a>
        </div>
        <p className="text-zinc-600 mb-2 font-bold">
            Built with React, TypeScript, CSS, Next.js, GitHub API, and OpenAI
            API
        </p>
        <p className="text-zinc-600 mb-6">
            Generate a changelog that can be edited/published based on a
            selected range of commits from a public repository.
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                The Changelog Generator takes a public repository name and date
                range, fetches commits from GitHub’s API, and summarizes them
                using ChatGPT. The user can review, edit, and publish a clean
                changelog to a unique URL.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What I Built</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Built the full-stack app using React, TypeScript, and
                    Next.js
                </li>
                <li>
                    Used Vercel for frontend deployment and Railway for
                    backend/database
                </li>
                <li>
                    Integrated GitHub’s REST API to fetch commits based on
                    user-selected date range
                </li>
                <li>
                    Used OpenAI's GPT-4 API to generate commit summaries in
                    readable bullet point format
                </li>
                <li>
                    Built the ability to save and view past changelogs per repo
                    via URL slug
                </li>
                <li>
                    Handled commit normalization and deduplication logic on the
                    backend
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Had to filter out irrelevant commits (e.g. merges, minor
                    version bumps) before summarizing with ChatGPT to improve
                    quality of output
                </li>
                <li>
                    Learned how to balance state changes (loading, error,
                    success) without any third-party state management libraries
                    like Zustand or Redux
                </li>
                <li>
                    Encountered inconsistencies in GitHub’s API pagination,
                    especially for repos with high commit volume—resolved with
                    dynamic pagination and caching
                </li>
                <li>
                    Implemented fallback UI for when the repo is not found, has
                    no commits in range, or when GPT output is empty or
                    malformed
                </li>
            </ul>
        </section>
        <Highlights
            highlights={[
                'React',
                'TypeScript',
                'Next.js',
                'Vercel',
                'Railway',
                'GitHub API',
                'OpenAI API',
            ]}
        />
    </div>
);

export default ChangelogGenerator;
