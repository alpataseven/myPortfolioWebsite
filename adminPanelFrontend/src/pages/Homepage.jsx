import ChartDashboard from "../components/ChartDashboard";
import Dashboard from "../components/RevenueSources";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RevenueSources from "../components/RevenueSources";

export default function Homepage() {
    return (
        <>
            <div class="home-dashboard">
                <div class="div1"><Sidebar /></div>
                <div class="div2"><Navbar /></div>
                <div class="div3"></div>
                <div class="div4"></div>
                <div class="div5"><ChartDashboard /></div>
                <div class="div6"><RevenueSources /></div>
            </div>
        </>
    )
}