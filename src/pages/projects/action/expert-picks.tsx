import { Link } from 'react-router-dom';
import Carousel from '../../../components/carousel';
import Highlights from '../../../components/highlights';

const images = [
    {
        src: '/assets/action/expert-picks/main.png',
        alt: 'The main module of the expert picks page',
    },
    {
        src: '/assets/action/expert-picks/detail.png',
        alt: 'A partial view of what a user sees when they click into a game',
    },
    {
        src: '/assets/action/expert-picks/modal.png',
        alt: 'The modal that pops up when a user clicks a game',
    },
    {
        src: '/assets/action/expert-picks/suggested.png',
        alt: 'Suggested experts module on the sidebar',
    },
    {
        src: '/assets/action/expert-picks/popular.png',
        alt: 'Popular games module from the sidebar',
    },
    {
        src: '/assets/action/expert-picks/experts.png',
        alt: 'A sample of the table from the top experts page',
    },
    {
        src: '/assets/action/expert-picks/following.png',
        alt: 'What a user sees in their following feed if experts they follow have made picks',
    },
];

const ExpertPicks = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">Expert Picks Pages</h1>
        <p className="text-zinc-600 mb-2 font-bold">
            Built from scratch using React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-zinc-600 mb-6">
            A real-time, interactive feed of betting picks contributed by a mix
            of experts and algorithms, with custom filtering, sorting, and
            visual context.
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                The Expert Picks pages aggregate bets and insights from analysts
                and models, providing a centralized view of expert-backed picks.
                You can also see a timeline of bets from the experts you're
                following, and find new experts to follow.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">My Contributions</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    I led this project from 0 to deployment with 1 designer, 1
                    PM, and 1 other frontend engineer
                </li>
                <li>
                    Designed and built the page layout and all UI components
                    from scratch
                </li>
                <li>Integrated picks and odds data via internal REST APIs</li>
                <li>
                    Built in the ability to directly clone an expert's pick as
                    well as add emojis
                </li>
                <li>
                    Created filter and sort functionality with sticky header
                    controls
                </li>
                <li>
                    Handled edge cases like postponed games, invalid bets, and
                    empty states
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Built fully responsive layout for mobile, tablet, and
                    desktop views
                </li>
                <li>
                    Optimized performance through lazy loading and memoization
                </li>
                <li>
                    Maintained a high level of test coverage and accessibility
                    compliance
                </li>
                <li>
                    Managed fast-changing state data (odds, game data,
                    follow/unfollow, emoji like/unlike, etc.) without UI flicker
                </li>
            </ul>
        </section>
        <a
            href="https://www.actionnetwork.com/picks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
        >
            View Live
        </a>
        <Highlights
            highlights={[
                'React',
                'TypeScript',
                'Tailwind',
                'REST API',
                'Responsive Design',
            ]}
        />
    </div>
);

export default ExpertPicks;
