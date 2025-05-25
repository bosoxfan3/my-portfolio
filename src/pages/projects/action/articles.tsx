import { Link } from 'react-router-dom';
import Carousel from '../../../components/carousel';
import Highlights from '../../../components/highlights';

const images = [
    {
        src: '/assets/action/articles/main.png',
        alt: 'A sample of an article',
    },
    {
        src: '/assets/action/articles/main.png',
        alt: 'Quickslip in article',
        caption: 'A user clicking this acts the same as a quickslip QR code',
    },
    {
        src: '/assets/action/articles/table.png',
        alt: 'Authors could put in tables with links directly to picks',
    },
    {
        src: '/assets/action/articles/header.png',
        alt: 'Authors had the ability to add headers like this with a one or two word snippet within their content',
    },
    {
        src: '/assets/action/articles/buttons.png',
        alt: 'Matchup buttons in an article',
        caption:
            'Another example of components dynamically inserted into content',
    },
];

const Articles = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">
            Custom Article Layout System
        </h1>
        <p className="text-zinc-600 mb-2 font-bold">
            Built using React, TypeScript, Storybook, and ButterCMS
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                I worked on building out the article layout framework that
                supports thousands of daily readers across mobile and web. Each
                article is styled dynamically based on sport, author, and inline
                data.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">My Contributions</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Built responsive layout system using styled components and
                    utility classes
                </li>
                <li>
                    Integrated author metadata, Twitter embeds, and SEO schema
                </li>
                <li>
                    Worked on lazy loading for performance and core web vitals
                </li>
                <li>
                    Built reusable inline widgets (odds tables, callouts,
                    recaps)
                </li>
                <li>
                    Created embed layout so that the app could show articles via
                    web view
                </li>
            </ul>
        </section>
        <a
            href="https://www.actionnetwork.com/ncaaf/oregon-ducks-vs-ohio-state-buckeyes-picks-predictions-odds-best-bets-rose-bowl-college-football-playoff-january-1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Read Example Article
        </a>
        <Highlights
            highlights={[
                'React',
                'TypeScript',
                'Storybook',
                'ButterCMS',
                'AMP',
                'HTML',
                'CSS',
                'JavaScript',
            ]}
        />
    </div>
);

export default Articles;
