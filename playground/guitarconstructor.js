// sample usage


function Guitar(brand, color, numberOfStrings) {
  this.brand = brand;
  this.color = color;
  this.numOfStrings = numberOfStrings;

}

Guitar.prototype.toString = function() {

  return ['A', this.color, this.brand, 'with', this.numberOfStrings, 'strings'].join(' ');
};
var g = new Guitar("Fender", "sunburts red", 6);
console.log(g.toString());

/////////////////////// a way to do it that would not work because
// this is undefined as it is referring to the object it is a part of.
// look into Setters and Getters

function Guitar(brand,color, numberOfStrings) {
  this.brand = brand;
  this.color = color;
  this.numOfStrings = numberOfStrings;
  // in order to solve the problem, we need to create a variable that captures this for use later
  var that = this;

//this explicit object return is preventing the rest of the properties from being returned
// returning an explicit object from a constructor
//bennadel.com blog post
  return {
    toString: function() {
      // return ['A', this.color, this.brand, 'with', this.numberOfStrings, 'strings'].join(' ');
      // here we are using that instead of this
      return ['A', that.color, that.brand, 'with', that.numberOfStrings, 'strings'].join(' ');
    },
    getBrand: function() {
      return that.brand;
    },
    setBrand: function(newBrand) {
      var acceptableBrandList = ['Fender', 'Gibson'];
      if (newBrand in acceptableBrandList) that.brand = newBrand;
      else return false;
    }
  }
}


Guitar.prototype.toString = function() {

  return ['A', this.color, this.brand, 'with', this.numberOfStrings, 'strings'].join(' ');
};
var g = new Guitar("Fender", "sunburts red", 6);
console.log(g.toString());
