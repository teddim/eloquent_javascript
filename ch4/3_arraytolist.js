// Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

//This one is out of my ZPD, but if I had another few hours I might get there. Aren't these exercises supposed to take 30-60 minutes? Definitely not the case for this one. It took me a while to understand the problem and requirements and I'm still not sure I have a full understanding of it. I did play around with creating and linking lists in node, but there are some nuances that I'm just not getting.


//got this to work
function prepend(element,list) {
  return {
    value: element,
    rest: list
    };

}

//seems to work, but it may be the culprit of my problems below
function nth (list,number) {
  var count = 0;
  while (list !== null) {
    if (count === number) {
      return list.value;
    }
    list = list.rest;
    count++;
    }
    return undefined;
  }

var arrayToList = function(array) {
  //create each list item where value is the value of the array at the nth index
  // the first list sent should be null, but subsequent lists will be the accumulation of the list elements I am creating
  var list = null;
  for (var i = array.length-1; i > -1; i--) {
    list = prepend(array[i], list);
    console.log('arraytoList, list value:' + list.value + 'list rest:' + list.rest + ' i:' + i)
  }
  return list;
};

//some funny business is going on with this. The second value is not saving to the array
var listToArray = function (list) {
  var array = [];
  for (var i = 0; list != null; i++) {
    array[i] = nth(list,i);
    console.log('list:' + list.rest + 'array:' + array[i]);
    list = list.rest;
    }
    return array;
  };

//
//
//
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
