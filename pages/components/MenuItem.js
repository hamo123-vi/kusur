import Link from 'next/link'
import { displayToggler } from "../../js/displayToggler"


export default function MenuItem(props) {
    return(
        <Link href={props.href ? props.href : '/'}>
            <div className='sidebar-menu-item-container'>
                <div className="d-flex-custom">
                <div className='sidebar-menu-icon-container'>
                    <img alt='' className='sidebar-menu-icon' src={'/assets/' + props.logo + '.svg'} />
                </div>
                <div className='sidebar-menu-title'>
                    {props.title}
                </div>
                </div>
                {
                    props.submenu_container ?
                    <div className="submenu-toggler-container">
                        <img onClick={() => displayToggler(props.submenu_container)} alt=''
                            id={'st' + props.submenu_container} src="/assets/expand.svg" className="submenu-toggler" />
                    </div> : <></>
                }
            </div>
        </Link>

        
    )
}