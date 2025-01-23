import { MessageSquare, User } from 'react-feather'

export default function Navbar() {

    return (
        <div className='nav'>
            <div className='nav-title'><h2>Admin Dashboard</h2></div>
            <ul className='nav-list'>
                <li className="nav-list-item"><input type="search" name="" id="" placeholder='Ara..' /></li>
                <li className="nav-list-item nav-icon"><MessageSquare /></li>
                <li className="nav-list-item nav-icon"><User /></li>
            </ul>
        </div>
    )
}
