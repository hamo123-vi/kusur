export function prettyNumber(string) {
    var arr = string.split('/');
    if(arr.length == 2) {
        if(arr[0] > 999) {
            var fnum = (arr[0] / 1000).toFixed(1) + 'k';
        } else {
            var fnum = arr[0];
        }
        if(arr[1] > 999) {
            var snum = (arr[1] / 1000).toFixed(1) + 'k';
        } else {
            var snum = arr[1];
        }
        return fnum + ' / ' + snum
    } else {
        if(arr[0] > 999) {
            var fnum = (arr[0] / 1000).toFixed(1) + 'k';
        } else {
            var fnum = arr[0];
        }
        return fnum
    }
}