var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};

ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ages_array = [];

var ages = ancestry.map(function(person) {
    var mother, mother_born;
    if (person.mother !== null) {
      mother = person.mother;

        if (byName[mother]) {
          mother_born = byName[mother]["born"];
          ages_array.push(person.born - mother_born);
        }
    }

  });

console.log(average(ages_array));



// → 31.2

// check if a person does not have a mother property
// find the data of their mother (born year)
// subtract original person's born year from mother's born year
// make an array of those differences and then compute the average
// use byName to find the mothers
