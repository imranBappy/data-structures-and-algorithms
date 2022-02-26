function min(arr) {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        };
    }
    return minNum;
}
module.exports = min