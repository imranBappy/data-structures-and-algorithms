function arr_cutter(arr, i, count) {
    const newArr = [];
    while (i < count) {
        newArr.push(arr[i]);
        i++;
    }
    return newArr;
}
module.exports = arr_cutter;