function insertion_sort(arr) {
  let temp, i, j;
  for (i = 1; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}
const arr = [25, 3, 1, 34, 5, 4, 6, 2];
insertion_sort(arr);
console.log(arr);
