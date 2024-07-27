// 1-masala
// let arr = [ 1,2,3,4,5,6,7,8,9];
// let max = Math.max(...arr)
// console.log(max);

// 2-masala
// let arr = ["olma", "banan", "orik"];
// let lengths = [];
// for (let str of arr) {
//     lengths.push(str.length);
// }
// console.log(lengths);


// // 3-masala
// let arr = [3,7,4,5,6];

// for ( let i = 0 ; i <=arr.length -1 ; i++) {
//     if(arr[i] % 2 ==0){
//         arr[i] = arr[ i + 1]
//     }
// }
// console.log(arr);
// 4-masala
// let arr = [1,2,3,4,5,6,7,8,9]
// let res = [];
// for(let i = 0; i < arr.length ; i++){
//     if(arr[i]%2==1){
//         arr[i]==0;
//         res.unshift(arr[i])
//     }
// }
// console.log(res);
// 5-misol

// let arr = [10, 5, 20, 20, 4, 5, 10];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i;
// }

// console.log("Indeks qiymatlari bilan almashtirilgan massiv:", arr);

// 6-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let res = []

// for (const iterator of arr) {
//     if (iterator % 3 != 0) {
//         res.push(iterator)
//     }
// }

// console.log(res);

//! 7-misol \\\

// let arr = [10, 5, 20, 15, 4, 5, 10];

// let sum = 0;
// for (const num of arr) {
//     sum += num;
// }

// let res = [];
// for (const num of arr) {
//     res.push(num / sum);
// }

// console.log(res);

//! 9-misol \\\

// let arr = [1, -2, 3, 4, 5, -6, 7, -8, 9, 10]

// let res = []

// for (const iterator of arr) {
//     if (iterator > 0){
//         res.push(iterator)
//     }
// }

// console.log(res.length);

//! 10-misol \\\

// let arr = [1, -2, 3, 4, 5, -6, 7, -8, 9, 10];

// let sum = 0;

// for (const iterator of arr) {
//     if (iterator < 0) {
//         sum = sum + iterator
//     }
// }

// console.log(sum);

// 11-masala

// let arr = ["apple", "banana", "kiwi", "grape", "watermelon", "blueberry"];

// let res = [];
// for (const str of arr) {
//     if (str.length > 0) {
//         res.push(str[0]);
//     }
// }

// console.log(res);

// 12-masala

// const arr = [1, -5, 2, -4, 5, 10];

// let res1 = 1;
// let res2 = false;

// for (const num of arr) {
    // if (num > 0) {
        // res1 *= num;
        // res2 = true;
    // }
// }

// if (!res2) res1 = 0;

// console.log(res1);


// 13-masala

let arr = ["apple", "banana", "kiwi", "grape", "watermelon", "blueberry"];

let shortest = arr[0];
let longest = arr[0];

for (const str of arr) {
    if (str.length < shortest.length) {
        shortest = str;
    }
    if (str.length > longest.length) {
        longest = str;
    }
}

console.log("Eng uzun satr:", longest);
console.log("Eng qisqa satr:", shortest);