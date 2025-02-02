import Navbar from "../components/Navbar";
import ProjectForm from "../components/ProjectForm";
import Sidebar from "../components/Sidebar";

export default function CreateProjectPage() {
    return (
        <>
            <div className="create-project-pages">
                <div className="grid1"><Sidebar /></div>
                <div className="grid2"><Navbar /></div>
                <div className="grid3"><ProjectForm /></div>
            </div>
        </>
    )
}