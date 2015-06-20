// inventory tracking for an ice cream truck
// what do you need to keep track of?
// properties are the ice cream and values are the quantity
// Chaco taco: 10,
// Sprinkles: 5000


//return value of a constructor is ALWAYS an object
function IceCreamTruck(inventory) {

  // this.inventory is tracking the state
  this.inventory = inventory || {}; //in case someone tries to create a truck without any inventory, we will supply a default empty object
  this.smart = true;
}

// when we put the method on the prototype instead of inside of the constructor then it only lives on the prototype and is not added baggage on each instance of the object because it isn't on the constructor itself.


iceCreamTruck.prototype.purchase = function(name, amount) {
  var outcome = '';
  if (amount > this.inventory[name]) { // anytime you are dealing with subtraction or division you need to be careful and build in a conditional to guard against weird math and issuing credits (like Amazon allowing you to buy negative amounts of books and then issuing a check to you)
    outcome = "We don't have " + amount.toString() + ' ' + name + ' ice creams.' ;
  } else {
  this.inventory[name] -= amount;
  outcome = amount.toString() + ' ' + name + ' ice creams purchased';
  }
  return outcome;
}

var inventory = {
  "Big Sundae Cups" : 10,
  "Chaco Taco" : 5,
  "King Cone" : 3,
  "Firecracker" : 4,
  "Drumstick" : 15
};

var IceCreamTruck = new IceCreamTruck(inventory);
// how could we add a purchase functionality? to make the below return what we want?
iceCreamTruck.purchase("King Cone", 2); // "2 King Cone ice creams purchased"
console.log(iceCreamTruck.inventory["King Cone"]); //1

//let's test for what happens when we request more ice creams than there are in inventory
iceCreamTruck.purchase("King Cone", 2000); // "2 King Cone ice creams purchased"
console.log(iceCreamTruck.inventory["King Cone"]); //1


////////////////////////// Another way to structure this Constructor is to encapsulate the properties and return an explicit object. Our methods are returned as part of that object instead of being added to the prototype.

function IceCreamTruck(inventory) {
  this.inventory = inventory || {};

  var that = this; // create a that variable so that this is available to the methods in the object we are returning

  //returning an explicit object here is making this.inventory private
  return {
    changeInventory: function() {
      that.inventory['foo ice cream'] = 40; // usage of 'that' is a closure
    }
  }
}

var inventory = {
  "Big Sundae Cups" : 10,
  "Chaco Taco" : 5,
  "King Cone" : 3,
  "Firecracker" : 4,
  "Drumstick" : 15
};
