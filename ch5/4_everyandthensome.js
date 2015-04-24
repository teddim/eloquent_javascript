var every = function (array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i])) { return false; }
  }
  return true;
};

var some = function (array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) { return true; }
  }
  return false;
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

// every everything in the first argument needs to be true in the second argument
// some if at least one thing in the first argument is in the second argument then true

// loop through the array and if each thing is equal to the predicate then true
// as soon as one thing is not equal to the predicate

// loop through each thing and as soon as one returns true then we return true to the whole

// predicate  - a function that returns true or false
