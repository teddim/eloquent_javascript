var inputArray = [1,2,3,4,5,6];

function reverseIt (array) {
  var reversedArray = [];
  for (var i = array.length -1; i>= 0; i--) {
  reversedArray.push(array[i]);
  }
  return reversedArray;
}

//not working yet
function reverseItAgain (array) {
  function swap (a,b) {
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
  }
  for (i = 0; i < array.length; i++) {
    if (i === array.length - i) {
      return [];
    }
    swap(i, array.length - i);
  }

  return "done";
}

console.log(reverseIt(inputArray));
reverseItAgain(inputArray);
console.log(inputArray);
