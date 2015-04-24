
var flatten = function(a, b) {
  return a.concat(b);
 };

var reduce_array = function(ar) {return ar.reduce(flatten)};

var arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]
console.log(reduce_array(arrays));
