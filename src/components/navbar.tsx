import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="w-full bg-[#EBECF5] px-8 py-3">
        <ul className="flex justify-end font-semibold gap-8">
            <li className="hover:text-blue-500 transition-colors duration-300">
                <Link to="/">Bio</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
