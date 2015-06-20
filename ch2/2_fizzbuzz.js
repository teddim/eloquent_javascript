for (var i = 1; i < 101; i++) {
  if (i%15 === 0) {
    console.log("FizzBuzz");
  }
  else if (i%3 === 0) {
    console.log("Fizz");

  }
  else if (i%5 === 0) {
      console.log("Buzz");
    }

  else {
      console.log(i);
    }
}

// One output instead of several calls to console.log
for (var i = 1; i < 101; i++) {
var output = i;

  if (i%3 === 0) {
    output += "Fizz";

  }
  if (i%5 === 0) {
    output += "Buzz";
    }


console.log(output);
}
