import { Badge } from '@mui/material'
import { MessageSquare } from 'react-feather'
import AccountMenu from './AccountMenu'

export default function Navbar() {

    return (
        <div className='nav'>
            <div className='nav-title'><h2>Admin Dashboard</h2></div>
            <ul className='nav-list'>
                <li className="nav-list-item"><input type="search" name="" id="" placeholder='Ara..' /></li>
                <li className="nav-list-item nav-icon">
                    <Badge badgeContent={4} color="primary">
                        <MessageSquare />
                    </Badge>
                </li>
                <li className="nav-list-item nav-icon">
                    <AccountMenu />
                </li>
            </ul>
        </div>
    )
}
