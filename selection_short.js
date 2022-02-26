const min = require('./min');
const arr_cutter = require('./arr_cutter');
const indexOf = require('./indexOf');
const numbers = [5, 2, 1, 6, 7, 4, 3];
///              0  1  2  3  4  5  6
function selection_short(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        const tamp = arr[min];
        arr[min] = arr[i]
        arr[i] = tamp;
        // min = i;
    }
    return arr
}
function selection_short1(arr) {
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i];
        arr[i] = min(arr_cutter(arr, i, arr.length));
        arr[indexOf(numbers, arr[i])] = temp;
    }
    return arr;
}
const output = selection_short1(numbers)
console.log(output);


