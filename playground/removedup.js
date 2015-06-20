// Write an algorithm that removes all duplicate elements from the array.

// function takes an array as it's parameter
// create a new array
// find out whether or not the next value of the given array exists in the new array indexOf
// if not, then push it onto the new array
// return the new array


function removeDuplicate(array){
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1)
    result.push(array[i]);
  }
  return result;
}

var input = [1,2,1,3,4,1];
removeDuplicate(input);
// [1,2,3,4]
