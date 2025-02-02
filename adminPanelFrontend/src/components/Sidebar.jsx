import { Users, Home, MessageSquare, Folder, Archive, HelpCircle, Settings, Database } from 'react-feather'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <NavLink to="/" className="navbar__link">
                        <Home />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <MessageSquare />
                        <span>Messages</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <NavLink to="/login" className="navbar__link">
                        <Users />
                        <span>Customers</span>
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/project" className="navbar__link">
                        <Folder />
                        <span>Projects</span>
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/data" className="navbar__link">
                        <Database />
                        <span>Database</span>
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <HelpCircle />
                        <span>Help</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <Settings />
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
