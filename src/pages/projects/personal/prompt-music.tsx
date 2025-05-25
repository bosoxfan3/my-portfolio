import { Link } from 'react-router-dom';
import Carousel from '../../../components/carousel';
import Highlights from '../../../components/highlights';

const images = [
    {
        src: '/assets/personal/prompt-music/main.png',
        alt: 'The user can input any text they want and generate a playlist',
    },
    {
        src: '/assets/personal/prompt-music/prompt.png',
        alt: 'After authorizing Spotify, the user is shown a welcome message',
    },
    {
        src: '/assets/personal/prompt-music/playlist.png',
        alt: '10 songs that are chosen based on the input are displayed to the user',
    },
    {
        src: '/assets/personal/prompt-music/spotify.png',
        alt: 'If the user has authorized the app, they can save the playlist to their Spotify',
    },
];

const PromptMusic = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">Prompt Music</h1>
        <div className="pb-2">
            <a
                className="text-blue-600 font-bold mr-6"
                href="https://prompt-music.vercel.app"
                target="_blank"
                rel="noreferrer"
            >
                Live Project
            </a>
            <a
                className="text-blue-600 font-bold"
                href="https://github.com/bosoxfan3/prompt-music"
                target="_blank"
                rel="noreferrer"
            >
                GitHub Repository
            </a>
        </div>
        <p className="text-zinc-600 mb-2 font-bold">
            Built with React, TypeScript, CSS, Spotify API, and OpenAI API
        </p>
        <p className="text-zinc-600 mb-6">
            Generate a playlist based off of a text prompt and optionally create
            it on Spotify
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                Prompt Music is a personal experiment that turns a short written
                prompt (e.g. “Rainy day in Tokyo” or “Gym motivation”) into a
                curated Spotify playlist. It uses OpenAI to analyze the tone,
                mood, and context of the prompt, and generates a playlist by
                matching that to musical metadata.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What I Built</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>Built the full-stack app using React & TypeScript</li>
                <li>
                    Used Vercel for frontend deployment and Railway for backend
                    server and database.
                </li>
                <li>
                    Integrated OpenAI's GPT-4 API to extract mood and genre from
                    user input
                </li>
                <li>
                    Queried Spotify’s Search API to retrieve track candidates
                    based on GPT output
                </li>
                <li>
                    Hooked up Spotify's auth API to allow users to authenticate
                    Prompt Music and save playlists
                </li>
                <li>
                    Managed environment variables and rate-limiting logic on the
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
                    Navigating Spotify’s API rate limits and auth flow required
                    handling edge cases like token expiration. Also, I wasn't
                    able to consistently get authorization to work when the user
                    was signing into Spotify via a 3rd party like Google or
                    Facebook.
                </li>
                <li>
                    Learned how to maintain semantic UI flow when switching
                    between states (loading, result, error) without a frontend
                    framework like Redux or Zustand. Created a loading spinner
                    modal on the front end and do detailed error handling on the
                    back end.
                </li>
                <li>
                    Realized the importance of clear fallback UX when the model
                    output or API fails (e.g. no song match). Also ran into the
                    situation (that is now accounted for) where ChatGPT would
                    send back songs that Spotify couldn't find.
                </li>
            </ul>
        </section>
        <Highlights
            highlights={[
                'React',
                'TypeScript',
                'Vercel',
                'Railways',
                'ChatGPT API',
                'Spotify API',
            ]}
        />
    </div>
);

export default PromptMusic;
