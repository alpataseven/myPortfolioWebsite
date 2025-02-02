import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserDataGrid from "../components/UserDataGrid";

export default function DataPage() {
    return (
        <div className="data-dashboard">
            <div className="data1"><Sidebar /></div>
            <div className="data2"><Navbar /></div>
            <div className="data3"><UserDataGrid /></div>
        </div>
    )
}