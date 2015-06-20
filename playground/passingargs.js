var dumpWrap =
    function (aFnc) {
      return function() {
        return aFnc(null,arguments);
      };
    };

var test = function(a,b) {
  if (a===undefined) { return -1; }
  else {
    if (b===undefined) return a*3;
    else {return a*b;}
  }
};
//console.log(test());
//console.log(test(2));
//console.log(test(2,8));

var clock = function (a,b) {

  console.log(arguments);
  for (var prop in arguments) {
     console.log(prop);
  }

};

clock(1,2,4,5,6,7);

var silly =
    function (aFnc) {
      return function(arg) {
        val = aFnc(arg);
        return val;
      };
    };
//console.log( silly(isNaN)(5));
//console.log(   silly(function(a){return a*2;})(2)   );
