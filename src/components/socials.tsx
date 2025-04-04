import React from 'react';

import { MdEmail } from 'react-icons/md';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { IconType } from 'react-icons';

type IconEntry = {
    icon: IconType;
    label: string;
};

const icons: IconEntry[] = [
    { icon: MdEmail, label: 'Email' },
    { icon: FaLinkedin, label: 'LinkedIn' },
    { icon: FaGithub, label: 'Github' },
];

const Socials = () => {
    return (
        <section className="py-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Socials</h2>
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

export default Socials;
