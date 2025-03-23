import { useEffect, useState } from "react";
import { Code, Home, Phone, Smile } from "react-feather";
import { NavLink } from "react-router-dom";

export default function SecondNavbar() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

    return (
        <>
            <ul className={`menu menu bg-base-200 rounded-box mt-15 fixed bottom-10 left-3 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                
                    <li><NavLink className={"tooltip tooltip-right"} data-tip="Anasayfa" to="/homepage"><Home /></NavLink></li>
                    <li><NavLink className={"tooltip tooltip-right"} data-tip="Hakkımda" to="/about"><Smile /></NavLink></li>
                    <li><NavLink className={"tooltip tooltip-right"} data-tip="Projelerim" to="/project"><Code /></NavLink></li>
                    <li><NavLink className={"tooltip tooltip-right"} data-tip="İletişim" to="/contact"><Phone /></NavLink></li>
            </ul>
        </>
    )
}