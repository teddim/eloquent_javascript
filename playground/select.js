function _select(array, selectingFn) {
  return array.filter(selectingFn);
}

function select(array, selectingFn) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    if (selectingFn(array[i])) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}

var input = [6,,4,3,1,2,3,4];
function isEven(num) {
  return (num % 2 === 0);
}

console.log(_select(input, isEven));
console.log(select(input, isEven));


////////////////////////////////////////////////////////////
function takeWhile(array, takingFn) {
  var returnArray = [],
  i = 0,
  element = array[i];

  while (takingFn(element) && takingFn(element) !== null) {
    returnArray.push(element);
    i++;
    element = array[i];
  }
  return returnArray;
}

var input = [6,4,3,1,2,3,4];
function isEven(num) {
  return (num % 2 === 0);
}
console.log(takeWhile(input, isEven));
