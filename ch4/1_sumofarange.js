var range = function (start, end, step) {
  var array = [];
  if (step === undefined) {
      step = 1;
  }
  if (step < 0) {
    for (var i = start; i > end - 1; i+=step) {
      array.push(i) ;
    }
  }
  else {
    for (var j = start; j < end +1; j+=step) {
      array.push(j) ;
    }
  }
  return array;
};

var sum = function (range) {
  var sum = 0;
  for (var i = 0; i < range.length; i++) {
    sum += range[i];
  }
  return sum;
};

var sum_recursive = function (range) {
  if (range.length === 0) {
    return sum;
  }
  else{
    sum_recursive(range.slice(1,range.length-1));
  }
};


console.log(sum(range(1, 10)));
// → 55
console.log(sum_recursive(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
