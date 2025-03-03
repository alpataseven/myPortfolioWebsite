import { Route, Routes } from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage'
import NotFound from './Pages/NotFound'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Project from './Pages/Project'

export default function SiteRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/project' element={<Project />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}