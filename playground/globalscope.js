

function global_function() {
  var local_function = function () {
    return a;
  };

  var inner_global = function () {
    var a = "this is a";
    return local_function();
  }
  return inner_global();
};

// console.log(local_function());
console.log(global_function());

// console.log("local function without (): " + local_function);
// console.log("local function with (): " + local_function());
