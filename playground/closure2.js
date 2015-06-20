// greaterThan20 (returns true)
//greaterThan50 (returns true)
// greaterThanA("e")

//  function greaterThan20 (number){
//   return number > 20;
// }

// function greaterThan50(number){
//   return number > 50;
// }

// function greaterThanA(letter) {
//   return letter > "A";
// }

function greaterThan(setValue) {
  return function(compareValue) {
    return compareValue > setValue;
  };
}

var greaterThan20 = greaterThan(20);
var greaterThan50 = greaterThan(50);
var greaterThanA = greaterThan("A");


// console.log("expect false, got:" + greaterThan20(1));
// console.log("expect false, got:" + greaterThan20(20));
// console.log("expect true, got:" + greaterThan20(25));
// console.log("expect false, got:" + greaterThan20(-21));

console.log("expect false, got:" + greaterThan50(1));
console.log("expect false, got:" + greaterThan50(50));
console.log("expect true, got:" + greaterThan50(55));
console.log("expect false, got:" + greaterThan50(-51));

console.log("expect false, got:" + greaterThanA(1));
console.log("expect true, got:" + greaterThanA("a"));
console.log("expect true, got:" + greaterThanA("b"));
console.log("expect false, got:" + greaterThanA("A"));
