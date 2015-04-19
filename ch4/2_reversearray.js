// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

//  I would expect reverseArray to be useful in more situations because it has a return value that other functions can do things with.

// I would expect the reverseArrayInPlace variant to be more efficient because I think it uses less memory than reverseArray does. The array is stored once plus half of it is temporarily stored throughout the function in reverseArrayInPlace vs having two full copies of the array in the reverseArray function.


function reverseArray(input_array) {
  var new_array = [];
  for (var i = input_array.length-1 ; i >= 0; i--) {
    new_array.push(input_array[i]);
  }
  return new_array;
}

function reverseArrayInPlace(arrayValue) {
  function swap(a,b) {
    var tmp = arrayValue[a];
    arrayValue[a] = arrayValue[b];
    arrayValue[b] = tmp;
  }
  var num = arrayValue.length - 1
  for (var i = 0; i < num/2; i++) {
    swap(i, num - i);
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
