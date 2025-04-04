import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="w-full bg-[#EBECF5] px-6 py-3">
        <ul className="flex justify-end gap-8">
            <li>
                <Link to="/">Bio</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
