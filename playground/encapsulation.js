// Encastleation no no no Encapsulation
// Think of a castle that we want to protect from outside forces
// We have a bridge that is our interface and a moat that prevents outsiders from coming in and messing with stuff.

// person.js
function Person(name,title,evil,enemyOfKing) {
  this.name = name;
  this.title = title;
  this.evil = evil;
  this.enemyOfKing = enemyOfKing;

  var that = this; // setting this variable allows us to access this from the functions below

  // we return an object so that the properties above can only be accessed by the setters and getters that we are returning here. This is the encapsulation
  return {
    getName: function() {
      return that.name;
    },
    setTitle: function(newTitle) {
      that.title = newTitle;
    },
    getTitle: function() {
      return that.title;
    },
    setEvil: function(newEvil) {
      that.evil = newEvil;
    },
    getEvil: function() {
      return that.evil;
    },
    setEnemyOfKing: function(newEnemyOfKing) {
      that.enemyOfKing = newEnemyOfKing;
    },
    getEnemyOfKing: function() {
      return that.enemyOfKing;
    }
  };
}

// castle.js
function Castle(people) {
  //filter out the evil people and keep an array of good citizens
  this.people = people.filter(function(person) {
    return !person.getEvil();
  });

  var that = this;

  return {
    addPerson: function(person) {
      // only add the person if they are not evil and not enemy of the king
      if (person.getEvil() || person.getEnemyOfKing()) {
        return false;
      } else {
        that.people.push(person);
        return true;
      }
      that.people.push(person)
    },
    removePerson: function(person) {
      var personIndex = that.people.indexOf(person); //find the person in the list, -1 means the person is not there
      if (personIndex > -1) {
        that.people.splice(personIndex, 1); // if the person is there remove them
        return true;
      } else {
        return false;
      }
    },
    getPeople: function(){
      return that.people; //getter
    },
    headCount: function(){
      return this.getPeople.length;
    },
    purgeEvilInsiders: function() {
      var thatHere = this; // we need to set yet another that because now we are inside of a function inside of the object
      that.people.filter(function(person) {
        return person.getEvil();
      }).forEach(function(evilPerson) {
        thatHere.removePerson(evilPerson);
        });
      }
  };
}
module.exports = Castle;

//simulation.js

var Castle = require('./castle');
var Person = require('./person');

var evil = new Person("Andreas", "Executioner", true, false);
var smiler = new Person("Steve", "Smiler", false, false);

var people = [
  new Person("Dylan Haml", "Joker", false, true),
  new Person("Pamela", "Princess", false, false),
  new Person("Teddi", "Knight", false, true),
  smiler,
  evil
]

var castle = new Castle(people);

console.log("Expecting -1 for Evil person in the castle");
console.log(castle.getPeople().indexOf(evil)); //-1

console.log("Expecting 3 for Smiler person in the castle");
console.log(castle.getPeople().indexOf(smiler)); //3

console.log("The headcount for the castle should be 4");
console.log(castle.headCount()); //4

// let's make Steve evil
smiler.setEvil(true);
castle.purgeEvilInsiders();

console.log("Expecting -1 for Evil person in the castle");
console.log(castle.getPeople().indexOf(smiler)); //-1

console.log("The headcount for the castle should be 3");
console.log(castle.headCount()); //3

//ruby defaults to private and js defaults to everything being public when creating new constructor variables
