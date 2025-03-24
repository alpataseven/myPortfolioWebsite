import Diff from "../Components/Diff";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScrollProgress from "../Components/ScrollProgress";

export default function Project() {
    return(
        <>
            <ScrollProgress />
            <Navbar />
            <br /><br /><br /><br /><br /><br /><br /><br />          
             <Diff />
            <br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}   