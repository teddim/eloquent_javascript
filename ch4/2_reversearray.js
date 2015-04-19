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
