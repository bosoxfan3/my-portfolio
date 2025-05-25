import { Link } from 'react-router-dom';
import Carousel from '../../../components/carousel';
import Highlights from '../../../components/highlights';

const images = [
    {
        src: '/assets/personal/bored-before-board/main.png',
        alt: 'Main page where the user chooses their station and direction',
    },
    {
        src: '/assets/personal/bored-before-board/times.png',
        alt: 'Results page with only train times displaying',
    },
    {
        src: '/assets/personal/bored-before-board/youtube.png',
        alt: 'Results page with train times and youtube search display',
    },
    {
        src: '/assets/personal/bored-before-board/tictactoe.png',
        alt: 'Results page with train times and tic-tac-toe being played',
    },
];

const BoredBeforeBoard = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">Bored Before Board</h1>
        <div className="pb-2">
            <a
                className="text-blue-600 font-bold mr-6"
                href="https://bosoxfan3.github.io/BoredBeforeBoard/"
                target="_blank"
                rel="noreferrer"
            >
                Live Project
            </a>
            <a
                className="text-blue-600 font-bold"
                href="https://github.com/bosoxfan3/BoredBeforeBoard"
                target="_blank"
                rel="noreferrer"
            >
                GitHub Repository
            </a>
        </div>
        <p className="text-zinc-600 mb-2 font-bold">
            Built with HTML, CSS, JavaScript, and jQuery
        </p>
        <p className="text-zinc-600 mb-6">
            This app has 2 dual purposes: To allow users to get up-to-the-minute
            updates on the schedules of BART (Bay Area Rapid Transit) trains,
            and to allow users to simultaneously access entertainment options
            within the app so they can keep an eye on train arrivals and
            departures.
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                This is a relatively simple Progressive Web App that I made in
                2018, but became invaluable for myself and my coworkers at that
                time. This app allows users to get up-to-the-minute updates on
                the schedules of BART (Bay Area Rapid Transit) trains, which
                surprisingly are not always displayed at the stations
                themselves. I updated the project to keep it available for
                downloading as an app, just as we used to do.
                <br />
                Additionally, since my first instinct when seeing a wait time of
                over a few minutes is to go on YouTube, I made an app where it
                is possible to both watch YouTube videos and have access to
                train times. As an additional entertainment feature in case the
                user is waiting with someone else, there is also the ability to
                play tic-tac-toe.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What I Built</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Created a progressive web app using HTML, CSS, JavaScript,
                    and jQuery
                </li>
                <li>
                    Used GitHub pages for deployment, and added a manifest.json
                    to allow "app" installation
                </li>
                <li>Integrated BART's api to track up-to-date train times</li>
                <li>
                    Added YouTube API capability to search for and watch videos
                    within the app
                </li>
                <li>
                    Added Tix-Tac-Toe game that can be played with 2 players
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    The API keys are exposed on the front end, and with the
                    current setup this is no good way to hide them and demo the
                    project at the same time. I restricted the access of the
                    YouTube API key to my project domain only to help mitigate
                    exposure
                </li>
                <li>
                    Newer iOS requirements meant that I needed to update some
                    aspects of the project to maintain installability. I added a
                    manifest.json file and service workers as well to meet
                    current installation requirements
                </li>
            </ul>
        </section>
        <Highlights
            highlights={[
                'HTML',
                'CSS',
                'JavaScript',
                'jQuery',
                'GitHubPages',
                'YouTube API',
                'BART API',
            ]}
        />
    </div>
);

export default BoredBeforeBoard;
