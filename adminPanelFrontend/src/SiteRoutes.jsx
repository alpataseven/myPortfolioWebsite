import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/Login'
import NotFound from './pages/NotFound'

export default function SiteRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}