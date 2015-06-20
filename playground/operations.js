
function reverseWords(string){
  var result = string.split(' ').reverse().join(' ');
  return result;
}

function addition(string) {
  var stringToArray = string.split('+'),
      result = 0;
  for (var i =0; i< stringToArray.length; i++) {
    result+= Number(stringToArray[i]);
  }
  return result;
}

function multiplication(string) {
  var stringToArray = string.split('*'),
      result = 1;
  for (var i =0; i< stringToArray.length; i++) {
    result*= Number(stringToArray[i]);
  }
  return result;
}

function mixedOps(string) {
  var stringToArray = string.split('+'),
      result = 0;
  for (var i =0; i< stringToArray.length; i++) {
    result += multiplication(stringToArray[i]);
  }
  return result;
}

//Andreas' solution
// function mixedOps(string) {
//   return addition(string.split('+').map(multiplication).join('+'));
// }

// Look up RPN reverse polish notation to learn how to solve math problems in a different way

console.log(reverseWords("This s3nt3nce. is awesome.ly awesome# %forRealz"));

console.log(addition("1+2+10+12+20+22"));
console.log(multiplication("1*2*10*12*20*22"));
console.log(mixedOps("1*2*10+12*20*22"));
