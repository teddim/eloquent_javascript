function filter(array, test){
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}


var array = [1,2,3];
var test = function(num) {return num%2 === 0;}
filter(array, test);

//////////////////////////////////

function map(array, transform){
  var mappedArray = [];
  for (var i = 0; i < array.length; i++) {
      mappedArray.push(test(array[i]));
  }
  return mappedArray;
}


var array = [1,2,3];
var test = function(num) {return num*50;}
map(array, test);

///////////////////////////////////////

function sum(array) {
  return array.reduce(function(total,inc){
    return total + inc;
    });

}

var array = [1,2,3];
console.log(sum(array));

///////////////////////////////////////

function product(array) {
  return array.reduce(function(total,inc){
    return total * inc;
    });
}

var array = [1,2,3];
console.log(product(array));

////////////////////////////////////////
var array = [true, true, false, false];

function any(array) {
  return array.reduce(function(pval, val) {
    return Boolean(pval) || Boolean(val) ;
  }, 'red');
}

console.log(any(array));
