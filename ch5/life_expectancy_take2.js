// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.
//
// Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
};

var century = function(died) {
  return Math.ceil(died / 100);
};

var age = function(person) {
  return person.died - person.born;
};

ancestry_by_century = {};

ancestry.forEach(function(person) {
  var current_century = century(person.died);
  if (!ancestry_by_century[current_century]) {
    ancestry_by_century[current_century] = [];
  }
  ancestry_by_century[current_century].push(age(person));
});

console.log(ancestry_by_century);

for (property in ancestry_by_century) {
  console.log(property + ": " + (average(ancestry_by_century[property]).toFixed(1) + " years"));
};
