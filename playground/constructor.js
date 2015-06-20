function LengthInFeet(num) {
  this.number = num;
}

function LengthInMeters(num) {
  this.number = num;
}

LengthInFeet.prototype.toFeet = function() { return this.number; };
LengthInFeet.prototype.toMeters = function() { return this.number / 3.28084; };

LengthInMeters.prototype.toFeet = function() { return this.number * 3.28084; };
LengthInMeters.prototype.toMeters = function() { return this.number; };


var width = new LengthInMeters(2);
var length = new LengthInFeet(13);

//this version will return the wrong answer. The solution is to use polymorphism
var nasaArea = width * length;

var actualArea = width.toFeet() * length.toFeet();
