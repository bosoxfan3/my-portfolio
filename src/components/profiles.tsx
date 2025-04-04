import React from 'react';

import { MdEmail } from 'react-icons/md';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { IconType } from 'react-icons';

type IconEntry = {
    icon: IconType;
    label: string;
    link: string;
};

const icons: IconEntry[] = [
    { icon: MdEmail, label: 'Email', link: 'mailto:dgacquesta@gmail.com' },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        link: 'https://linkedin.com/in/daniel-acquesta',
    },
    { icon: FaGithub, label: 'Github', link: 'https://github.com/bosoxfox3' },
];

const Profiles = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-center mb-6">Socials</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {icons.map(({ icon, label, link }) => {
                    const IconComponent = icon as React.FC<{
                        className?: string;
                    }>;
                    return (
                        <div
                            key={label}
                            className="flex flex-col items-center text-gray-700 hover:text-blue-500 hover:cursor-pointer transition-colors duration-300"
                            title={label}
                        >
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <IconComponent className="text-4xl" />
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Profiles;
