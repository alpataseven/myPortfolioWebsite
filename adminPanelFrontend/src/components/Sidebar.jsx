import { Users, Home, MessageSquare, Folder, Archive, HelpCircle, Settings } from 'react-feather'

export default function Sidebar() {

    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <Home />
                        <span>Home</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <MessageSquare />
                        <span>Messages</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <Users />
                        <span>Customers</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <Folder />
                        <span>Projects</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <Archive />
                        <span>Resources</span>
                    </a>
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
