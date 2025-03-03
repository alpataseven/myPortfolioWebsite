import { NavLink } from "react-router-dom";
import LetterGlitch from "../Components/LetterGlitch";
import WelcomePageButton from "../Components/WelcomePageBUtton";

export default function WelcomePage() {
    return (
        <>
            <div style={{ position: "relative", width: "100%", height: "100vh" }}>
                <LetterGlitch />

                {/* Yazı ve Buton İçin Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white",
                        fontSize: "8rem",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        zIndex: 2,
                    }}
                >
                    <p>Merhaba!</p>
                    <NavLink to="/homepage">
                        <button className="btn btn-wide btn-accent btn btn-xs sm:btn-sm md:btn-md"> Çalışmalarımı keşfetmek için tıkla! </button>
                    </NavLink>

                </div>
            </div>
        </>
    )
}
