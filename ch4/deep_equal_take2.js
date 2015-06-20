// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
//
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

var isObject = function(value) {
  if ( value === null ) { return false; }
  else {
    return typeof value === 'object';
  }
};

var areSameSize = function(value1, value2) {
  var count1 = 0, count2 = 0;
  for (var property1 in value1) {
    count1++;
  }
  for (var property2 in value2) {
    count2++;
  }
  return count1 === count2;

};

var sameProperties = function(value1, value2) {
  var array1 = Object.keys(value1);
  var array2 = Object.keys(value2);
  for (var i = 0; i < array1.length ; i++) {
    if (array1[i] !== array2[i]) {return false};

  }
  return true;
};

var deepEqual = function(value1, value2){
  if (isObject(value1) || isObject(value2)) {
    return areSameSize(value1, value2) && sameProperties(value1, value2);
  }
  else {
    return value1 === value2;
  }
};
var obj = {here: {is: "an"}, object: 2};

console.log("expected true:" + sameProperties({5: 'test'},{5: 'test'}));
// true

console.log("expected true:" + deepEqual(null, null));
// //
console.log("expected true:" + deepEqual(obj, obj));
// // → true
console.log("expected false:" + deepEqual(obj, {here: 1, object: 2}));
// // → false
console.log("expected true:" + deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
//
console.log("expected false:" + deepEqual(obj, {here: {is: "an"}, object: 3}));
// // → false
