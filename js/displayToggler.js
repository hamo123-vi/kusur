export function displayToggler(id) {
    if(document.getElementById(id).style.maxHeight != '0px') {
        document.getElementById(id).style.maxHeight = 0;
        var arw = document.getElementById('st' + id);
        if(arw) {
            arw.style.transform = 'rotate(+180deg)'
        }
    } else {
        document.getElementById(id).style.maxHeight = '500px'
        var arw = document.getElementById('st' + id);
        if(arw) {
            arw.style.transform = 'rotate(0deg)'
        }
        
    }
}