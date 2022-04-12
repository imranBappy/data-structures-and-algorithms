const arr = [10, 5, 2, 8, 7];
function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let small = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[small]) {
                small = j;
            }
        }
        if (i !== small) {
            let temp = arr[i];
            arr[i] = arr[small];
            arr[small] = temp;
        }
    }
}
selection_sort(arr);
console.log(arr);