import ChartCard from "../components/ChartCard"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import MonthlyVisitsChart from "../components/MonthlyVisitsChart"
import ContactList from "../components/ContactList"
import Calendar from "../components/Calendar"

export default function DashboardPage() {
    return (
        <div className="flex h-screen">
            <div className="">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-4">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-sm shadow p-3">
                            <div style={{ width: "70%", height: "350px", margin: "0 auto" }}>
                                <ChartCard />
                            </div>
                        </div>
                        <div className="rounded-lg shadow p-6">
                            <div style={{ width: "90%", height: "350px", margin: "0 auto" }}>
                                <MonthlyVisitsChart />
                            </div>
                        </div>
                        <div>
                            <ContactList className="rounded-lg shadow p-6" />
                        </div>
                        <div className="flex justify-center items-center">
                        <Calendar />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

