// // Task 1

// let array = [`a`, `b`, `c`, `d`];

// let removed = array.splice(2, 2);
// array = array.join(` + `);
// removed = removed.join(` + `);

// console.log(array.concat(', ', removed));

// // Task 2
// let array = [2, 5, 3, 9]; 
// /*1st solution - делал с методами массива*/
// let newArray = array.splice(2, 2);

// let mult1 = array.reduce(function (result, current) {
//     return (result * current);
// });

// let mult2 = newArray.reduce(function (result, current) {
//     return (result * current);
// });

// let result = mult1 + mult2;
// console.log(result);

// /*2nd solution - этот вариант проще, но без методов*/
// let result = array[0] * array[1] + array[2] * array[3];
// console.log (result);

// //Task 3

// let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(array[1][0]);

// // Task 4

// let obj = {
//     js: [`jQuery`, `Angular`],
//     php: `hello`,
//     css: `world`,
// };

// console.log(obj.js[0]);

// // Task 5

// let array = [];
// let symb = `x`;

// for (let i = 0; i < 5; i++){
//     array.push(symb);
//     symb += `x`;
// }
// console.log(array);

// // Task 6

// let array = []; 

// for (let i = 1; i <= 5; i++) {
//     let num = ``;
//     for (let j = 0; j < i; j++){    
//         num += i;
//     }
//     array.push(num);   
// }
// console.log(array); 

// //Task 7

// function arrayFill(symb, num) {
//     let array = [];
//     symb = `x`;
//     num = +prompt (`введите число что будет являться длинной массива`);

//     for (let i = 0; i < num; i++){
//         array.push(symb);
//     }

//     console.log(array);
// }

// arrayFill();

// // Task 8 

// let array = [2, 4, 1, 2, 2, 3, 4];
// let res = 0;

// for (let i = 0; i < array.length; i++){
//     res += array[i];
//     if (res > 10) {
//         console.log(i + 1);
//         break;
//     }
// }

// // Task 9

// let array = [2, 5, 3, 9, 4, 0];
// let newArr = [];

// for (let i = array.length - 1; i >= 0; i--) {    
//     newArr.push(array[i]);    
// }

// console.log(newArr);

// // Task 10

// let arr = [[1, 2, 3], [4, 5], [6]];

// function getSum(array) {    
//     let newArr = array.flat();
//     let sum = 0;

//     for (let i = 0; i < newArr.length; i++) {
//         sum += newArr[i];  
//     }
//     return console.log(sum);
// }

// getSum(arr);

// // Task 11 

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// function getSum(array) {
//     let newArr = array.flat();
//     let sum = 0;

//     for (let i = 0; i < newArr.length; i++){
//             newArr = newArr.flat();
//     }
    
//     for (let j = 0; j < newArr.length; j++) {
//         sum += newArr[j];  
//     }

//     return console.log(sum);
    
// }

// getSum(arr);





