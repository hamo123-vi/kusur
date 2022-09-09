export default function Navbar(props) {
    return(
        <div className="navbar-container">
            <img alt='error' src={'/assets/' + props.icon + '.svg'} />
            <img className="filter-navbar-arrow" alt='' src='/assets/nav_arrow.svg' />
            <div>{props.title}</div>
        </div>
    )
}