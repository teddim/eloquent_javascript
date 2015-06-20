var palindrome = function(string) {
  string = string.trim();
  if (string.charAt(0) === string.charAt(string.length-1)) {
    if (string.length === 0) { return true;}
    else {
      palindrome(string.substr(1,string.length-1));
      return true;
    }
  }

  else { return false; }

};

var palindrome2 = function(string) {
    if (string.length < 2) {return true;}
    return string.charAt(0) === string.charAt(string.length -1) &&   palindrome2(string.slice(1,string.length -1));

};

console.log(palindrome("hello")); //false
console.log(palindrome("mom")); //true
console.log(palindrome("racecar")); //true
console.log(palindrome("poo p")); //true

console.log(palindrome("eva can ignite virtuosos out riveting in a cave")); // true
