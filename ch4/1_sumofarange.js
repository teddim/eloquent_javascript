function range(start, end, step) {
  var array = [];
  if (step === undefined) {
      var step = 1;
  }
  if (step < 0) {
    for (var i = start; i > end - 1; i+=step) {
      array.push(i) ;
    }
  }
  else {
    for (var i = start; i < end +1; i+=step) {
      array.push(i) ;
    }
  }
  return array;
}

function sum(range) {
  sum = 0;
  for (var i = 0; i < range.length; i++) {
    sum += range[i];
  }
  return sum;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
