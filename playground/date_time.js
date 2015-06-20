// function timeLapse (x) {
//  x = new Date();
//  return function (y) {
//    y = new Date();
//    return y.getMilliseconds() - x.getMilliseconds();
//  };
//
// }
//
// var teddiDoesThisLookRight = timeLapse("begin");
// console.log(teddiDoesThisLookRight("end"));

//
var teddiDoesThisLookRight = timeLapse("begin");
console.log(teddiDoesThisLookRight("end"));

function toTest(a,b) {
  return (a+b);
}

function timeLapse (x) {
 x = new Date();
 return function (y) {
   y = new Date();
   return y.getMilliseconds() - x.getMilliseconds();
 };
}
