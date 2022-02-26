function filter(arr, item) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) continue;
        newArr.push(arr[i]);
    }
    return newArr;
}
module.exports = filter;