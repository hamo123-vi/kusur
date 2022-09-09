import Link from "next/link";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";
import { displayToggler } from "../../js/displayToggler";
import { sidebarToggler } from "../../js/sidebarToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";


export default function Header(props) {
    return(
        <header className='header-container'>
            <div className="mobile-menu-wrapper">
                <FontAwesomeIcon onClick={() => sidebarToggler('sdb')} icon={faBars} className='mobile-header-taskbar-icons' />
                <div className="mobile-header-taskbar">
                    <img onClick={() => sidebarToggler('i-modal')} src="/assets/info.svg" alt='' className="mobile-header-taskbar-icons" />
                    <Link href='/podrska'><img src="/assets/questionmark.svg" alt='' className="mobile-header-taskbar-icons" /></Link>
                    <img onClick={() => displayToggler('usermenu')} src="/assets/user.svg" alt='' className="mobile-header-taskbar-icons" />
                </div>
            </div>

            <div className='header-taskbar'>
                
                <div onClick={() => sidebarToggler('i-modal')} className='header-taskbar-button px-8 gap-10'>
                    <div>Info</div>
                    <img src="/assets/info.svg" alt='' className="header-taskbar-icons" />
                </div>
                <Link href='/podrska'>
                    <div className='header-taskbar-button htb-f8f8f8 px-14'>
                        <img src="/assets/questionmark.svg" alt='' className="header-taskbar-icons" />
                        <div>Podrška</div>
                    </div>
                </Link>
                <div onClick={() => displayToggler('usermenu')} className='header-taskbar-button htb-f8f8f8 px-15'>
                    <img src="/assets/user.svg" alt='' className="header-taskbar-icons" />
                    <div className="htb-user-div gap-10">
                        <div>Korisnik</div>
                        <FontAwesomeIcon icon={faAngleUp} id='stusermenu' className="header-taskbar-icons" />
                    </div>
                </div>
            </div>
            <div className='header-navbar'>
                <Navbar icon={props.icon} title={props.title} />
            </div>
            <UserMenu />
        </header>
    )
}