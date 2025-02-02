import ChartDashboard from "../components/ChartDashboard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RevenueSources from "../components/RevenueSources";
import UserDataGrid from "../components/UserDataGrid";

export default function Homepage() {
    return (
        <>
            <div className="home-dashboard">
                <div className="dashboard1"><Sidebar /></div>
                <div className="dashboard2"><Navbar /></div>
                <div className="dashboard3"><ChartDashboard /></div>
                <div className="dashboard4"><RevenueSources /></div>
            </div>
        </>
    )
}