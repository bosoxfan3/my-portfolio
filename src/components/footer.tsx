import React from 'react';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
    const IconComponent = SiGithub as React.FC<{}>;

    return (
        <footer className="w-full bg-[#EBECF5] py-3 flex items-center justify-center gap-2">
            <p>Created by Daniel Acquesta</p>
            <a
                href="https://github.com/bosoxfan3/my-portfolio"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-gray-500"
            >
                <IconComponent />
            </a>
        </footer>
    );
};

export default Footer;
