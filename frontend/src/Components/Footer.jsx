import { NavLink } from "react-router-dom";
import { Instagram, Linkedin, Twitter, GitHub } from 'react-feather'

export default function Footer() {
    return (
        <>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <NavLink className="link link-hover" to="/about">Hakkımda</NavLink>
                    <NavLink className="link link-hover" to="/project">Projelerim</NavLink>
                    <NavLink className="link link-hover" to="/contact">İletişim</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.instagram.com/_alp.js/"><Instagram /></a>
                        <a href="https://www.linkedin.com/in/alperen-ataseven-a8072722a/"><Linkedin /></a>
                        <a href="https://x.com/mrbbenalppp"><Twitter /></a>
                        <a href="https://github.com/alpataseven"><GitHub /></a>
                    </div>
                </nav>
                <aside>
                    <p> {new Date().getFullYear()} © Alperen ATASEVEN - Tüm Hakları Saklıdır</p>
                </aside>
            </footer>
        </>
    )
}