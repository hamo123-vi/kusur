export function sidebarToggler(id) {
    if(document.getElementById(id).style.display != 'flex') {
        document.getElementById(id).style.display = 'flex'
    } else {
        document.getElementById(id).style.display = 'none'
    }
}