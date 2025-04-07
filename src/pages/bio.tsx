import React from 'react';
import { Link } from 'react-router-dom';

import Skills from '../components/skills';
import Socials from '../components/profiles';

const Home = () => {
    return (
        <div className="content">
            <div className="lg:grid lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-center pb-6">
                        Hi, I'm Daniel!
                    </h1>
                    <div className="flex justify-center pb-6">
                        <img
                            src="/assets/profile.jpg"
                            alt="Profile Pic of Daniel and his dog"
                            width="300px"
                            className="rounded-[50%]"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-center pb-6">
                        I'm a Senior Front End Engineer with 7+ years of
                        professional experience.
                    </h2>
                    <p className="text-center pb-6">
                        I specialize in working on user-facing single-page
                        applications with React & TypeScript. Throughout my
                        journey I've also gained proficiency with JavaScript,
                        HTML, CSS, Node.js, Next.js, etc. Over the last 2 years
                        I have worked as a full stack engineer, with my backend
                        experience focusing on SQL, PostgreSQL, and RESTful
                        APIs. I'm looking for full time front end or full stack
                        roles in the San Francisco Bay Area.
                    </p>
                    <div className="text-center text-lg pb-6 font-bold underline hover:text-blue-500 transition-colors duration-300">
                        <Link to="/projects">See My Work</Link>
                    </div>
                    <div className="text-center text-lg pb-6 font-bold underline hover:text-blue-500 hover:cursor-pointer transition-colors duration-300">
                        <a href="/DanielAcquestaResume.pdf" download>
                            Download My Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2">
                <Skills />
                <Socials />
            </div>
        </div>
    );
};

export default Home;
