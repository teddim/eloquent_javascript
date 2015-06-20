// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

// This is totally out of my ZPD and at this point (almost 12:30am) it isn't valuable to continue because I am way too tired.

function deepEqual(object1, object2) {
  //for each element in the object, make a comparison
  //figure out how to traverse the object

  //if one of the objects is null then return false
  if(object1 === null || object2 === null) {
    return false;
  }
  //find out if they are pointing to the same place in memory
  if (object1 === object2 && object1 !== null) {
    return true;
  }

  //count the number of properties, if they are not the same then return false
  //figure out how to count the number of properties

  // if the types are the same and the values of the properties are the same then return true. Do I access the properties by naming them with 'here' and 'object' or does it need to be more generic than that?
  if (typeof object1 === typeof object2) {

  }


}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
