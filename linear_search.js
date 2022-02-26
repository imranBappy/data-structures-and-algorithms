const numbers = [1, 32, 4, 6, 8, 12, 6, 9, 7];

const linear_search = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }
    return -1;
}

const result = linear_search(numbers, 9);

console.log(result);