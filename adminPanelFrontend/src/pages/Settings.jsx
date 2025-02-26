import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import SettingsBox from "../components/SettingsBox"


export default function Settings() {
  return (
    <div className="create-project-pages">
      <div className="grid1"><Sidebar /></div>
      <div className="grid2"><Navbar /></div>
      <div className="grid3"><SettingsBox /></div>
    </div>
  )
}
