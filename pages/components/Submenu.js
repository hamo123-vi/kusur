export default function Submenu({children, id}) {
    return(
        <div id={id} className="submenu-container" style={{maxHeight: '0px'}}>
            {children}
        </div>
    )
}