// let numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

let numbers = [];
for (let i = 0; i <= 100000000; i++) {
    numbers.push(i)
}
let myTarget = 90009;


let startTime1, endTime1;
const binary_search = (arr, target) => {
    startTime1 = performance.now();
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            endTime1 = performance.now();
            return mid
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        if (arr[mid] > target) {
            end = mid - 1
        }
    }
    endTime1 = performance.now();
    return -1
}



const result1 = binary_search(numbers, myTarget);
console.log("binary_search");
console.log('time = ', (endTime1 - startTime1));
console.log(result1);

console.log(`\n-------\n`);

let startTime, endTime;
const linear_search = (arr, target) => {
    startTime = performance.now();
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            endTime = performance.now();
            return i;
        }
    }
    endTime = performance.now();
    return -1;
}

console.log("linear_search");
const result = linear_search(numbers, myTarget);
console.log('time = ', (endTime - startTime));

console.log(result);

