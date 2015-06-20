
function math(string) {
  values = string.split('/');
  if (values.indexOf("0") > -1) {
    return "division by zero is undefined";
  }
  result = values.reduce(function(prevValue, currValue) {
    return prevValue/currValue;
  });
  return result;
}


function subtract(string) {
  values = string.split('-');
  result = values.reduce(function(prevValue, currValue) {
    return prevValue - currValue;
  });
  return result;
}

function division(string) {
  values = string.split('/');
  if (values.indexOf("0") > -1) {
    return "division by zero is undefined";
  }
  result = values.reduce(function(prevValue, currValue) {
    return prevValue/currValue;
  });
  return result;
}


console.log(subtract("100-12-20")); //68
console.log(subtract("0 - 100")); //68
console.log(division("100/20")); //5
console.log(division("0/4")); //0
console.log(division("0/20/0")); //0
