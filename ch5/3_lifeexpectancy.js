var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var century, age;
var centuries = {};

ancestry.forEach(
  function(person) {
    century = Math.ceil(person.died / 100);
    age = person.died - person.born;

    if (centuries[century]) {
      centuries[century].push(age);
    }
    else {
      centuries[century] = [age];
    }
});


for (prop in centuries) {
  console.log(prop + ": " + (average(centuries[prop]).toFixed(1)));
  }

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94


// collect a list of centuries in the dataset (filter)
// build object with centuries (object creation)
// fill in object the born date
// loop through the centuries object and push in ages
// average the ages per century
