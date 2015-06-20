// https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour
// Problem 1
//
// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
//

function addition(nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
  }
  return sum;
}

function additionWhile(nums) {
  var sum = 0,
  iterator = 0;
  while (iterator < nums.length) {
    sum+= nums[iterator];
    iterator++;
  }
    return sum;
}

function additionRecursion(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return (nums[0]) + additionRecursion(nums.slice(1));

}
// Problem 2
//
// Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
//

function combine(list1,list2) {
  var result = [];
    for (var i = 0; i < list1.length; i++) {
      result.push(list1[i]);
      result.push(list2[i]);
    }
    return result;
}
// Problem 3
//
// Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
function fibonacci(num) {
  if (num <= 0) return 0;
  if (num === 1 || num === 2) return 1;
  return fibonacci(num-1) + fibonacci(num -2);

}

//
// Problem 4
//
// Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.
//
// Update: Apparently this problem got a lot of people talking (although not as much as Problem 5 below.) You can click here to read my solution.

function largeNum(list) {
  function numSort(a,b) {
    return b-a;
  }
  list.sort(numSort);
}

console.log([2,50,1,9]);
//
// Problem 5
//
// Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order) such that the result is always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
//