const numbers = [1, 32, 4, -12, 6, 8, 12, 6, 9, 7, 34, 65, 34, 89, 13, 56];
function bubble_sort1(arr) {
    const s1 = performance.now()
    const s = performance.now()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log('optimized', performance.now() - s);
    return arr;
}
bubble_sort1(numbers)