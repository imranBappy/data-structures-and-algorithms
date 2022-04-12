function my_search(arr, target) {
    let hafLen = Math.floor(arr.length / 2);
    for (let i = 0; i < hafLen; i++) {
        if (arr[i] === target) {
            return { i, item: arr[i] }
        }
        else if (arr[(arr.length - 1) - i] === target) {
            return { i: (arr.length - 1) - i, item: arr[(arr.length - 1) - i] }
        }
        else if (arr[(hafLen) - i] === target) {
            return { i: (hafLen) - i, item: arr[(hafLen) - i] }
        }
        else if (arr[(hafLen) + i] === target) {
            return { i: (hafLen) + i, item: arr[(hafLen) + i] }
        }
    }
    return 0;
}
// 57243.31320000067
const arr = [13, 4, 5, 7, 8, 9, 2, 55, 66];
let max = 111234569;
// 50000000
// for (var i = 1; arr.push(i++) < max;);
const t0 = performance.now();
console.log(my_search(arr, 2));
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);