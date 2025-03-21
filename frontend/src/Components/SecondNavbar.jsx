import { Code, Home, Phone, Smile, User } from "react-feather";

export default function SecondNavbar() {
    return (
        <>
            <ul className="menu menu-horizontal bg-base-200 rounded-box mt-15">
                <li>
                    <a className="tooltip" data-tip="Anasayfa">
                        <Home />
                    </a>
                </li>
                <li>
                    <a className="tooltip" data-tip="Hakkımda">
                        <Smile />
                    </a>
                </li>
                <li>
                    <a className="tooltip" data-tip="Projelerim">
                        <Code />
                    </a>
                </li>
                <li>
                    <a className="tooltip" data-tip="İletişim">
                        <Phone />
                    </a>
                </li>
            </ul>
        </>
    )
}