const friends = ["Imran", "Rakib", "Bappy", "Rana", "Boni", "Roni"];
const short = arr => {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = temp;
    }
    return arr;
}
console.log(short(friends));
