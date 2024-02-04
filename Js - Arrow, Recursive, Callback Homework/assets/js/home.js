"use strict";

// function numberDivision(num) {
//   if (num % 3 === 0 && num % 7 === 0) {
//     return "number is divided";
//   } else {
//     return "number is not divided";
//   }
// }

// console.log(numberDivision(25));

// function factorial(number) {
//   if (number > 0) {
//     let multi = 1;
//     for (let i = 1; i <= number; i++) {
//       multi *= number;
//     }
//     console.log(multi);
//   }
// }
// factorial(4);

// function multiSum(numbers) {
//   let sum = 0;
//   let multiply = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       multiply = numbers[i] ** 2;
//       sum += multiply;
//     }
//   }
//   console.log(sum);
// }

// let numbers = [1, 2, 3, 4, 5];
// multiSum(numbers);

// function login(email, password) {
//   if (email == "cavid@code.edu.az" && password === "12345") {
//     return "Login is successfull";
//   }
//   return "Login is not successfull";
// }

// const password = "12345";
// const email = "cavid@code.edu.az";

// let response = login(email, password);
// console.log(response);

// function sumOfOddNumbers(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//       sum += nums[i];
//     }
//   }
//   return sum;
// }
// let nums = [1, 3, 5, 7, 9];
// console.log(sumOfOddNumbers(nums));

// function sumOfEvenNumbers(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let arr = [1, 3, 5, 7, 9];
// console.log(sumOfEvenNumbers(arr));

// const sum = function (a, b){
// return a + b;
// }

// const sum = (a, b) =› {
// return a + b;
// }

// console. log (sum (3, 5))

//function test(){
//    for (let i=0;i<arguments.length;i++) {
//        console.log(arguments[i]);
//    }
//}
//test(1,2,3,4,5);

//for (let i=0;i<arguments.length;i++) {
//    console.log(arguments[i]);
//}

//const test = ()=>{
//    for (let i=0;i<arguments.length;i++) {
//        console.log(arguments[i]);
//    }
//}
//test (1,2,3,4,5)

//function test() {
//  console.log(this);
//}
//const getSum = () => {
//  console.log(this);
//};

//test();
//getSum();

// let stu = {
//   name: "Oruj",
//   surname: "Mehrabov",
//   age: 26,
//   fullName: () => {
//     console.log(this);
//   },
//   fullData: function () {
//     console.log(this.name + " " + this.surname + " " + this.age);
//   },
// };

// stu.fullName();
// stu.fullData();
