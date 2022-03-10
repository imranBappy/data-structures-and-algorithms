let items = [5, 3, 7, 6, 2, 9];


// left element theke boro pvot,
// and right element er theke pvot soto

var array = [8, 2, 5, 7, 4, 3, 12, 6, 19, 11, 10, 13, 9];
quickSort(array, 0, array.length - 1);
console.log(array);
function quickSort(arr, left, right) {
    var i = left;
    var j = right;
    var tmp;
    pivotidx = (left + right) / 2;
    var pivot = parseInt(arr[pivotidx.toFixed()]);
    /* partition */
    while (i <= j) {
        while (parseInt(arr[i]) < pivot)
            i++;
        while (parseInt(arr[j]) > pivot)
            j--;
        // [5, 3, 7, 6, 2, 9]
        if (i <= j) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    }

    /* recursion */
    if (left < j)
        quickSort(arr, left, j);
    if (i < right)
        quickSort(arr, i, right);
    return arr;
}