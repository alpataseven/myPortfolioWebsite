import { NavLink } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Photos from "../Photos/alp3.jpg"
import AboutButton from "../Components/AboutButton"
import Footer from "../Components/Footer"
import projectPhotos from "../Photos/Homepage.png"
import contactPhotos from "../Photos/MobilePhoto.png"
import ProjectButton from "../Components/ProjectButton"
import ContactButton from "../Components/ContactButton"
import SecondNavbar from "../Components/SecondNavbar"
import ScrollProgress from "../Components/ScrollProgress"
import ScrollToTop from "../Components/ScrollTopButton"

export default function Homepage() {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <div className="auto-rows-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 h-150">
                    <div className="p-20">
                        <img
                            style={{ width: "25rem", height: "25rem", marginLeft: "17%", marginTop: "5%" }}
                            className="mask mask-squircle"
                            src={Photos} />
                    </div>
                    <div className="p-10 m-5">
                        <div style={{ margin: "auto", marginTop: "19%" }} className="mockup-code w-100">
                            <pre data-prefix="$"><code>Alperen ATASEVEN</code></pre>
                            <pre data-prefix=">" className="text-warning"><code>...</code></pre>
                            <pre data-prefix=">" className="text-light"><code>Yönetim Bilişim Sistemleri Öğrencisi</code></pre>
                        </div>
                        <br />
                        <div style={{ marginLeft: "40%", marginTop: "5%" }} >
                            <NavLink to="/about">
                                <AboutButton />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{marginTop:"15rem"}} className="grid grid-cols-1 sm:grid-cols-2 h-150">
                    <div className="pl-20 pt-8">
                        <h1 style={{ fontSize: "3.5rem", textTransform: "uppercase" }}>Projelerimi Görmek için butona tıkla</h1>
                        <br />
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 h-150">
                            <NavLink to="/project">
                                <ProjectButton />
                            </NavLink>
                        </div>
                    </div>
                    <div className="p-10 m-5">
                        <div className="mockup-browser border border-base-300 w-full">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://github.com/alpataseven</div>
                            </div>
                            <div className="grid place-content-center h-80">
                                <img src={projectPhotos} alt="Project Photos" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ marginBottom: "30%" }} className="grid grid-cols-1 sm:grid-cols-2 h-150">
                    <div className="pl-20 pt-8 scale-75 md:scale-90 lg:scale-100">
                        <div style={{ marginBottom: "10rem" }} className="mockup-phone transform scale-60">
                            <div className="mockup-phone-camera"></div>
                            <div className="mockup-phone-display text-white grid place-content-center">
                                <img src={contactPhotos} alt="Contact Photos" />
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "20%", marginTop: "40%" }} className="p-10 m-5 h-auto">
                        <p style={{ fontSize: "3.5rem", textTransform: "uppercase" }}>İletişime geçmek için butona tıkla</p>
                        <NavLink to="/contact">
                            <ContactButton />
                        </NavLink>
                    </div>
                </div>
                <SecondNavbar />
                <ScrollToTop />
            </div>
            <Footer />
        </>
    )
}   