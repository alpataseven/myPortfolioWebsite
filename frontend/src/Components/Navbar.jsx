import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/about">Hakkımda</NavLink></li>
                            <li><NavLink to="/project">Projelerim</NavLink></li>
                            <li><NavLink to="/album">Fotoğraf Albümü</NavLink></li>
                            <li><NavLink to="/contact">İletişim</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/homepage" className="btn btn-ghost text-xl">Alperen ATASEVEN</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/about">Hakkımda</NavLink></li>
                        <li><NavLink to="/project">Projelerim</NavLink></li>
                        <li><NavLink to="/album">Fotoğraf Albümü</NavLink></li>
                        <li><NavLink to="/contact">İletişim</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeButton />
                </div>
            </div>
        </>
    )
}