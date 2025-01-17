import { Users, Home, MessageSquare, Folder } from 'react-feather'

export default function Sidebar() {

    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <Folder />
                        <span>Home</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <i data-feather="message-square"></i>
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
                        <i data-feather="folder"></i>
                        <span>Projects</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <i data-feather="archive"></i>
                        <span>Resources</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <i data-feather="help-circle"></i>
                        <span>Help</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link">
                        <i data-feather="settings"></i>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
