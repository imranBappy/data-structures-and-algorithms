function indexOf(arr, item) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            index = i;
        }
    }
    return index;
}
module.exports = indexOf;