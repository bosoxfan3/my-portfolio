import ProjectCard from '../../components/project-card';

const Projects = () => (
    <div className="content">
        <h1 className="text-4xl font-bold pb-6">Work at Action Network</h1>
        <p className="pb-6">
            Over my 7 years at Action Network, I was part of a small frontend
            team where I owned the development of key user-facing features, some
            of which are featured below. While some of these were collaborative
            efforts, my responsibilities included planning and documentation,
            architecting and implementing entire components from scratch, and
            iterating based on design feedback and user data.
        </p>
        <p className="text-lg font-bold">
            Main Stack: React, TypeScript, Next.js, Tailwind, Emotion,
            Storybook, REST APIs
        </p>
        <p className="text-sm pb-12">
            The above are just the most commonly used/most revelant to my daily
            tasks, but I used every language or tool listed on my bio page
            during my time at Action Network
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                title="Betslip & Quickslip Implementation"
                image="/assets/betslip/main.png"
                shortDescription="The core functionality of the Action Network products is the ability to save picks via the betslip. Quickslip is an add-on integration that syncs a user's bets with their sportsbook account."
                route="/projects/betslip"
            />
            <ProjectCard
                title="My Action Page"
                image="/assets/my-action/main.png"
                shortDescription="The My Action page is where a user can see all the picks they've tracked and can run analysis on their betting history."
                route="/projects/my-action"
            />
            <ProjectCard
                title="Odds Tools"
                image="/assets/odds-tools/main.png"
                shortDescription="Worked on rendering and filtering real-time odds data for multiple sports and books. The odds tools are the most frequented pages on the Action Network site."
                route="/projects/odds-tools"
            />
            <ProjectCard
                title="Odds Calculators"
                image="/assets/odds-calculators/main.png"
                shortDescription="Interactive betting calculators that handle real-time odds calculations and edge case validations. Currently the #1 Google search response for 'odds calculator'."
                route="/projects/odds-calculators"
            />
            <ProjectCard
                title="Expert Picks Page"
                image="/assets/expert-picks/main.png"
                shortDescription="Built this entire page from scratch using React and Tailwind. This page allows users to browse expert picks and popular matchups."
                route="/projects/expert-picks"
            />
            <ProjectCard
                title="Article Page Redesign"
                image="/assets/articles/main.png"
                shortDescription="Modernized our longform content experience with performance in mind and reusable component systems. Created components that authors could quickly embed to enhace their content."
                route="/projects/articles"
            />
        </div>
    </div>
);

export default Projects;
