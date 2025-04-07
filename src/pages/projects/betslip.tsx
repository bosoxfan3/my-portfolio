import { Link } from 'react-router-dom';
import Carousel from '../../components/carousel';
import Highlights from '../../components/highlights';

const images = [
    {
        src: '/assets/betslip/main.png',
        alt: 'Betslip for a single game pick',
    },
    {
        src: '/assets/betslip/parlay.png',
        alt: 'Betslip for a parlay pick',
    },
    {
        src: '/assets/betslip/future.png',
        alt: 'Betslip for a futures pick',
    },
    {
        src: '/assets/betslip/books.png',
        alt: 'Other books with odds',
        caption:
            'If other odds are available, they are shown in the betslip so the user can compare',
    },
    {
        src: '/assets/betslip/quickslip.png',
        alt: 'A quickslip QR code',
        caption:
            'If the book has Quickslip available, a user can use the QR code to go directly to the sportsbook and have that same bet pre-filled',
    },
];

const Betslip = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">Betslip & Quickslip</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Built with React, TypeScript, and Emotion (a CSS-in-JS library)
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                The betslip is the most essential feature of the Action Network
                product suite. The betslip is where a user can
                create/update/delete their bets, as well as compare odds across
                sportsbooks and even link their bet directly to their chosen
                sportsbook if available. The betslip needs to be able to handle
                correctly saving every type of bet, from sides to totals to
                futures and beyond.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">My Contributions</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>Wrote the utility function that names every single pick</li>
                <li>
                    Utilized product knowledge to add validations for every
                    available input
                </li>
                <li>
                    Worked closely with designers for pixel-perfect
                    implementation
                </li>
                <li>
                    Created the Quickslip row and QR components, as well as
                    functionality
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    The biggest challenge was state management: Opening/closing
                    the betslip, editing inputs, managing locations, using the
                    user's sportsbook preferences, etc. For location, we used
                    SWR to fetch location client side and compare that to the
                    user's location preferences. For the betslip input and save
                    handling, I ultimately defined a custom hook with tons of
                    methods to handle toggles/inputs/tabs/editing/saving/etc.
                    Then used unstated-next to create a Container from that
                    betslip hook, allowing a way to share state globally. That
                    last part is especially important because the betslip can be
                    accessed from basically any page on the site.
                </li>
                <li>
                    We needed to prevent users from saving picks with "bad"
                    data, especially if they were linking to a sportsbook. So
                    validation was extremely important. I wrote validation
                    functions that ran on every state change and added Jest and
                    Cypress tests as well
                </li>
                <li>
                    Syncing with the sportsbooks for Quickslip required working
                    with engineers from those sportsbooks directly and coming up
                    with solutions to hit their individual APIs. We ultimately
                    had to use a "switchboard" system to manage the links.
                </li>
            </ul>
        </section>
        <Highlights
            highlights={[
                'React',
                'TypeScript',
                'Emotion',
                'REST API',
                'Jest',
                'Cypress',
                'Unstated Next',
                'SWR',
            ]}
        />
    </div>
);

export default Betslip;
