import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Homepage() {
    return (
        <>
            <div class="home-dashboard">
                <div class="div1"><Sidebar /></div>
                <div class="div2"><Navbar /></div>
                <div class="div3"><DashboardCard /></div>
                <div class="div4"><DashboardCard /></div>
                <div class="div5"> <DashboardCard /></div>
                <div class="div6"> <DashboardCard /></div>
            </div>
            
            
        </>
    )
}