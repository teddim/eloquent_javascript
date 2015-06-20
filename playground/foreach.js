// var add1 = function(b) {
//   var newnew = b + "weird";
//   return newnew;
// }
//
// var print = function(a) {
//   // console.log(a + " weird");
//   b = a + " weird"
//
// }
//
// var array = ["this", "that"];
//
// array.forEach(print);
// print_value = array.forEach(print);
// console.log(b);

//


// array2 = ["hello", "goodbye", "no way"];

array3 = [1,2,3]
var add_them = function(a,b) {
  console.log("a: " + a + " b:" + b)
  return a + b ;
}
array3.reduce(add_them,0);
