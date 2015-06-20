// in comments (by line with // or using /* comments here */, write down how you solve this problem in English
// write a test for it
// solve the problem in code

// Questions:
//
// In an array the integers 1-100 are stored, but one number is missing how do you find it?

// create a function that takes an array as an argument
// sort the array
// add zero to the first spot in the array
// compare the array value at element i with i. If they are not the same then that is the number that is missing

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    min = 1,
    max = 101;

// var missingNum = Math.floor(Math.random() * (max - min)) + min;
// for (var i = 1; i < 101; i++) {
//   input.push(i);
// }
// console.log(input);
// input.splice(missingNum,1);

var missingNum = 53;
  console.log(input, missingNum);
function findMissing(array) {
  var result;
  array.unshift(0);
  for (var i = 0; i < array.length; i++) {
      if (array[i] !== i) {
        return i;
      }
  }
}

console.log("missing number is: " + missingNum);
console.log(findMissing(input));
// expect findMissing(input).toBe(missingNum);
