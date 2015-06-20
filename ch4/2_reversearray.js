// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

//  I would expect reverseArray to be useful in more situations because it has a return value that other functions can do things with.

// I would expect the reverseArrayInPlace variant to be more efficient because I think it uses less memory than reverseArray does. The array is stored once plus half of it is temporarily stored throughout the function in reverseArrayInPlace vs having two full copies of the array in the reverseArray function.


var reverseArray = function(input_array) {
  var new_array = [];
  for (var i = input_array.length-1 ; i >= 0; i--) {
    new_array.push(input_array[i]);
  }
  return new_array;
};

var reverseArray_foreach = function(input_array) {
  var new_array = [];
  input_array.forEach(function(a) {new_array.unshift(a);});
  return new_array;
};

var reverseArray_map = function(input_array) {
  return input_array.map(function(a,idx,input_array) {
    return input_array[input_array.length - 1 - idx];
  });
};

var reverseArrayInPlace = function(arrayValue) {
  function swap(a,b) {
    var tmp = arrayValue[a];
    arrayValue[a] = arrayValue[b];
    arrayValue[b] = tmp;
  }
  var num = arrayValue.length - 1;
  for (var i = 0; i < num/2; i++) {
    swap(i, num - i);
  }
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// WORKING THROUGH SOLVING THIS PROBLEM WITH JEFF DEAN

var x = [a,b,c,d,e];
//x should become [e,d,c,b,a]

// Step 1: solve for 1 input, hardcoding numbers
var result = [];
result.push(x[4]);
result.push(x[3]);
result.push(x[2]);
result.push(x[1]);
result.push(x[0]);
console.log(result);

// Step 2: create uniformity - substitute the numbers with i
var i = 4;
result.push(x[i]);
i--;
result.push(x[i]);
i--;
result.push(x[i]);
i--;
result.push(x[i]);
i--;
result.push(x[i]);
console.log(result);

// Step 3: variable-ize the inputs
var i = x.length -1;
result.push(x[i]);
i--;
result.push(x[i]);
i--;
result.push(x[i]);
i--;
result.push(x[i]);
i--;
result.push(x[i]);
console.log(result);

// Step 4: solve the iteration problem
for (var i = array.length -1; i <= 0; i--) {
  result.push(x[i]);
}
console.log(result);

// Step 5: functionize it
var arrayReverse = function() {
  var result = [];
  for (var i = array.length -1; i <= 0; i--) {
    result.push(x[i]);
  }
    return result;
}

console.log(arrayReverse(x));

/////////////////////////////////////

// a is the element at the current index of the array
// idx is the index number of the current index of the array
// array is the array that was passed to the function

var reverseArray_map = function(input_array) {
  return input_array.map(function(a,idx,input_array) {
    //uncomment the line below to see the arguments that are passed in. arguments is a javascript keyword for an object that shows all of the arguments you passed to the function.
    //console.log(arguments);
    return input_array[input_array.length - 1 - idx];
  });
};

console.log(reverseArray_map(["A", "B", "C"]));
