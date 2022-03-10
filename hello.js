// stack  = last in first out = LIFO
// qa = first in first out = FIFO

// bubble sort;

// function hello(nam) {
//     nam[0] = "Hello World"
//     console.log({ nam });
// }

// var names = ["Imran", "shakil", "mehedi"];
// hello(names);

// console.log({ names });

// arr.sort( (a, b) => a -b)
// arr.sort(function (a, b) {
//     return b - a;
// }) 
//     0  1
const arr = [3, 5, 7, 8, 9, 4, 6, 2, 1];
const bubble_sort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                const tamp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tamp;
            }
        }
    }
}
bubble_sort(arr)
console.log(arr);

 // small to large
// [3, 5, 7, 8, 4, 6, 2, 1, 9]
// [3, 5, 7, 4, 8, 6, 2, 8, 9]