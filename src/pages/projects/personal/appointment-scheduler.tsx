import { Link } from 'react-router-dom';
import Carousel from '../../../components/carousel';
import Highlights from '../../../components/highlights';

const images = [
    {
        src: '/assets/personal/appointment-scheduler/main.png',
        alt: 'The confirmation email received by the patient after successful intake call',
    },
    {
        src: '/assets/personal/appointment-scheduler/WorkingDemo.mp4',
        alt: 'Video showing an intake call in full, complete with logging',
        caption: 'Video showing an intake call in full, complete with logging',
        isVideo: true,
    },
];

const AppointmentScheduler = () => (
    <div className="content">
        <Link
            to="/projects"
            className="text-blue-500 hover:underline mb-4 block"
        >
            Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">Patient Intake Voice Agent</h1>
        <div className="pb-2">
            <a
                className="text-blue-600 font-bold"
                href="https://github.com/bosoxfan3/Appointment-Scheduler"
                target="_blank"
                rel="noreferrer"
            >
                GitHub Repository
            </a>
        </div>
        <p className="text-zinc-600 mb-2 font-bold">
            Built with JavaScript, Express.js, Node.js, and Twilio Programmable
            Voice
        </p>
        <p className="text-zinc-600 mb-6">
            Schedule an appointment with a doctor with a voice agent, and
            receive confirmation email of said appointment
        </p>
        <Carousel images={images} />
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>
                A telephony-based AI agent that guides users through a simulated
                patient intake process over the phone. Built using Twilio's
                programmable voice API, this app captures user responses via
                speech recognition, processes them server-side, and routes
                callers based on collected info.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What I Built</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Voice interaction flow using Twilio Voice + speech-to-text
                </li>
                <li>
                    Step-by-step intake logic with dynamic prompts and branching
                    logic
                </li>
                <li>
                    Custom input normalization to compensate for transcription
                    errors
                </li>
                <li>
                    Email sanitization logic to reconstruct spoken addresses
                    like “bob dot ross at yahoo dot com”
                </li>
                <li>
                    Utilized SendGrid to send confirmation emails at the
                    conclusion of the call
                </li>
                <li>
                    Built-in fallback handling and logging for failed or unclear
                    responses
                </li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside space-y-1">
                <li>
                    Twilio speech recognition accuracy was a major constraint,
                    especially for names, times, and emails. I addressed this
                    with:
                    <ul>
                        <li>
                            Custom normalize function to align transcribed and
                            expected values
                        </li>
                        <li>
                            A sanitizeEmail() helper that parses spoken email
                            addresses into valid strings
                        </li>
                        <li>
                            Usage of Twilio’s hints feature to improve
                            transcription targeting
                        </li>
                    </ul>
                </li>
                <li>
                    Testing voice flows is inherently non-deterministic. To make
                    the experience reviewable, I added backend logging and
                    routed inputs to clearly defined steps.
                </li>
                <li>
                    Due to Twilio’s speech engine limitations, exact matches for
                    things like emails may fail. The README includes notes on
                    known edge cases and expected behavior.
                </li>
            </ul>
        </section>
        <Highlights
            highlights={[
                'JavaScript',
                'Express.js',
                'Node.js',
                'Twilio',
                'SendGrid',
                'Railway',
            ]}
        />
    </div>
);

export default AppointmentScheduler;
