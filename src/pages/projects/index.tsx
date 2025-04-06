import React from 'react';
import ProjectCard from '../../components/project-card';

const Projects = () => {
    return (
        <div className="bg-[#F7F8FD] p-8 grow">
            <div className="max-w-5xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">
                    Work at Action Network
                </h1>
                <p>
                    Stack: React, TypeScript, Next.js, Tailwind, Emotion,
                    Storybook, REST APIs
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 mb-10">
                    Over my 7 years at Action Network, I was part of a small
                    frontend team, and I owned the development of key
                    user-facing features, some of which are featured below.
                    While some of these were collaborative efforts, I was
                    responsible for architecting and implementing entire
                    components from scratch, and iterating based on design
                    feedback and user data.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <ProjectCard
                        title="Expert Picks Page"
                        image="/assets/expert-picks.png"
                        shortDescription="Built this entire page from scratch using React and Tailwind, enabling users to browse expert picks and matchups."
                        route="/projects/expert-picks"
                    />
                    <ProjectCard
                        title="Odds Calculators"
                        image="/assets/odds-calculators.png"
                        shortDescription="Interactive betting calculator that handles real-time odds calculations and edge case validations."
                        route="/projects/odds-calculators"
                    />
                    <ProjectCard
                        title="Article Page Redesign"
                        image="/assets/article.png"
                        shortDescription="Modernized our longform content experience with performance in mind and reusable component systems."
                        route="/projects/articles"
                    />
                    <ProjectCard
                        title="Odds Tools"
                        image="/assets/odds-tools.png"
                        shortDescription="Worked on rendering and filtering real-time odds data for multiple sports and books."
                        route="/projects/odds-tools"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
