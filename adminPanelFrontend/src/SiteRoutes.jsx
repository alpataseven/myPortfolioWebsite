import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import CreateProjectPage from './pages/CreateProjectPage'

export default function SiteRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/create-project-page' element={<CreateProjectPage />} />
            </Routes>
        </>
    )
}