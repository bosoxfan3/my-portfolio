import { Link } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Highlights from '../../components/highlights';

const images = [
    {
        src: '/assets/my-action/main.png',
        alt: 'The main My Action analysis',
    },
    {
        src: '/assets/my-action/info.png',
        alt: 'User bio, current picks, and pick performance at a glance',
    },
    {
        src: '/assets/my-action/picks.png',
        alt: 'A list of picks',
        caption:
            'This shows how the picks were shown in the infinite list and how additional picks could be fetched',
    },
    {
        src: '/assets/my-action/charts.png',
        alt: 'More bet analysis modules',
    },
    {
        src: '/assets/my-action/settings.png',
        alt: 'More analysis modules and the ability to edit user settings',
    },
    {
        src: '/assets/my-action/settings.png',
        alt: 'More analysis modules and the ability to edit user settings',
    },
    {
        src: '/assets/my-action/filters.png',
        alt: 'A modal with inputs',
        caption:
            'These filters could be used to select a specific subset of picks to review and analyze',
    },
];

const MyAction = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">My Action Page</h1>
        <p className="text-zinc-600 mb-2 font-bold">
            Built with React, TypeScript, Tailwind, and Victory (for the chart)
        </p>
        <p className="text-zinc-600 mb-6">An Action user's personalized hub</p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                My Action is a critical page for any user. The My Action page is
                where you can track your current bets, as well as see your bet
                history and personalized betting analyses.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">My Contributions</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    The current My Action is actually a re-design. I led the
                    re-design project with 1 other FE engineer, 1 BE engineer, 1
                    designer, and 1 PM
                </li>
                <li>Contributed feedback during design and planning phase</li>
                <li>
                    Connected frontend to REST APIs and handled loading states
                    for the page itself as well as the graphs
                </li>
                <li>
                    Wrote formatting utility functions to be able to cleanly
                    feed complicated data into re-usable components
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    The biggest challenge related to the fact that some users
                    have thousands of picks, and fetching all of them at once
                    could crash the API. The adaptation I chose was limit the
                    amount of picks in the original fetch. If the user requested
                    to see more picks, they would then receive them in small
                    batches. The UI implementation was an infinite scroll with a
                    "show more" button that would fetch an additional number of
                    picks when clicked.
                </li>
                <li>
                    Handling non-PRO users on the page. Non-PRO users can still
                    access My Action, but some features are locked or minimized.
                    Each component needed to have conditional rendering based on
                    the user's status.
                </li>
                <li>
                    The Custom Analysis filters were another challenge. We
                    wanted users to be able to filter by something as broad as
                    any bets with the sport "Football", which for the frontend
                    meant translating that into looking for bets of any football
                    league (NFL, NCAAF, UFL, XFL, etc.)
                </li>
                <li>
                    We wanted a graph that would look smooth and could handle
                    many data points. We ended up going with a package called
                    victory.
                </li>
            </ul>
        </section>
        <Highlights
            highlights={[
                'React',
                'TypeScript',
                'Tailwind',
                'REST API',
                'Next.js',
                'Node.js',
            ]}
        />
    </div>
);

export default MyAction;
