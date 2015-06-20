function Bicycle(wheelSize, color) {
  this.wheelSize = wheelSize;
  this.color = color;
}

Bicycle.prototype.toString = function () {
return "This sweet" + this.color + " bicycle has an awesome" + this.wheelSize + "wheelset.";
};

Bicycle.prototype.takeForRide = function () {
  return "Currently riding a shiny " + this.color + " bike down the sidewalk!";
};

// if this was added to the prototype after the RoadBike was created, it would still have access to this
Bicycle.prototype.fooBar = function() {
  return 'foo2 bar';
}

var bicycleProto = new Bicycle('26"', 'orange');
// implement a RoadBike using prototypal inheritance of the Bicycle constructor
// use the Bicycle constructor to create a prototype object to use for all RoadBikes

function RoadBike(wheelSize, color) {
  this.validWheelSizes = ['700C'];
  //acts similar to validate :foo, inclusion_in: [1,2,3]
  if (this.validWheelSizes.indexOf(wheelSize) == -1) {
    throw "wheelsize for bikes must be one of " + this.validWheelSizes.join(', ');
  }
  this.color = color;
}

RoadBike.prototype = bicycleProto;

// Implement a MountainBike using prototypal inheritance of an instance of the Bicycle constructor
// MountainBikes have a frontSuspension property
function MountainBike(wheelSize, color, frontSuspension) {
  this.validWheelSizes = ['26"', '27.5"', '29"'];//acts similar to validate :foo, inclusion_in: [1,2,3]
  // if (this.validWheelSizes.indexOf(wheelSize) == -1) {
  //   throw "wheelsize for bikes must be one of " + this.validWheelSizes.join(', ');
  // }
  this.validateWheelSize(wheelSize);
  this.wheelSize = wheelSize;

  this.color = color;
  this.frontSuspension = frontSuspension;
  // if we added the code below then the Liskov principle would not be in effect because now MountainBike is not substitutable for StreetBike
  this.toString = function() {
    return undefined;
  }
}

MountainBike.prototype = bicycleProto;


var redRoadBike = new RoadBike('700C', 'red');
redRoadBike.toString(); // "This sweet red bike has an awesome 700C wheelset."
redRoadBike.takeForRide(); // "Currently riding a shiny red bike down the sidewalk!"

// we want to validate that all bikes have the wheel size that they need. So far we have not implemented it that way. We have duplicate logic baked into the subtypes.
Bicycle.prototype.validateWheelSize = function(wheelSize) {
  if (this.validWheelSizes.indexOf(wheelSize) == -1) {
    throw "wheelsize for bikes must be one of " + this.validWheelSizes.join(', ');
  }

}

// Within the Bike functions we can replace that code with this.validateWheelSize(wheelSize)

// Liskov substitution principle
// If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desireable properties of the program(correctness, does what it is supposed to do).
