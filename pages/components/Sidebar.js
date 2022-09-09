import MenuItem from '../components/MenuItem';
import Submenu from '../components/Submenu';
import SubmenuItem from '../components/Submenu-Item';
import { sidebarToggler } from '../../js/sidebarToggler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return(
        <div id='sdb' className='sidebar-container'>
            
            <div className='logo-container'>
                <img className='logo' src='/assets/logo.svg' />
                <FontAwesomeIcon onClick={() => sidebarToggler('sdb')} icon={faX} className='x-icon-sidebar' />
            </div>
            <div className='sidebar-menu-container'>
                    <MenuItem title='Dashboard' logo='dashboard' href='/' />
                    <MenuItem title='Loyalty' logo='loyalty' submenu_container='loyalty' />
                        <Submenu id='loyalty'>
                        <SubmenuItem title='Kuponi' />
                        <SubmenuItem title='Pragovi' />
                        <SubmenuItem title='Specijalni kuponi' />
                        <SubmenuItem title='Transakcije' />
                        <SubmenuItem title='Lokacije' />
                    </Submenu>
                <MenuItem title='Proizvodi' logo='products' submenu_container='products' />
                    <Submenu id='products'>
                        <SubmenuItem title='Lista proizvoda' />
                        <SubmenuItem title='Kategorije' />
                    </Submenu>
                <MenuItem title='Sadržaji' logo='content' submenu_container='content' />
                    <Submenu id='content'>
                        <SubmenuItem title='Lista sadržaja' />
                        <SubmenuItem title='Kategorije' />
                    </Submenu>
                <MenuItem title='Korisnici aplikacije' logo='users' />
                <MenuItem title='Notifikacije' logo='notification' />
                <MenuItem title='Anketa' logo='poll' />
                <MenuItem title='Baneri' logo='baners' />
                <MenuItem title='Dokumenti' logo='documents' />
                <MenuItem title='Postavke' logo='settings' />
            </div>
      </div>
    )
}