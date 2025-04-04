import React from 'react';
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiNodedotjs,
    SiPostgresql,
    SiStorybook,
    SiJest,
    SiCypress,
} from 'react-icons/si';

import { TbSql } from 'react-icons/tb';

import { RiNextjsFill } from 'react-icons/ri';

import { DiRedis } from 'react-icons/di';

import { FaAws, FaDocker } from 'react-icons/fa';

import { IconType } from 'react-icons';

type IconEntry = {
    icon: IconType;
    label: string;
};

const icons: IconEntry[] = [
    { icon: SiReact, label: 'React' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiHtml5, label: 'HTML5' },
    { icon: SiCss3, label: 'CSS3' },
    { icon: SiTailwindcss, label: 'Tailwind' },
    { icon: SiStorybook, label: 'Storybook' },
    { icon: SiJest, label: 'Jest' },
    { icon: SiCypress, label: 'Cypress' },
    { icon: SiGit, label: 'Git' },
    { icon: SiGithub, label: 'GitHub' },
    { icon: RiNextjsFill, label: 'Next.js' },
    { icon: SiNodedotjs, label: 'Node.js' },
    { icon: TbSql, label: 'SQL' },
    { icon: SiPostgresql, label: 'PostgreSQL' },
    { icon: DiRedis, label: 'Redis' },
    { icon: FaAws, label: 'AWS' },
    { icon: FaDocker, label: 'Docker' },
];

const Skills = () => {
    return (
        <section className="py-8">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {icons.map(({ icon, label }) => {
                    const IconComponent = icon as React.FC<{
                        className?: string;
                    }>;
                    return (
                        <div
                            key={label}
                            className="flex flex-col items-center text-center text-gray-700 hover:text-blue-500 transition-colors duration-300"
                            title={label}
                        >
                            <IconComponent className="text-4xl" />
                            <span className="mt-2 text-sm">{label}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
