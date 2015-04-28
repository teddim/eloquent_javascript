// Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.
//
// Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var missing_persons = function(person){
  if(person.mother !== null && byName[person.mother] !== undefined) {
    return true;} else {
      return false;
    }
};

var age_difference = function(person){
  return ( person.born - byName[person.mother].born);
};

var byName = {};

ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ancestry_has_mom = ancestry.filter(missing_persons).map(age_difference);

console.log(average(ancestry_has_mom));
