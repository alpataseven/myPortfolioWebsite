import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/Login'
import NotFound from './pages/NotFound'
import DataPage from './pages/DataPage'
import ProjectForm from './components/ProjectForm'

export default function SiteRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/data' element={<DataPage />} />
                <Route path='/project' element={<ProjectForm />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}