import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear} from "@fortawesome/free-solid-svg-icons";

export default function UserMenu() {
    return(
        <div id='usermenu' className="user-menu-container" style={{maxHeight: '0px'}}>
            <div className="user-menu-item mt-15-5">
                <img className="user-menu-icon" alt='' src="/assets/setinguser.png" />
                <div>Postavke</div>
            </div>
            <div className="user-menu-item mb-15-5">
                <img className='user-menu-icon' alt='' src='/assets/logout.svg' />
                <div>Odjava</div>
            </div>
        </div>
    )
}