var min = function(arg1, arg2) {
    if (arg1 < arg2) {
      return arg1;
    }
    else {
      return arg2;
    }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
